// components/JournalInfoCard.tsx
import React from "react";

interface JournalInfo {
    title: string;
    authors: string;
    journal: string;
    year: number;
    volume?: number;
    issue?: number;
    pages: string;
    doi?: string;
    link: string;
}

const JournalInfoCard = ({ info }: { info: JournalInfo }) => (
    <div className="bg-[#3c3c3c] p-6 rounded-md shadow-md w-full lg:w-1/3 max-h-[500px] overflow-y-auto">
        <h2 className="text-2xl font-semibold text-white mb-4">Journal Information</h2>
        <div className="space-y-3 text-sm text-gray-100 leading-relaxed">
        <p><span className="font-bols text-cyan-400">Title:</span> {info.title}</p>
        <p><span className="font-bols text-cyan-400 ">Authors:</span> {info.authors}</p>
        <p><span className="font-bols text-cyan-400">Journal:</span> {info.journal}</p>
        <p><span className="font-bols text-cyan-400">Year:</span> {info.year}</p>
        {info.volume && info.issue && (
            <p>
                <span className="font-bols text-cyan-400">Volume:</span> {info.volume},
                <span className="ml-1 font-bols text-cyan-400">Issue:</span> {info.issue}
            </p>
        )}
        <p><span className="font-bols text-cyan-400">Pages:</span> {info.pages}</p>
        {info.doi && (
            <p>
                <span className="font-bols text-cyan-400">DOI:</span>{" "}
                <a href={`https://doi.org/${info.doi}`} target="_blank" rel="noopener noreferrer" className="text-blue-100 underline break-words">
                {info.doi}
                </a>
            </p>
        )}
        <p>
            <span className="font-bols text-cyan-400">Journal Link:</span>{" "}
            <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-blue-100 underline break-words">
            {info.link}
            </a>
        </p>
        </div>
    </div>
);

export default JournalInfoCard;
