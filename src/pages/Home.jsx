import { Link } from "react-router-dom";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

import prof from "../assets/prof.jpg";
import prof3 from "../assets/prof3.jpg";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bio Section */}
        <section className="py-16">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Image Column */}
            <div className="w-full lg:w-2/5 space-y-4 h-full">
              <div className="rounded-xl overflow-hidden shadow-xl h-[400px]">
                <img src={prof} alt="Adio Dinika portrait" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl h-[400px]">
                <img src={prof3} alt="Adio conducting research" className="w-full h-full object-cover" />
              </div>

            </div>

            {/* Text Column */}
            <div className="w-full lg:w-3/5">
              <h1 className="text-4xl font-bold mb-6 text-gray-800">Dr Adio-Adet Dinika</h1>
              <div className="prose prose-lg text-gray-700 max-w-none">
  
            <p className="mb-4">
    I'm a digital labour and AI ethics researcher, storyteller, and political scientist investigating the power structures behind today's technological systems. My work centers two critical areas: platform workers navigating gig economy exploitation, and data workers powering AI systems whose labor is systematically erased by narratives of algorithmic magic.
  </p>
  <p className="mb-4">
    My research isn't abstract. Faced with unemployment after graduate school, I turned to online platforms myself, writing for pennies while racing against algorithms and underbidding desperate competitors in a race to the bottom I never chose to join. That experience didn't break me, it politicized me.
  </p>
  <p className="mb-4">
    Since 2020, I've worked alongside platform workers across Africa and data workers across Africa, Latin America, and Europe, not as research subjects but as collaborators building spaces for reflection, refusal, and radical imagination.
  </p>
  <p className="mb-4">
    I'm a researcher at the Distributed AI Research Institute (DAIR), where I edit the Possible Futures series, and co-lead the Data Workers' Inquiry. I'm an affiliated researcher with the Weizenbaum-Institut and an advisory member of The Lab "Platform Governance, Media and Technology" at ZeMKI, University of Bremen, while teaching at Constructor University.
  </p>
  <p className="mb-4">
    My writing appears in Noema Magazine, Africa in Fact, and academic journals. I've presented this work at Yale, Cambridge, Georgetown, and other forums where the future gets debated and shaped.
  </p>
  <p className="mb-4">
    I'm always open to collaborations and conversations that matter. 
  </p>
  <p className="mb-4">
    My pronouns are he/him.
  </p>
