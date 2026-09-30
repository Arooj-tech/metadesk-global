import React from "react";
import CaseStudyHero from "../components/CaseStudyHero";
import CaseStudyCard from "../components/CaseStudyCard";
import CaseStudyCard2 from "../components/CaseStudyCard2";
import ClassroomCaseStudy from "../components/ClassroomCaseStudy";
import GamingCaseStudy from "../components/GamingCaseStudy";
import CTABanner from "../components/CTABanner";
import AboutFooter from "../components/AboutFooter";


export default function CaseStudy() {
  return (
    <main className="w-full min-h-screen bg-white">
      <CaseStudyHero />
            <CaseStudyCard />

            <CaseStudyCard2 />
            <ClassroomCaseStudy/>
            <GamingCaseStudy/>
            <CTABanner/>
            <AboutFooter/>
    </main>
  );
}