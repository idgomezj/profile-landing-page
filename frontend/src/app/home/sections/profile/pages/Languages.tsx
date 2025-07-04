import { memo } from "react";
import { languageData } from './data'

const maxYears = 8;



const Languages = memo(() => {
  return (
    <div className="max-w-md p-6">
      <h1 className="text-4xl font-light">The</h1>
      <h2 className="text-4xl font-bold -mt-2">Languages</h2>
      <p className="mt-4 text-gray-700 leading-relaxed">
        I work across the stack. From building scalable backends to modern web frontends and data processing scripts, my toolset is proven through years of real-world experience.
      </p>

      <div className="mt-6 space-y-6">
        {languageData.map((section) => (
          <div key={section.title}>
            <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
            <div className="space-y-2">
              {section.items.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-sm font-medium text-gray-800">
                    <span>{lang.name}</span>
                    <span>{lang.years} yr{lang.years > 1 ? "s" : ""}</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className="h-2 bg-black rounded-full"
                      style={{ width: `${(lang.years / maxYears) * 100}%` }}
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

Languages.displayName = "Languages";

export default Languages;
