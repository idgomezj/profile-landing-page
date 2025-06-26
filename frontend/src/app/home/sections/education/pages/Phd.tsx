import { memo } from "react";
import Image from 'next/image';
import { phd } from "../data";

const Phd = memo(() => (
    <div className="mt-16 border border-gray-200 bg-white rounded-xl shadow-md p-8">
        <div className="flex items-start gap-6 mb-4">
            <Image
            src="/logo/unal.svg" // Ensure this path is correct
            alt="Universidad Nacional de Colombia"
            width={60}
            height={60}
            />
            <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {phd.title}
            </h2>
            <p className="text-sm text-gray-500 italic mb-1">
                {phd.degree}, {phd.field} – {phd.status}
            </p>
            </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: phd.abstract }} />
    </div>
));

Phd.displayName = "Phd";

export default Phd;