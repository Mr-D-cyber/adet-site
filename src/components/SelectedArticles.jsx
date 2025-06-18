export default function SelectedArticles() {
  return (
    <div>
      <div className="space-y-8 max-w-4xl mx-auto">
  {/* Article 1 */}
  <div className="group relative p-6 pl-24 bg-white rounded-xl border border-gray-200 hover:border-indigo-200 transition-all duration-200 shadow-sm hover:shadow-md overflow-hidden">
    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-b from-indigo-50 to-indigo-100 flex items-center justify-center">
      <svg className="h-10 w-10 text-indigo-400 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    </div>
    <div className="ml-2">
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">
        "Navigating labour's labyrinth: Developing a typology of platform work in Sub-Saharan Africa"
      </h3>
      <p className="text-sm text-gray-500 mt-1">
        <span className="font-medium">Journal of Digital Labor Studies</span> • DOI: 10.1177/29768624251318084
      </p>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4 border-indigo-300">
        <p className="text-gray-700">
          This paper develops an empirical typology of platform worker experiences in Sub-Saharan Africa through interviews with 55 labourers across transportation, domestic services, IT and creative sectors. It identifies five worker segments with distinct autonomy constraints and precarity levels, revealing how global platforms reproduce North-South domination patterns while local actors attempt equitable alternatives.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Platform Work</span>
          <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Sub-Saharan Africa</span>
          <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Labor Typology</span>
        </div>
        <a href="https://doi.org/10.1177/29768624251318084" target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-sm">
          View Journal Article
          <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>

  {/* Article 2 */}
  <div className="group relative p-6 pl-24 bg-white rounded-xl border border-gray-200 hover:border-emerald-200 transition-all duration-200 shadow-sm hover:shadow-md overflow-hidden">
    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-b from-emerald-50 to-emerald-100 flex items-center justify-center">
      <svg className="h-10 w-10 text-emerald-400 group-hover:text-emerald-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    </div>
    <div className="ml-2">
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
        "A critical analysis of Rwanda's Digital skills and entrepreneurship training toward solving youth unemployment"
      </h3>
      <p className="text-sm text-gray-500 mt-1">
        <span className="font-medium">ResearchGate</span> • DOI: 10.13140/RG.2.2.14848.00001
      </p>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4 border-emerald-300">
        <p className="text-gray-700">
          Examining Rwanda's digital skills programs through Human Capital Theory, this qualitative study finds these initiatives successfully foster innovation culture but lack robust follow-up mechanisms. The research suggests policy improvements could maximize impact on youth unemployment while offering lessons for other African nations.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">Youth Employment</span>
          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">Skills Training</span>
          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">Rwanda</span>
        </div>
        <a href="https://www.researchgate.net/publication/384532392_critical_analysis_of_Rwanda's_Digital_skills_and_entrepreneurship_training_toward_solving_youth_unemployment" target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium text-sm">
          Access on ResearchGate
          <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>

  {/* Article 3 */}
  <div className="group relative p-6 pl-24 bg-white rounded-xl border border-gray-200 hover:border-rose-200 transition-all duration-200 shadow-sm hover:shadow-md overflow-hidden">
    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-b from-rose-50 to-rose-100 flex items-center justify-center">
      <svg className="h-10 w-10 text-rose-400 group-hover:text-rose-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    </div>
    <div className="ml-2">
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-rose-700 transition-colors">
        "Trapped in the Matrix: Algorithmic Control and Worker Resistance in Sub-Saharan Africa"
      </h3>
      <p className="text-sm text-gray-500 mt-1">
        <span className="font-medium">Weizenbaum Journal</span> • Volume 5, Issue 1
      </p>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4 border-rose-300">
        <p className="text-gray-700">
          Through 41 interviews across Rwanda, South Africa and Zimbabwe, this study exposes how algorithmic management systems erode worker autonomy while documenting creative resistance strategies. The research challenges techno-optimism by revealing how platform designs reproduce colonial-era exploitation patterns.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-rose-50 text-rose-700 text-xs font-medium rounded-full">Algorithmic Management</span>
          <span className="px-3 py-1 bg-rose-50 text-rose-700 text-xs font-medium rounded-full">Worker Resistance</span>
          <span className="px-3 py-1 bg-rose-50 text-rose-700 text-xs font-medium rounded-full">Postcolonial Critique</span>
        </div>
        <a href="https://ojs.weizenbaum-institut.de/index.php/wjds/article/view/5_1_3" target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center text-rose-600 hover:text-rose-800 font-medium text-sm">
          Read Open Access
          <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>

  {/* Article 4 */}
  <div className="group relative p-6 pl-24 bg-white rounded-xl border border-gray-200 hover:border-amber-200 transition-all duration-200 shadow-sm hover:shadow-md overflow-hidden">
    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-b from-amber-50 to-amber-100 flex items-center justify-center">
      <svg className="h-10 w-10 text-amber-400 group-hover:text-amber-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </div>
    <div className="ml-2">
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
        "Preparing African youths for the future of work: The case of Rwanda"
      </h3>
      <p className="text-sm text-gray-500 mt-1">
        <span className="font-medium">ResearchGate</span> • DOI: 10.13140/RG.2.2.19856.00007
      </p>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4 border-amber-300">
        <p className="text-gray-700">
          Case study of Rwanda's comprehensive digital economy strategy featuring 20+ incubators and international partnerships. While demonstrating how digitalization can address unemployment through freelancing and startups, the research calls for more deliberate policy coordination across Sub-Saharan Africa.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">Digital Economy</span>
          <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">Policy Analysis</span>
          <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">Incubators</span>
        </div>
        <a href="https://www.researchgate.net/publication/367178904_Preparing_African_youths_for_the_future_of_work_The_case_of_Rwanda" target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center text-amber-600 hover:text-amber-800 font-medium text-sm">
          Download Study
          <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      </div>
    </div>
  </div>

  {/* Article 5 */}
  <div className="group relative p-6 pl-24 bg-white rounded-xl border border-gray-200 hover:border-violet-200 transition-all duration-200 shadow-sm hover:shadow-md overflow-hidden">
    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-b from-violet-50 to-violet-100 flex items-center justify-center">
      <svg className="h-10 w-10 text-violet-400 group-hover:text-violet-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    </div>
    <div className="ml-2">
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-violet-700 transition-colors">
        "Rethinking Digital Infrastructure Development in Africa"
      </h3>
      <p className="text-sm text-gray-500 mt-1">
        <span className="font-medium">ResearchGate</span> • DOI: 10.13140/RG.2.2.12345.00009
      </p>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4 border-violet-300">
        <p className="text-gray-700">
          Critical analysis of digital sovereignty challenges posed by external financing from China and tech giants (GAFAM). Proposes pan-African negotiation strategies to reclaim control over digital infrastructure while acknowledging current dependency realities.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-violet-50 text-violet-700 text-xs font-medium rounded-full">Digital Sovereignty</span>
          <span className="px-3 py-1 bg-violet-50 text-violet-700 text-xs font-medium rounded-full">Infrastructure</span>
          <span className="px-3 py-1 bg-violet-50 text-violet-700 text-xs font-medium rounded-full">GAFAM</span>
        </div>
        <a href="https://www.researchgate.net/publication/358592107_Rethinking_Digital_Infrastructure_Development_in_Africa" target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center text-violet-600 hover:text-violet-800 font-medium text-sm">
          View Publication
          <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
</div>
  );
}