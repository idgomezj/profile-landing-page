import { ExperienceInfo, Stack } from '@/interfaces';
// import ReactMarkdown from 'react-markdown';

interface JobDescriptionProps {
  experienceSelected: ExperienceInfo;
}

const JobDescription = ({ experienceSelected }: JobDescriptionProps) => {
  const { frontend, backend, infrastructure, ai, data } = experienceSelected.content.techStack;

  const groupedStack = [
    { title: 'Frontend', items: frontend },
    { title: 'Backend', items: backend },
    { title: 'Infrastructure', items: infrastructure },
    { title: 'AI', items: ai },
    { title: 'Data', items: data },
  ];

  return (
    <div className="relative w-full h-full bg-cyan-800 overflow-hidden shadow-2xl border border-cyan-800 px-6 lg:px-10 py-10 space-y-10">
      
      {/* Row 1: Image + Description */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left: Image */}
        <div className="lg:w-1/2 w-full h-full flex justify-center items-center">
          {experienceSelected.content.image}
        </div>

        {/* Right: Description */}
        <div className="relative z-10 flex flex-col text-white space-y-6 lg:w-1/2 w-full">

          <div className="flex flex-col gap-1 mb-2">
            <h2 className="text-3xl font-bold leading-snug mb-0">{experienceSelected.title}</h2>
            <a
                href={experienceSelected.link}
                className="text-lg w-full text-gray-200 hover:text-cyan-400 hover:scale-110 transition-transform origin-left m-0"
            >
              {experienceSelected.company}
            </a>
            <p className="text-sm text-gray-400">{experienceSelected.date}</p>
          </div>

          <div className="text-base text-gray-200 leading-relaxed prose prose-invert max-w-none">
            {/* <ReactMarkdown>{experienceSelected.content.description}</ReactMarkdown> */}
            <div dangerouslySetInnerHTML={{ __html: experienceSelected.content.description }} />
          </div>
        </div>
      </div>

      {/* Row 2: Grouped Tech Stack */}
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-md w-full">
        <h3 className="text-lg font-semibold text-white mb-6">TECH STACK USED</h3>

        <div className="space-y-8">
          {groupedStack.map(({ title, items }) =>
            items && items.length > 0 ? (
              <div key={title}>
                <h4 className="text-white text-md font-semibold mb-3">{title}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((item: Stack) => (
                    <div
                      key={`${experienceSelected.title}-${title}-${item.name}`}
                      className="border-l-4 border-blue-400 pl-4"
                    >
                      <p className="text-white font-medium">{item.name}</p>
                      <p className="text-sm text-gray-300 text-justify">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
