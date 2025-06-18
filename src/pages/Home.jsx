import { Link } from "react-router-dom";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

import prof from "../assets/prof.jpg";
import prof2 from "../assets/prof2.jpg";
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
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg h-48">
                  <img src={prof2} alt="Adio speaking at event" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-48">
                  <img src={prof3} alt="Adio conducting research" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-3/5">
              <h1 className="text-4xl font-bold mb-6 text-gray-800">Adio-Adet Dinika</h1>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="mb-4">
                  I'm a Political scientist, storyteller, and AI researcher tracing the hidden labour and
                  power structures behind today's machine learning systems. My work dives deep into
                  the data supply chains that make AI possible; from annotation to moderation,
                  centering the workers whose hands and minds are too often erased (intentionally so)
                  by systems that would have us believe AI is magic, conjured through tweaks and
                  keystrokes by "geniuses" in Silicon Valley.
                </p>
                <p className="mb-4">
                  Once upon a time, faced with unemployment and a Master's degree in hand — I
                  turned to online platforms. I wrote for a pittance that sometimes never came, raced
                  against ticking clocks and ever-shifting metrics, and felt the sting of trying to outbid
                  the next desperate worker by bidding lower, cheaper, faster; a race to the bottom I
                  never consented to join. That experience didn't break me — it politicized me. It's the
                  reason I do what I do today.
                </p>
                <p className="mb-4">
                  Since 2020, I've worked alongside data workers across Africa, Latin America, and
                  Europe, not as extractive subjects, but as co-thinkers, co-strugglers, and co-
                  dreamers. Together, we've built spaces for reflection, refusal, and radical
                  imagination, inquiry not just as method, but as movement.
                </p>
                <p className="mb-4">
                  I am a researcher at the Distributed AI Research Institute (DAIR), where I also edit
                  the Possible Futures series; a space where theory meets the lived experience of
                  technological harm and hope. I co-lead the Data Workers' Inquiry, and I'm also an
                  affiliated researcher at the Weizenbaum-Institut, and an advisory member The Lab
                  "Platform Governance, Media and Technology" of ZeMKI at the University of
                  Bremen, and teach part-time at Constructor University.
                </p>
                <p className="mb-4">
                  My writing appears in Noema Magazine, Africa in Fact, and academic journals, and
                  I've shared this work at Yale, Cambridge, Georgetown, and other global forums
                  where the future is debated and shaped. I'm equally fluent in footnotes and feeling,
                  in critique and cadence. Give me a mic or a blank page — I'll bring the fire. I'm
                  always open to collaborations, features, and conversations that matter.
                </p>
                <p className="mb-4">
                  And when the academic prose sleeps, the fiction stirs. I'm writing the next literary
                  thriller — one foot in theory, the other in the fire of story.
                </p>
                <p className="mb-4">My pronouns are he/him.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CV Download Section */}
        <section className="py-12 border-t border-gray-200 bg-white">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-lg font-medium text-gray-600 mb-8">Download My CV</h2>
            <a
              href="/CV Dinika_AdioD.pdf"
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

        {/* Horizontal Brief Sections */}
        <div className="mt-16 space-y-6">
          {/* First Row - 4 cards */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Selected Articles */}
            <Link
              to="/selected-articles"
              className="group flex flex-col h-full p-5 rounded-xl bg-white hover:bg-emerald-50 border border-emerald-100 hover:border-emerald-200 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex-shrink-0 p-3 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20">
                <svg
                  className="h-[50px] w-[50px] text-emerald-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12.5l2-2V21a3 3 0 0 1-3 3z" />
                  <path d="M6 7h8v2H6zm0 4h8v2H6zm0 4h5v2H6z" fill="white" />
                  <path d="M15 12l4.5 4.5V4a1 1 0 0 0-1-1H6v16h9v-7z" opacity="0.3" />
                </svg>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-800">
                  Selected Articles
                </h3>
                <p className="text-gray-600 mt-1.5">
                  Peer-reviewed publications advancing data worker rights and AI ethics.
                </p>
                <div className="mt-3 inline-flex items-center text-emerald-700 group-hover:text-emerald-900 font-semibold">
                  Explore Articles
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Featured Talks */}
            <Link
              to="/selected-talks"
              className="group flex flex-col h-full p-5 rounded-xl bg-white hover:bg-pink-50 border border-pink-100 hover:border-pink-200 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex-shrink-0 p-3 rounded-lg bg-pink-500/10 group-hover:bg-pink-500/20">
                <svg
                  className="h-[50px] w-[50px] text-pink-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6v12m4-6h.01"
                  />
                </svg>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-pink-800">
                  Featured Talks
                </h3>
                <p className="text-gray-600 mt-1.5">
                  Videos and interviews on AI labor, justice, and technology futures.
                </p>
                <div className="mt-3 inline-flex items-center text-pink-700 group-hover:text-pink-900 font-semibold">
                  Watch Talks
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Fellowships */}
            <Link
              to="/fellowships"
              className="group flex flex-col h-full p-5 rounded-xl bg-white hover:bg-blue-50 border border-blue-100 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex-shrink-0 p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20">
                <svg
                  className="h-[50px] w-[50px] text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0 3.31-2.69 6-6 6H4v2h2c4.42 0 8-3.58 8-8V7h2v4zM6 6h.01M16 6h.01M12 2h.01"
                  />
                </svg>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-800">
                  Fellowships
                </h3>
                <p className="text-gray-600 mt-1.5">
                  Opportunities and collaborations shaping AI research and activism.
                </p>
                <div className="mt-3 inline-flex items-center text-blue-700 group-hover:text-blue-900 font-semibold">
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Writing */}
            <Link
              to="/writing"
              className="group flex flex-col h-full p-5 rounded-xl bg-white hover:bg-purple-50 border border-purple-100 hover:border-purple-200 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex-shrink-0 p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20">
                <svg
                  className="h-[50px] w-[50px] text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h10M7 16h10M4 20h16M4 4h16"
                  />
                </svg>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-800">
                  Writing
                </h3>
                <p className="text-gray-600 mt-1.5">
                  Essays, articles, and creative work on technology and society.
                </p>
                <div className="mt-3 inline-flex items-center text-purple-700 group-hover:text-purple-900 font-semibold">
                  Read Writing
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
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
