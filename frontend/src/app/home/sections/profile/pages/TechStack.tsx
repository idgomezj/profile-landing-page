import { memo } from "react";

const maxYears = 6;

const techTools = [
  {
    title: "Testing & QA",
    items: [
      { name: "Pytest", years: 4 },
      { name: "Go Test / Testify", years: 4 },
      { name: "Fastapi Testclient", years: 3 },
      // { name: "Cypress", years: 2 },
      { name: "Postman Tests", years: 2 },
    ],
  },
  {
    title: "Analytics & Tracking",
    items: [
      { name: "Google Analytics", years: 3 },
      { name: "Google Ads", years: 2 },
      { name: "Microsoft Clarity", years: 1 },
      { name: "Google Tag Manager", years: 3 },
    ],
  },
  {
    title: "Deployments & SaaS Integrations",
    items: [
      { name: "Vercel", years: 2 },
      { name: "Sentry", years: 2 },
      { name: "Stripe", years: 2 },
    ],
  },
  {
    title: "Monitoring & Observability",
    items: [
      { name: "Grafana", years: 2 },
      { name: "Loki", years: 2 },
      { name: "Prometheus", years: 2 },
      { name: "AWS CloudWatch", years: 2 },
    ],
  },
  {
    title: "Open Source Infrastructure",
    items: [
      { name: "Piraeus", years: 1 },
      { name: "MinIO", years: 2 },
      { name: "MetalLB", years: 1 },
      { name: "Linstor", years: 1 },
      { name: "Keycloak", years: 2 },
      { name: "StackGres", years: 2 },
    ],
  },
];

const TechStack = memo(() => {
  return (
    <div className="max-w-md p-6">
      <h1 className="text-4xl font-light">The</h1>
      <h2 className="text-4xl font-bold -mt-2">Tech Stack</h2>

      <p className="mt-4 text-gray-700 leading-relaxed">
        I leverage a wide array of platforms and services to support full-cycle development — from testing and tracking to deploying, monitoring, and integrating open-source infrastructure.
      </p>

      <div className="mt-6 space-y-6">
        {techTools.map((section) => (
          <div key={section.title}>
            <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
            <div className="space-y-2">
              {section.items.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between text-sm font-medium text-gray-800">
                    <span>{item.name}</span>
                    <span>{item.years} yr{item.years !== 1 ? "s" : ""}</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className="h-2 bg-black rounded-full"
                      style={{ width: `${(item.years / maxYears) * 100}%` }}
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

TechStack.displayName = "TechStack";

export default TechStack;
