import Hero from "@/components/Hero";
import WhatIsPF from "@/components/WhatIsPF";
import ToolsTeachers from "@/components/ToolsTeachers";
import ToolsStudents from "@/components/ToolsStudents";
import FAQ from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <ScrollReveal>
        <section id="what-is-pf">
          <WhatIsPF />
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <section id="tools-teachers">
          <ToolsTeachers />
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <section id="tools-students">
          <ToolsStudents />
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <section id="faq">
          <FAQ />
        </section>
      </ScrollReveal>
    </>
  );
}
