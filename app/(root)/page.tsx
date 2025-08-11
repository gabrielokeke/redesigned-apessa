import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import ProjectsTeaser from "@/components/ProjectsTeaser";
import BlogSection from "@/components/BlogSection";
import SponsorsSection from "@/components/SponsorsSection"
import Image from "next/image";
import ContactezNous from "@/components/ContactezNous";

export default function Home() {
  return (
    <div>
      
      <Hero/>
      <ProjectsTeaser/>
      <ImpactStats/>
      <BlogSection/>
      <SponsorsSection/>
      <ContactezNous/>
    </div>
  );
}
