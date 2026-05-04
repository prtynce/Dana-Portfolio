
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutMe } from "@/components/about-me";
import { Projects } from "@/components/projects";
import { Stats } from "@/components/stats";
import { Timeline } from "@/components/timeline";
import { Lab } from "@/components/lab";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { CursorGlow } from "@/components/cursor-glow";

export default function Home() {
  return (
    <main className="relative bg-background">
      <CursorGlow />
      <Navbar />
      <Hero />
      <AboutMe />
      <Stats />
      <Projects />
      <Timeline />
      <Lab />
      <Contact />
      <Footer />
      
      {/* Floating dot navigation map */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-50">
        {["home", "about", "projects", "timeline", "lab", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="w-3 h-3 rounded-full border border-primary/50 transition-all hover:scale-150 hover:bg-primary/20 peer"
            title={id.charAt(0).toUpperCase() + id.slice(1)}
          />
        ))}
      </div>
    </main>
  );
}
