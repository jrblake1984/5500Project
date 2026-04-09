"use server";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function submitContact(prevState, formData) {
  const botcheck = formData.get("botcheck");
  if (botcheck) {
    return { success: true, message: "Message sent. We will get back to you soon." };
  }

  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const retypeEmail = formData.get("retypeEmail")?.toString().trim();
  const subject = formData.get("subject")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !retypeEmail || !subject || !message) {
    return { success: false, message: "All fields are required." };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  if (email !== retypeEmail) {
    return { success: false, message: "Email addresses do not match. Please re-enter your email." };
  }

  if (message.length < 10) {
    return { success: false, message: "Message must be at least 10 characters." };
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return { success: false, message: "Contact form is not configured yet. Please try again later." };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "ProcessFeedback/1.0",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: subject,
        from_name: name,
        email: email,
        message: message,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      return { success: false, message: `Mail service returned HTTP ${response.status}. Please verify your Web3Forms email.` };
    }

    if (data.success) {
      return { success: true, message: "Message sent. We will get back to you soon." };
    }

    return { success: false, message: data.message || "Something went wrong. Please try again." };
  } catch (err) {
    if (err.name === "AbortError") {
      return { success: false, message: "The request timed out. Please check your internet connection and try again." };
    }
    return { success: false, message: `Could not reach the mail service: ${err.message || "unknown error"}.` };
  }
}
