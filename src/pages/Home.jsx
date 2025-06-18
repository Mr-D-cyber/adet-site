import { Link } from "react-router-dom";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-gray-50">
      {/* Full-width container with constrained max-width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bio Section - Side by side layout */}
        <section className="py-16">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Image Column - Now matches text height */}
            <div className="w-full lg:w-2/5 space-y-4 h-full">
              <div className="rounded-xl overflow-hidden shadow-xl h-[400px]">
                <img
                  src="/prof.jpg"
                  alt="Adio Dinika portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg h-48">
                  <img
                    src="/prof2.jpg"
                    alt="Adio speaking at event"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-48">
                  <img
                    src="/prof3.jpg"
                    alt="Adio conducting research"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Text Column - Full height */}
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
              <p className="mb-4">
              My pronouns are he/him.
              </p>
              </div>
            </div>

          </div>
        </section>

        {/* CV Download Section - Full width */}
        <section className="py-12 border-t border-gray-200 bg-white">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-lg font-medium text-gray-600 mb-8">Download My CV</h2>
            <a 
              href="/CV Dinika_AdioD.pdf" 
              download="Adio-Adet-Dinika-CV.pdf"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
            >
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV (PDF)
            </a>
          </div>
        </section>

        {/* Social Media - Full width */}
        <section className="py-12 border-t border-gray-200 bg-white">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-lg font-medium text-gray-600 mb-8">Connect With Me</h2>
            <div className="flex justify-center space-x-5">
              {/* Twitter/X */}
              <a href="https://x.com/AdioDinika" target="_blank" rel="noopener noreferrer" 
                 className="bg-gray-100 hover:bg-black rounded-full p-3 transition-colors duration-300 group">
                <svg className="h-9 w-9 text-gray-600 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/adiodinika" target="_blank" rel="noopener noreferrer" 
                 className="bg-gray-100 hover:bg-[#0077B5] rounded-full p-3 transition-colors duration-300 group">
                <svg className="h-9 w-9 text-gray-600 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
              </a>

              {/* ResearchGate */}
              <a href="https://www.researchgate.net/profile/Adio-Adet-Dinika" target="_blank" rel="noopener noreferrer" 
                 className="bg-gray-100 hover:bg-[#00CCBB] rounded-full p-3 transition-colors duration-300 group">
                <svg className="h-9 w-9 text-gray-600 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.373 15.461c1.329 0 2.686-.355 3.852-1.078 1.166-.723 2.08-1.758 2.637-3.001.557-1.243.83-2.58.83-3.963 0-1.383-.273-2.72-.83-3.963-.557-1.243-1.471-2.278-2.637-3.001C8.059.355 6.702 0 5.373 0 4.044 0 2.687.355 1.521 1.078.355 1.801-.559 2.836-1.116 4.079-.673 5.322-.4 6.659-.4 8.042c0 1.383.273 2.72.83 3.963.557 1.243 1.471 2.278 2.637 3.001 1.166.723 2.523 1.078 3.852 1.078zm0-15.461c1.11 0 2.15.29 3.07.81.92.52 1.64 1.25 2.14 2.15.5.9.75 1.88.75 2.92s-.25 2.02-.75 2.92c-.5.9-1.22 1.63-2.14 2.15-.92.52-1.96.81-3.07.81s-2.15-.29-3.07-.81c-.92-.52-1.64-1.25-2.14-2.15-.5-.9-.75-1.88-.75-2.92s.25-2.02.75-2.92c.5-.9 1.22-1.63 2.14-2.15.92-.52 1.96-.81 3.07-.81z" />
                </svg>
              </a>

              {/* Google Scholar */}
              <a href="https://scholar.google.com/citations?hl=en&user=lWd9uW8AAAAJ" target="_blank" rel="noopener noreferrer" 
                 className="bg-gray-100 hover:bg-[#4285F4] rounded-full p-3 transition-colors duration-300 group">
                <svg className="h-9 w-9 text-gray-600 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Horizontal Brief Sections - Updated Layout */}
        <div className="mt-16 space-y-6">
          {/* First Row - 4 cards (25% width each) */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Selected Articles - Emerald */}
            <a href="/selected-articles" className="group flex flex-col h-full p-5 rounded-xl bg-white hover:bg-emerald-50 border border-emerald-100 hover:border-emerald-200 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex-shrink-0 p-3 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20">
                <svg className="h-[50px] w-[50px] text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12.5l2-2V21a3 3 0 0 1-3 3z" />
                  <path d="M6 7h8v2H6zm0 4h8v2H6zm0 4h5v2H6z" fill="white" />
                  <path d="M15 12l4.5 4.5V4a1 1 0 0 0-1-1H6v16h9v-7z" opacity="0.3" />
                </svg>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-800">Selected Articles</h3>
                <p className="text-gray-600 mt-1.5">Peer-reviewed publications advancing data worker rights and AI ethics.</p>
                <div className="mt-3 inline-flex items-center text-emerald-600 font-medium text-sm">
                  Browse collection
                  <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Public Writing - Sky Blue */}
            <a href="/public-writing" className="group flex flex-col h-full p-5 rounded-xl bg-white hover:bg-sky-50 border border-sky-100 hover:border-sky-200 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex-shrink-0 p-3 rounded-lg bg-sky-500/10 group-hover:bg-sky-500/20">
                <svg className="h-[50px] w-[50px] text-sky-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm16-1a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14z" />
                  <path d="M7 8h10v2H7zm0 4h7v2H7z" fill="white" />
                  <path d="M17 16H7v-2h10v2z" fill="white" />
                </svg>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-800">Public Writing</h3>
                <p className="text-gray-600 mt-1.5">Essays making complex ideas accessible to broader audiences.</p>
                <div className="mt-3 inline-flex items-center text-sky-600 font-medium text-sm">
                  Read perspectives
                  <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Upcoming Talks - Violet */}
            <a href="/talks" className="group flex flex-col h-full p-5 rounded-xl bg-white hover:bg-violet-50 border border-violet-100 hover:border-violet-200 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex-shrink-0 p-3 rounded-lg bg-violet-500/10 group-hover:bg-violet-500/20">
                <svg className="h-[50px] w-[50px] text-violet-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" fill="white" />
                  <path d="M12 19v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-violet-800">Upcoming Talks</h3>
                <p className="text-gray-600 mt-1.5">Engagements sharing research findings with global audiences.</p>
                <div className="mt-3 inline-flex items-center text-violet-600 font-medium text-sm">
                  See events
                  <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* In The Press - Rose */}
            <a href="/in-the-press" className="group flex flex-col h-full p-5 rounded-xl bg-white hover:bg-rose-50 border border-rose-100 hover:border-rose-200 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex-shrink-0 p-3 rounded-lg bg-rose-500/10 group-hover:bg-rose-500/20">
                <svg className="h-[50px] w-[50px] text-rose-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 5v14H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
                  <path d="M12 7v10m-3-6h6" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-rose-800">In The Press</h3>
                <p className="text-gray-600 mt-1.5">Media coverage in leading technology and policy outlets.</p>
                <div className="mt-3 inline-flex items-center text-rose-600 font-medium text-sm">
                  View coverage
                  <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* Second Row - 3 cards (33.33% width each) */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
            {/* Appointments - Indigo */}
            <a href="/appointments" className="group flex flex-col h-full p-5 rounded-xl bg-white hover:bg-indigo-50 border border-indigo-100 hover:border-indigo-200 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex-shrink-0 p-3 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/20">
                <svg className="h-[50px] w-[50px] text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
                  <path d="M12 22l8-5V7l-8-5-8 5v10l8 5z" fill="white" opacity="0.3" />
                  <path d="M12 16l-4-2.3V9.2L12 12l4-2.8v4.5L12 16z" fill="white" />
                </svg>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-800">Appointments</h3>
                <p className="text-gray-600 mt-1.5">Current institutional affiliations and research positions.</p>
                <div className="mt-3 inline-flex items-center text-indigo-600 font-medium text-sm">
                  View appointments
                  <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Data Workers' Inquiry - Teal */}
            <a href="https://data-workers.org" target="_blank" rel="noopener noreferrer" className="group flex flex-col h-full p-5 rounded-xl bg-white hover:bg-teal-50 border border-teal-100 hover:border-teal-200 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex-shrink-0 p-3 rounded-lg bg-teal-500/10 group-hover:bg-teal-500/20">
                <svg className="h-[50px] w-[50px] text-teal-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14z" opacity="0.3" />
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                  <path d="M7 10h2v7H7zm4-8h2v10h-2zm4 4h2v4h-2z" fill="white" />
                </svg>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-800">Data Workers' Inquiry</h3>
                <p className="text-gray-600 mt-1.5">Global collaborative research documenting labor conditions.</p>
                <div className="mt-3 inline-flex items-center text-teal-600 font-medium text-sm">
                  Visit project
                  <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

        {/* Footer with back-to-top button */}
        <footer className="bg-gray-800 text-white py-8">
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

        {/* Floating back-to-top button (mobile) */}
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
    </div>
  );
}