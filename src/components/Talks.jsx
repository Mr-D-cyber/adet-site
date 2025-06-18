import React from "react";

// Import background and card images
import talkBg from "../assets/talk.jpg";
import micBg from "../assets/mic.jpg";

// Featured Talks images
import yaleImg from "../assets/yale.jpg";
import santiagoImg from "../assets/santiago.jpg";
import georgetownImg from "../assets/Georgetown.jpg";

// Media Links images
import failImg from "../assets/fail.png";
import deutscheImg from "../assets/deutsche.png";
import ghostImg from "../assets/ghost.png";
import sourImg from "../assets/sour.png";
import invisibleImg from "../assets/invisible.png";

const featuredTalks = [
  {
    title: "Yale University",
    location: "New Haven, USA",
    date: "March 2024",
    image: yaleImg
  },
  {
    title: "AI, Labor & Democracy – Santiago",
    location: "Chile NFL Festival",
    date: "September 2024",
    image: santiagoImg
  },
  {
    title: "Georgetown University",
    location: "Washington D.C.",
    date: "January 2025",
    image: georgetownImg
  }
];

const timelineTalks = [
  { title: "28 Jan – Digital Transformation and AI: Beyond Efficiency Gains, What Is Our Human Purpose", location: "KAAD Association, Nyanga, Zimbabwe", date: "January 2024" },
  { title: "   Mar – Yale University", location: "New Haven, USA", date: "March 2024" },
  { title: "07 Apr – Technology and the Workplace", location: "SEIU Event", date: "April 2024" },
  { title: "27 Apr – The Invisible Labour in Sub-Saharan Africa Powering AI", location: "KAAD Jahresakademie, Bonn", date: "April 2024" },
  { title: "11 May – Invisible Labour: Unveiling Sub-Saharan Data Workers Powering AI", location: "AMRO 2024, Linz, Austria", date: "May 2024" },
  { title: "08 Jul – Moderator: How Do Data Workers Organize?", location: "DWI Series", date: "July 2024" },
  { title: "12 Jul – Broken Minds, Broken Dreams: The Real Price of AI", location: "Labortech Series", date: "July 2024" },
  { title: "17 Jul – Digital Activism & Security Training: Gen Z Protests in Kenya", location: "Siyasa Place", date: "July 2024" },
  { title: "22 Jul – Panelist: What Does Precarity Look Like for Data Workers?", location: "DWI", date: "July 2024" },
  { title: "30 Aug – African Agency in Global Internet Governance", location: "17th Pan-European Conference, Lille", date: "August 2024" },
  { title: "28 Mar – Lecture on Digital Sovereignty", location: "Digital Constitutionalism Network, Univ. of Salerno & Padova (Virtual)", date: "March 2024" },
  { title: "26 Sep – Surveillance in the Modern Age", location: "DVPW Congress, Gottingen", date: "September 2024" },
  { title: "12 Oct – Circuit Breakers Conference", location: "Unknown", date: "October 2024" },
  { title: "17 Oct – Connected Conversation: Generative AI and Worker Rights", location: "Unknown", date: "October 2024" },
  { title: "30 Oct – INDL-7: Data Workers Inquiry Talk", location: "Unknown", date: "October 2024" },
  { title: "18 Nov – Color of Surveillance Conference", location: "Georgetown Law, DC", date: "November 2024" },
  { title: "21 Nov – Digital Servitude: How Many Humans Does It Take to Make AI Think?", location: "Yale Law School", date: "November 2024" },
  { title: "26 Nov – Guest Lecture: Data Workers Inquiry", location: "Elisava School of Design & Engineering", date: "November 2024" },
  { title: "27 Nov – Platform Governance Colloquium", location: "University of Bremen", date: "November 2024" },
  { title: "Festival de Cine Futuro, Chile", location: "Chile", date: "September 2024" },
  { title: "Georgetown University", location: "Washington D.C.", date: "January 2025" },
  { title: "10 Feb – Machines That Fail Us Podcast", location: "Podcast", date: "February 2025" },
  { title: "12 Feb – ICCR: Dehumanization, Discrimination & Deskilling", location: "Confirmed", date: "February 2025" },
  { title: "25 Feb – Moderator: The Human Sweat That Waters AI", location: "RightsCon", date: "February 2025" },
  { title: "24 Mar – Moderator: Due Diligence for Responsible AI", location: "RightsCon", date: "March 2025" },
  { title: "24–25 Mar – AI in Eastern Africa Workshop", location: "Nairobi", date: "March 2025" },
  { title: "10 Apr – Lecture on Digital Sovereignty", location: "Univ. of Salerno & Padova (Virtual)", date: "April 2025" },
  { title: "Oxford Workshop on AI + Coloniality", location: "Oxford", date: "April 2025" },
  { title: "30 Apr – Brownbag on Platform Labour", location: "University of Free State (Virtual)", date: "April 2025" },
  { title: "University of Pretoria – Keynote", location: "Pretoria, South Africa", date: "June 2025" }
];

