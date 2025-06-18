import React from "react";

const appointments = [
  {
    type: "Teaching",
    title: "Lecture on Digital Sovereignty",
    institution: "University of Salerno & University of Padova (Virtual)",
    date: "Mar 28, 2024",
    logo: "Salerno.jpg",
    link: "https://unipd.zoom.us/j/88610344396?pwd=…",
  },
  {
    type: "Teaching",
    title: "Guest Lecture: M3 Impacts of AI Systems",
    institution: "Elisava School of Design and Engineering",
    date: "Nov 26, 2024",
    logo: "elisava.webp",
  },
  {
    type: "Teaching",
    title: "Lecturer – Consumer Culture & Society",
    institution: "Constructor University",
    date: "Sept 2023–Feb 2024",
    logo: "constructor.webp",
  },
  {
    type: "Teaching",
    title: "Visiting Instructor: AI, Work & Politics",
    institution: "University of the Arts Berlin (Weizenbaum Institute)",
    date: "May–June 2023",
    logo: "weize.webp",
  },
  {
    type: "Fellowship",
    title: "Post‑Doctoral Researcher",
    institution: "Distributed AI Research Institute (DAIR)",
    date: "2025–present",
    logo: "dair.webp",
  },
  {
    type: "Fellowship",
    title: "Research Fellow",
    institution: "Center for Advanced Internet Studies (CAIS)",
    date: "Apr–Sept 2024",
    logo: "cais.jpg",
  },
  {
    type: "Fellowship",
    title: "Fellow",
    institution: "Research Institute for Sustainability (RIFS), Potsdam",
    date: "Jan–Mar 2024",
    logo: "rifs.jpg",
  },
  {
    type: "Fellowship",
    title: "Fellow",
    institution: "TUM Center for Digital Public Services (Munich)",
    date: "Oct–Dec 2023",
    logo: "tum.png",
  },
  {
    type: "Affiliation",
    title: "Affiliated Research Fellow",
    institution: "New York University",
    date: "2022–2023",
    logo: "nyu.webp",
  },
  {
    type: "Affiliation",
    title: "Research Affiliate",
    institution: "Weizenbaum Institute for the Networked Society",
    date: "2022–2023",
    logo: "weizer.png",
  },
  {
    type: "Affiliation",
    title: "Research Associate",
    institution: "Humboldt Institute for Internet and Society (HIIG)",
    date: "2021–2022",
    logo: "hiis.webp",
  },
];

const typeStyles = {
  Teaching: "from-indigo-50 to-indigo-100",
  Fellowship: "from-rose-50 to-rose-100",
  Affiliation: "from-teal-50 to-teal-100",
};

const icons = {
  Teaching: "📚",
  Fellowship: "🎓",
  Affiliation: "🤝",
};

export default function Appointments() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-14">
      {["Teaching", "Fellowship", "Affiliation"].map((type) => (
        <section
          key={type}
          className={`p-6 rounded-2xl bg-gradient-to-r ${typeStyles[type]} shadow-inner`}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            {icons[type]} {type}s
          </h2>
          <div className="space-y-6">
            {appointments
              .filter((item) => item.type === type)
              .map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:scale-[1.015]"
                >
                  <img
                    src={item.logo}
                    alt={`${item.institution} logo`}
                    className="w-28 h-28 object-contain rounded-md"
                  />
                  <div className="flex-1 space-y-1">
                    <h3 className="font-semibold text-xl text-gray-900">{item.title}</h3>
                    <p className="text-gray-700">{item.institution}</p>
                    <p className="text-gray-500 text-sm">{item.date}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-blue-600 hover:underline text-sm pt-1"
                      >
                        Join / View
                      </a>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
