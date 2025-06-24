import { memo } from "react";

const maxYears = 6;

const frameworkData = [
  {
    title: "Python",
    items: [
      { name: "FastAPI", years: 6 },
      { name: "Flask", years: 4 },
      { name: "Django", years: 1 },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", years: 5 },
      { name: "Angular", years: 3 },
      { name: "Next.js", years: 2 },
    ],
  },
  {
    title: "Golang",
    items: [
      { name: "Echo", years: 4 },
      { name: "Cobra", years: 3 },
      { name: "Bubbletea &  Lipgloss ", years: 3 },
    ],
  },
  {
    title: "Rust",
    items: [
      { name: "Axum", years: 2 },
    ],
  },
];

const Frameworks = memo(() => {
  return (
    <div className="max-w-md p-6">
      <h1 className="text-4xl font-light">The</h1>
      <h2 className="text-4xl font-bold -mt-2">Frameworks</h2>
      <p className="mt-4 text-gray-700 leading-relaxed">
        I’ve used a wide range of frameworks to build full-stack applications, APIs, and scalable systems. Here’s a breakdown by language and years of hands-on experience.
      </p>

      <div className="mt-6 space-y-6">
        {frameworkData.map((section) => (
          <div key={section.title}>
            <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
            <div className="space-y-2">
              {section.items.map((fw) => (
                <div key={fw.name}>
                  <div className="flex justify-between text-sm font-medium text-gray-800">
                    <span>{fw.name}</span>
                    <span>{fw.years} yr{fw.years > 1 ? "s" : ""}</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className="h-2 bg-black rounded-full"
                      style={{ width: `${(fw.years / maxYears) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Frameworks;
