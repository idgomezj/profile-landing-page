// components/Congress.tsx
import { memo } from "react";

const congresItems = [
  {
    title: "Hybrid methodology for the forecasting of hard discount store demand",
    info: {
      title: "Hybrid methodology for the forecasting of hard discount store demand",
      authors: "Ivan Gomez",
      congress: "V Congreso Internacional Industria y Organizaciones CIIO",
      year: 2018,
      location: "Bogotá, Colombia",
    },
  },
  {
    title: "Strategofactory: Una herramienta informática para apoyar la formulación de la estrategia de manufactura",
    info: {
      title: "Strategofactory: Una herramienta informática para apoyar la formulación de la estrategia de manufactura",
      authors: "Ivan Gomez",
      congress: "IV Congreso Internacional Industria y Organizaciones CIIO",
      year: 2017,
      location: "Bogotá, Colombia",
    },
  },
  {
    title: "Forecasting methodology for production planning under the postponement strategy",
    info: {
      title: "Forecasting methodology for production planning under the postponement strategy",
      authors: "Ivan Gomez",
      congress: "IV Congreso Internacional Industria y Organizaciones CIIO",
      year: 2017,
      location: "Bogotá, Colombia",
    },
  },
  {
    title: "Social Performance Metrics for Manufacturing Industry",
    info: {
      title: "Social Performance Metrics for Manufacturing Industry",
      authors: "Ivan Gomez",
      congress: "Eurocean Operations Management Association EurOMA",
      year: 2017,
      location: "United Kingdom",
    },
  },
  {
    title: "Lean manufacturing and sustainable performance: trends and future challenges",
    info: {
      title: "Lean manufacturing and sustainable performance: trends and future challenges",
      authors: "Ivan Gomez",
      congress: "The 5th World Conference on Production and operations",
      year: 2016,
      location: "Havana, Cuba",
    },
  },
  {
    title: "Manufacturing strategy in food manufacturing companies",
    info: {
      title: "Manufacturing strategy in food manufacturing companies",
      authors: "Ivan Gomez",
      congress: "The 5th World Conference on Production and operations",
      year: 2016,
      location: "Havana, Cuba",
    },
  },
  {
    title: "Decoupling point placement through the production postponement approach. Results of two case studies.",
    info: {
      title: "Decoupling point placement through the production postponement approach. Results of two case studies.",
      authors: "Ivan Gomez",
      congress: "III Congreso Internacional de Industria y Organizacione CIIO",
      year: 2016,
      location: "Bogotá, Colombia",
    },
  },
  {
    title: "Multicriteria methodology for decoupling points placement under a production postponement strategy",
    info: {
      title: "Multicriteria methodology for decoupling points placement under a production postponement strategy",
      authors: "Ivan Gomez",
      congress: "II Congreso Internacional de Industria y Organizacione CIIO",
      year: 2015,
      location: "Bogotá, Colombia",
    },
  },
];

const Congress = memo(() => {
  return (
    <div className="px-6 py-12 bg-gradient-to-b from-cyan-900 to-cyan-950 min-h-screen">
      <h1 className="text-4xl font-extrabold text-white mb-10 text-center tracking-tight">
        Congress Contributions
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {congresItems.map((item, index) => (
          <div
            key={index}
            className="bg-cyan-800/80 backdrop-blur rounded-xl shadow-md border border-cyan-700 hover:shadow-xl transition-all p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-bold text-white mb-2">{item.info.title}</h2>
              <p className="text-sm text-cyan-200 mb-1">
                <span className="font-semibold">Author:</span> {item.info.authors}
              </p>
              <p className="text-sm text-cyan-200 mb-1">
                <span className="font-semibold">Congress:</span> {item.info.congress}
              </p>
              <p className="text-sm text-cyan-200 mb-1">
                <span className="font-semibold">Year:</span> {item.info.year}
              </p>
              <p className="text-sm text-cyan-200">
                <span className="font-semibold">Location:</span> {item.info.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

Congress.displayName = "Congress";
export default Congress;
