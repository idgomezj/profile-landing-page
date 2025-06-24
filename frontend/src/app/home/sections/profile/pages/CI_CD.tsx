import { memo } from "react";

const maxYears = 8;

const ciCdData = [
  {
    title: "CI/CD & Automation",
    items: [
      { name: "GitHub", years: 8 },
      { name: "Jenkins", years: 5 },
      { name: "Harbor", years: 3 },
      { name: "GitHub Actions", years: 4 },
      { name: "GitLab", years: 2 },
      { name: "Ansible", years: 2.5 },
      { name: "Bash", years: 5 },
    ],
  },
  {
    title: "Cloud (AWS)",
    items: [
      { name: "Terraform", years: 4 },
    ],
  },
  {
    title: "Kubernetes Ecosystem",
    items: [
      { name: "ArgoCD", years: 3 },
      { name: "Helm", years: 3 },
      { name: "Lens", years: 3 },
    ],
  },
];

const CI_CD = memo(() => {
  return (
    <div className="max-w-md p-6">
      <h1 className="text-4xl font-light">The</h1>
      <h2 className="text-4xl font-bold -mt-2">CI/CD</h2>
      <p className="mt-4 text-gray-700 leading-relaxed">
        I design and automate infrastructure, pipelines, and deployments using modern DevOps tools. Below is my experience across CI/CD, cloud platforms, and Kubernetes orchestration.
      </p>

      <div className="mt-6 space-y-6">
        {ciCdData.map((section) => (
          <div key={section.title}>
            <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
            <div className="space-y-2">
              {section.items.map((tool) => (
                <div key={tool.name}>
                  <div className="flex justify-between text-sm font-medium text-gray-800">
                    <span>{tool.name}</span>
                    <span>{tool.years} yr{tool.years !== 1 ? "s" : ""}</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className="h-2 bg-black rounded-full"
                      style={{ width: `${(tool.years / maxYears) * 100}%` }}
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

CI_CD.displayName = "CI_CD";

export default CI_CD;
