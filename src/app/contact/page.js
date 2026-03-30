import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Course Project at UMSL",
};

export default function ContactPage() {
  return (
    <div className="bg-white py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">
          Contact Us
        </h1>
        <p className="mt-4 text-slate-600 text-center">
          Have a question or want to learn more about Process Feedback? Fill out
          the form below and we will get back to you.
        </p>

        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
