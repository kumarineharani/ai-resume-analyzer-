import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "~/constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: " Smart feedback for your dream job " },
  ];
}

export default function Home() {
  return <main
      style={{ backgroundImage: "url('/images/bg-main.svg')" }}
      className="bg-cover min-h-screen"
  >
    <Navbar/>


    <section className="main-section">
      <div className="page-heading">
        <h1> Track Your Application & Resume Rating</h1>
        <h2>Review your submission and check AI-powered feedback.</h2>
    </div>

    </section>
    {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
              <ResumeCard
                  key={resume.id}
                  resume={resume}
              />
          ))}
        </div>
    )}

  </main>
}
