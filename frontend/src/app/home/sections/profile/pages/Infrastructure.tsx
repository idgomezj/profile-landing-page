import { memo } from "react";

const maxYears = 6; // Your Linux and AWS experience is around this

const infraData = [
  {
    title: "Linux Systems",
    items: [
      { name: "Docker", years: 6 },
      { name: "Docker Compose", years: 6 },
      { name: "Debian-based (Ubuntu, etc.)", years: 2 },
      { name: "Alpine Linux", years: 2 },
      { name: "Ubuntu", years: 5 },

    ],
  },
  {
    title: "AWS – Traditional Infrastructure",
    items: [
      { name: "EC2", years: 5 },
      { name: "ECR", years: 5 },
      { name: "ECS (Fargate/EC2)", years: 4 },
      { name: "Route 53", years: 4 },
      { name: "RDS", years: 3 },
      { name: "S3", years: 5 },
      { name: "IAM & VPC", years: 4 },
    ],
  },
  {
    title: "AWS – Serverless",
    items: [
      { name: "Lambda", years: 3 },
      { name: "API Gateway", years: 3 },
      { name: "Step Functions", years: 2 },
      { name: "Secrets Manager", years: 2 },
    ],
  },
  {
    title: "Kubernetes Ecosystem",
    items: [
      { name: "Kubernetes", years: 3 },
      { name: "Helm", years: 3 },
      { name: "ArgoCD", years: 3 },
      { name: "Traefik", years: 3 },
      { name: "Cloudflare Tunnel", years: 3 },
    ],
  },
];

const Infrastructure = memo(() => {
  return (
    <div className="max-w-md p-6">
      <h1 className="text-4xl font-light">The</h1>
      <h2 className="text-4xl font-bold -mt-2">Infrastructure</h2>
      <p className="mt-4 text-gray-700 leading-relaxed">
        I’ve deployed and managed reliable cloud systems using a mix of lightweight Linux distributions, traditional compute services, serverless technologies, and Kubernetes orchestration. My infrastructure experience spans provisioning, scaling, routing, and automation in cloud-native environments.
      </p>

      <div className="mt-6 space-y-6">
        {infraData.map((section) => (
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

export default Infrastructure;
