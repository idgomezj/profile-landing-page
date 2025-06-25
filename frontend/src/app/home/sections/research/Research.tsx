"use client";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";
import JournalInfo from "./pages/JournalInfo";
import { menuItems } from "./data";
import Congress from "./pages/Congress";
const visibleItems = 4;

const Research = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selected, setSelected] = useState(menuItems[0]);

  const handlePrev = () => {
    setStartIndex(Math.max(startIndex - visibleItems, 0));
  };

  const handleNext = () => {
    if (startIndex + visibleItems < menuItems.length) {
      setStartIndex(startIndex + visibleItems);
    }
  };

  return (
    <>

        <div className="bg-[#282828] w-full text-center mb-0 pt-8 pb-6">
          <h1 className="text-4xl font-bold text-white mb-2">Research Publications</h1>
          <p className="text-gray-300 text-lg">Academic papers and books</p>
        </div>
      <div className="bg-[#282828] pb-12 px-6 flex flex-col lg:flex-row justify-around gap-6 text-white">
        {/* Left Column */}
        <div className="flex flex-col w-full lg:w-2/3 gap-4">
          {/* PDF Viewer */}
          <div className="bg-white rounded-md overflow-hidden shadow-lg h-[500px]">
            <object
              data={selected.file}
              key={selected.file} 
              type="application/pdf"
              width="100%"
              height="100%"
            >
              <p className="text-black p-4">
                Your browser doesn't support PDFs.{" "}
                <a href={selected.file} className="text-blue-500 underline">
                  Download the file instead.
                </a>
              </p>
            </object>
          </div>

          {/* Legal Notice */}
          <div className="bg-yellow-100 text-yellow-900 p-4 rounded-md text-sm font-medium shadow">
            ⚠️ This is a public preview including the abstract and initial content of the selected article.
            Full access might require journal subscription or purchase. To access the full version, please visit:
            <a
              href={selected.info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 underline text-blue-800"
            >
              {selected.info.link}
            </a>
          </div>

          {/* Scrollable Menu */}
          <div className="flex items-center gap-2">
            <button onClick={handlePrev} disabled={startIndex === 0}>
              <ChevronLeftIcon className="text-white w-6 h-6" />
            </button>
            <div className="flex overflow-hidden gap-3">
              {menuItems.slice(startIndex, startIndex + visibleItems).map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelected(item)}
                  className={`px-4 py-2 rounded-md transition text-sm text-left ${
                    selected.title === item.title
                      ? "bg-cyan-500 font-semibold"
                      : "bg-cyan-700 hover:bg-cyan-600"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={startIndex + visibleItems >= menuItems.length}
            >
              <ChevronRightIcon className="text-white w-6 h-6" />
            </button>
          </div>
        </div>


        {/* Right Column – Dynamic Journal Info */}
        <JournalInfo info={selected.info} />
      </div>

      <Congress  />
    </>
  );
};

export default Research;
