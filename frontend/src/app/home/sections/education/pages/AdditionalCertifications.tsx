import { memo } from "react";
import { BookIcon } from "@/components/ui/icons";

const otherEducations = [
  {
    title: "Data Science Training",
    field: "Correlation One",
    years: "2022",
    icon: <BookIcon className="w-5 h-5 text-emerald-600" />,
  },
  {
    title: "PMI Course Certificate",
    field: "Project Management",
    years: "2015",
    icon: <BookIcon className="w-5 h-5 text-emerald-600" />,
  },
];

const AdditionalCertifications = memo(() => (
  <section className="mt-20">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">Additional Certifications</h2>
    <p className="text-gray-500 mb-8 max-w-xl">
      A selection of programs and certifications that have enriched my professional toolkit, supporting my journey in data, systems, and strategic execution.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {otherEducations.map((edu, idx) => (
        <div
          key={idx}
          className="group bg-white border border-gray-200 hover:border-emerald-500 hover:shadow-md transition-all duration-300 rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-emerald-100 p-2 rounded-full">
              {edu.icon || <span className="text-xl">🎓</span>}
            </div>
            <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide">
              {edu.title}
            </p>
          </div>
          <p className="text-lg font-medium text-gray-800">{edu.field}</p>
          <p className="text-sm text-gray-400 mt-1">{edu.years}</p>
        </div>
      ))}
    </div>
  </section>
));

AdditionalCertifications.displayName = "AdditionalCertifications";

export default AdditionalCertifications;
