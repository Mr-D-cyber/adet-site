// eslint-disable-next-line no-unused-vars
import { useMemo } from "react";

const pressMentions = [
  {
    title: "African governments should focus on urgent programmes to develop an AI-ready workforce",
    snippet: "The continent faces a unique challenge in preparing its citizens for the AI-driven...",
    url: "https://african.business/2023/09/technology-information/african-governments-should-focus-on-urgent-programmes-to-develop-an-ai-ready-workforce"
  },
  {
    title: "El efecto de los sesgos LGBTIQ en la IA: 'Nos vemos obligados a evitar la palabra queer' en los mensajes",
    snippet: "Las implicaciones del sesgo en los sistemas de inteligencia artificial requieren una reflexión profunda sobre...",
    url: "https://elpais.com/tecnologia/2024-12-21/el-efecto-de-los-sesgos-lgbtiq-en-la-ia-nos-vemos-obligados-a-evitar-la-palabra-queer-en-los-mensajes.html"
  },
  {
    title: "Can Africa achieve digital sovereignty in an era of big tech?",
    snippet: "Digital sovereignty remains a critical topic as global powers continue to dominate the technology landscape...",
    url: "https://african.business/2023/07/technology-information/can-africa-achieve-digital-sovereignty-in-an-era-of-big-tech"
  },
  {
    title: "Equitable AI for All",
    snippet: "How can AI systems be designed to ensure fairness and reduce inequality across diverse populations?",
    url: "https://www.success.com/equitable-ai-for-all/"
  },
  {
    title: "Book Interview: The role of AI in African digital infrastructure",
    snippet: "An insightful discussion about AI's potential and pitfalls within Africa's technological development...",
    url: "https://chbecklsw.openpublishing.com/free/FXELUHEQSFHM"
  },
];

export default function InThePress() {
  return (
    <div className="min-h-screen bg-amber-50 p-8 md:p-12">
      {/* Newspaper-style header */}
      <div className="text-center mb-12">
        <div className="inline-block border-b-4 border-black pb-2">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight font-serif">Selected Press Coverage</h1>
          <p className="text-lg italic mt-2">A.T. Dinika</p>
        </div>
      </div>

      {/* Newspaper columns with torn edges */}
      <div className="max-w-6xl mx-auto bg-white shadow-xl relative">
        {/* Fake newspaper texture and folds */}
        <div className="absolute inset-0 bg-[url('news-texture.png')] opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-transparent to-amber-200 opacity-30"></div>
        
        {/* Main content */}
        <div className="relative p-8 md:p-12 columns-1 md:columns-2 gap-8">
          {pressMentions.map(({ title, snippet, url }, idx) => (
            <article 
              key={idx} 
              className={`mb-8 break-inside-avoid ${idx === pressMentions.length - 1 ? '' : 'pb-8 border-b border-amber-200'}`}
            >
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block"
              >
                <h2 className="text-2xl font-bold font-serif leading-tight mb-3 group-hover:text-blue-800 transition-colors">
                  {title}
                </h2>
                <p className="text-gray-700 font-serif mb-4">{snippet}</p>
                <span className="text-sm text-amber-700 font-medium">Continue reading →</span>
              </a>
            </article>
          ))}
        </div>

        {/* Newspaper footer */}
        <div className="p-4 text-center text-xs text-gray-500 border-t border-amber-200">
          Edition No. 42 • {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}