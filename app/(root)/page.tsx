import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import ProjectsTeaser from "@/components/ProjectsTeaser";
import BlogSection from "@/components/BlogSection";
import Image from "next/image";
import ContactezNous from "@/components/ContactezNous";

export default function Home() {
  return (
    <div>
      
      <Hero/>
      <ProjectsTeaser/>
      <ImpactStats/>
      <BlogSection/>
      <ContactezNous/>
    </div>
  );
}
