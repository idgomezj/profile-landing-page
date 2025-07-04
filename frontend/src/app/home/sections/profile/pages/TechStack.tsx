import { memo } from "react";
import { techTools } from "./data";

const maxYears = 6;


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
