import { memo } from "react";

const maxYears = 6;

const dataTools = [
  {
    title: "Data Engineering",
    items: [
      { name: "PostgreSQL", years: 5 },
      { name: "MySQL", years: 4 },
      { name: "Redis", years: 4 },
      { name: "MongoDB", years: 4 },
      { name: "Cassandra", years: 2 },
      { name: "Elasticsearch", years: 1.5 },
      { name: "Weaviate", years: 1.5 },
      { name: "Vector Databases", years: 2 },
      { name: "Kafka", years: 4 },
      { name: "Spark (PySpark)", years: 2 },
      { name: "Airflow", years: 3 },
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      { name: "Hugging Face", years: 2 },
      { name: "LLaMA 3", years: 1 },
      { name: "OpenAI API / Anthropic Claude", years: 2 },
      { name: "Pydantic AI", years: 1 },
      { name: "Snowflake Vector Search", years: 1 },
      { name: "MLflow", years: 2 },
      { name: "NVIDIA Plugin", years: 1 },
      { name: "Scikit-learn", years: 3 },
      { name: "PyTorch", years: 2 },
    ],
  },
];

const Data = memo(() => {
  return (
    <div className="max-w-md p-6">
      <h1 className="text-4xl font-light">The</h1>
      <h2 className="text-4xl font-bold -mt-2">Data & AI</h2>
      <p className="mt-4 text-gray-700 leading-relaxed">
        I design full data pipelines, deploy scalable processing systems, and build intelligent applications with modern machine learning frameworks and APIs. My work spans database integration, stream processing, orchestration, and AI model deployment.
      </p>

      <div className="mt-6 space-y-6">
        {dataTools.map((section) => (
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

export default Data;
