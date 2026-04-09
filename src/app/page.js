import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

// Minimal placeholder to reserve space while lazy chunks load
function SectionSkeleton() {
  return <div className="w-full min-h-[200px]" />;
}

// Lazy-load below-the-fold components to reduce initial JS bundle
const WhatIsPF = dynamic(() => import("@/components/WhatIsPF"), { loading: SectionSkeleton });

// Lazy-load below-the-fold components to reduce initial JS bundle
const ToolsTeachers = dynamic(() => import("@/components/ToolsTeachers"), { loading: SectionSkeleton });
const ToolsStudents = dynamic(() => import("@/components/ToolsStudents"), { loading: SectionSkeleton });
const FeaturesTeachers = dynamic(() => import("@/components/FeaturesTeachers"), { loading: SectionSkeleton });
const FeaturesStudents = dynamic(() => import("@/components/FeaturesStudents"), { loading: SectionSkeleton });
const TeacherTrainings = dynamic(() => import("@/components/TeacherTrainings"), { loading: SectionSkeleton });
const WeSimplyReveal = dynamic(() => import("@/components/WeSimplyReveal"), { loading: SectionSkeleton });
const Conferences = dynamic(() => import("@/components/Conferences"), { loading: SectionSkeleton });
const FAQ = dynamic(() => import("@/components/FAQ"), { loading: SectionSkeleton });
const UsedInCountries = dynamic(() => import("@/components/UsedInCountries"), { loading: SectionSkeleton });
const SeeItInAction = dynamic(() => import("@/components/SeeItInAction"), { loading: SectionSkeleton });

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="what-is-pf">
        <WhatIsPF />
      </section>

      <section id="tools-teachers">
        <ToolsTeachers />
      </section>

      <section id="tools-students">
        <ToolsStudents />
      </section>

      <section id="features-teachers">
        <FeaturesTeachers />
      </section>

      <section id="features-students">
        <FeaturesStudents />
      </section>

      <section id="conferences">
        <Conferences />
      </section>

      <section id="teacher-trainings">
        <TeacherTrainings />
      </section>

      <section id="we-simply-reveal">
        <WeSimplyReveal />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="used-in-countries">
        <UsedInCountries />
      </section>

      <section id="see-it-in-action">
        <SeeItInAction />
      </section>
    </>
  );
}