</div>

            </div>
          </div>
        </section>

        {/* CV Download Section */}
        <section className="py-12 border-t border-gray-200 bg-white">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-lg font-medium text-gray-600 mb-8">Download My CV</h2>
            <a
              href={`${import.meta.env.BASE_URL}CV Dinika_AdioD.pdf`}
              download="Adio-Adet-Dinika-CV.pdf"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download CV (PDF)
            </a>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-12 border-t border-gray-200 bg-white">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-lg font-medium text-gray-600 mb-8">Connect With Me</h2>
            <div className="flex justify-center space-x-5">
              {/* Twitter/X */}
              <a
                href="https://x.com/AdioDinika"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-black rounded-full p-3 transition-colors duration-300 group"
              >
                <svg
                  className="h-9 w-9 text-gray-600 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/adiodinika"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-[#0077B5] rounded-full p-3 transition-colors duration-300 group"
              >
                <svg
                  className="h-9 w-9 text-gray-600 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
              </a>

              {/* ResearchGate */}
              <a
                href="https://www.researchgate.net/profile/Adio-Adet-Dinika"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-[#00CCBB] rounded-full p-3 transition-colors duration-300 group"
              >
                <svg
                  className="h-9 w-9 text-gray-600 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5.373 15.461c1.329 0 2.686-.355 3.852-1.078 1.166-.723 2.08-1.758 2.637-3.001.557-1.243.83-2.58.83-3.963 0-1.383-.273-2.72-.83-3.963-.557-1.243-1.471-2.278-2.637-3.001C8.059.355 6.702 0 5.373 0 4.044 0 2.687.355 1.521 1.078.355 1.801-.559 2.836-1.116 4.079-.673 5.322-.4 6.659-.4 8.042c0 1.383.273 2.72.83 3.963.557 1.243 1.471 2.278 2.637 3.001 1.166.723 2.523 1.078 3.852 1.078zm0-15.461c1.11 0 2.15.29 3.07.81.92.52 1.64 1.25 2.14 2.15.5.9.75 1.88.75 2.92s-.25 2.02-.75 2.92c-.5.9-1.22 1.63-2.14 2.15-.92.52-1.96.81-3.07.81s-2.15-.29-3.07-.81c-.92-.52-1.64-1.25-2.14-2.15-.5-.9-.75-1.88-.75-2.92s.25-2.02.75-2.92c.5-.9 1.22-1.63 2.14-2.15.92-.52 1.96-.81 3.07-.81z" />
                </svg>
              </a>

              {/* Google Scholar */}
              <a
                href="https://scholar.google.com/citations?hl=en&user=lWd9uW8AAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-[#4285F4] rounded-full p-3 transition-colors duration-300 group"
              >
                <svg
                  className="h-9 w-9 text-gray-600 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Horizontal Brief Sections - Original Layout */}
<div className="mt-16 space-y-6">
  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {/* Selected Articles */}
    <Link to="/selected-articles" className="group flex flex-col h-full p-5 rounded-xl bg-white hover:bg-emerald-50 border border-emerald-100 hover:border-emerald-200 transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="flex-shrink-0 p-3 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20">
        <svg className="h-[50px] w-[50px] text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12.5l2-2V21a3 3 0 0 1-3 3z" />
        </svg>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-800">Selected Articles</h3>
        <p className="text-gray-600 mt-1.5">Peer-reviewed publications advancing data worker rights and AI ethics.</p>
      </div>
    </Link>

    {/* Public Writing */}
    <Link to="/public-writing" className="group flex flex-col h-full p-5 rounded-xl bg-white hover:bg-sky-50 border border-sky-100 hover:border-sky-200 transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="flex-shrink-0 p-3 rounded-lg bg-sky-500/10 group-hover:bg-sky-500/20">
        <svg className="h-[50px] w-[50px] text-sky-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
        </svg>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-800">Public Writing</h3>
        <p className="text-gray-600 mt-1.5">Essays making complex ideas accessible to broader audiences.</p>
      </div>
    </Link>

    {/* Talks */}
    <Link to="/talks" className="group flex flex-col h-full p-5 rounded-xl bg-white hover:bg-violet-50 border border-violet-100 hover:border-violet-200 transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="flex-shrink-0 p-3 rounded-lg bg-violet-500/10 group-hover:bg-violet-500/20">
        <svg className="h-[50px] w-[50px] text-violet-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        </svg>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-violet-800">Talks</h3>
        <p className="text-gray-600 mt-1.5">Engagements sharing research findings with global audiences.</p>
      </div>
    </Link>

    {/* In The Press */}
    <Link to="/in-the-press" className="group flex flex-col h-full p-5 rounded-xl bg-white hover:bg-rose-50 border border-rose-100 hover:border-rose-200 transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="flex-shrink-0 p-3 rounded-lg bg-rose-500/10 group-hover:bg-rose-500/20">
        <svg className="h-[50px] w-[50px] text-rose-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 5v14H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
        </svg>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-rose-800">In The Press</h3>
        <p className="text-gray-600 mt-1.5">Media coverage in leading technology and policy outlets.</p>
      </div>
    </Link>

    {/* Appointments */}
    <Link to="/appointments" className="group flex flex-col h-full p-5 rounded-xl bg-white hover:bg-indigo-50 border border-indigo-100 hover:border-indigo-200 transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="flex-shrink-0 p-3 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/20">
        <svg className="h-[50px] w-[50px] text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
        </svg>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-800">Appointments</h3>
        <p className="text-gray-600 mt-1.5">Current institutional affiliations and research positions.</p>
      </div>
    </Link>

    {/* Data Workers' Inquiry */}
    <a href="https://data-workers.org" target="_blank" rel="noopener noreferrer" className="group flex flex-col h-full p-5 rounded-xl bg-white hover:bg-teal-50 border border-teal-100 hover:border-teal-200 transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="flex-shrink-0 p-3 rounded-lg bg-teal-500/10 group-hover:bg-teal-500/20">
        <svg className="h-[50px] w-[50px] text-teal-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14z" opacity="0.3" />
        </svg>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-800">Data Workers' Inquiry</h3>
        <p className="text-gray-600 mt-1.5">Global collaborative research documenting labor conditions.</p>
      </div>
    </a>
  </div>
</div>


        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-800 bg-white hover:bg-gray-100 mb-6"
            >
              <ArrowUpIcon className="h-5 w-5 mr-2" />
              Back to Top
            </button>
            <p className="text-gray-300">© {new Date().getFullYear()} Adio-Adet Dinika. All rights reserved.</p>
          </div>
        </footer>

        {/* Floating Back to Top Button for smaller screens */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 transition-colors duration-300 z-50 lg:hidden"
            aria-label="Back to top"
          >
            <ArrowUpIcon className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
}
