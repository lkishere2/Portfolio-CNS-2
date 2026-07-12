import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import ProjectsSection from "./ProjectsSection";
import Conclusion from "./Conclusion";

export default function HomePage() {
  return (
    <main>
      <Introduction />
      <AboutMe />
      <ProjectsSection />
      <Conclusion />
    </main>
  );
}