const mediaLinks = [
  {
    title: "Machines That Fail Us",
    source: "Podcast · Univ. of St. Gallen",
    url: "https://www.unisg.ch/en/newsroom/podcastdetail/news/machines-that-fail-us-7-the-hidden-human-labor-behind-ai-systems/",
    image: failImg
  },
  {
    title: "DW News Africa",
    source: "TV Interview · Deutsche Welle",
    url: "https://www.dw.com/en/dw-news-africa-with-eddy-micah-jr-27-february-2025/video-71777182",
    image: deutscheImg
  },
  {
    title: "Ghost Workers",
    source: "Podcast · Generationship",
    url: "https://www.heavybit.com/library/podcasts/generationship/ep-11-ghost-workers-with-adio-dinika-of-dair-institute",
    image: ghostImg
  },
  {
    title: "The Human Cost of AI",
    source: "Podcast · Sour Studio",
    url: "https://www.sour.studio/podcast/understanding-the-human-cost-of-ai-ft-adio-dinika",
    image: sourImg
  },
  {
    title: "Invisible Labor in AI",
    source: "Video Lecture · Linz Festival",
    url: "https://dorftv.at/video/45118",
    image: invisibleImg
  }
];

export default function Talks() {
  return (
    <div className="bg-white text-gray-900">

      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${talkBg})` }}
      >
        <div className="bg-black bg-opacity-60 absolute inset-0" />
        <h1 className="z-10 text-white text-4xl md:text-5xl font-bold text-center">Talks & Presentations</h1>
      </section>

      {/* Featured Talks */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Featured Talks</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredTalks.map((talk, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg group">
              <img src={talk.image} alt={talk.title} className="h-56 w-full object-cover object-top" />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold">{talk.title}</h3>
                <p className="text-sm text-gray-600">{talk.location}</p>
                <p className="text-sm text-gray-500">{talk.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section
        className="py-16 bg-gray-100 bg-cover bg-center"
        style={{ backgroundImage: `url(${micBg})` }}
      >
        <div className="max-w-4xl mx-auto px-4 bg-white bg-opacity-90 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Upcoming & Past Talks</h2>
          <ul className="space-y-4 max-h-[500px] overflow-y-auto">
            {timelineTalks.map((item, index) => (
              <li key={index} className="flex flex-col md:flex-row justify-between border-b pb-2">
                <span className="font-medium">{item.title}</span>
                <span className="text-gray-500">{item.date}</span>
                {item.location && <span className="text-gray-400 italic hidden md:inline-block ml-4">{item.location}</span>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Media Links */}
      <section className="py-16 px-4 relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-6xl mx-auto z-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Media Appearances & Podcasts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mediaLinks.map(({ title, source, url, image }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white text-black"
              >
                <img src={image} alt={title} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-gray-600">{source}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
