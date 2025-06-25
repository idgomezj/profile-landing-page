import { memo } from "react";
import Image from 'next/image';

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
                Enhancing Portfolio Performance Through Multi-Agent AI: Alternative Data Integration and Real-Time Optimization
            </h2>
            <p className="text-sm text-gray-500 italic mb-1">
                PhD in Engineering, Universidad Nacional de Colombia – In Progress
            </p>
            </div>
        </div>
        <p className="text-gray-700 leading-relaxed text-justify">
            <strong>Abstract:</strong> The landscape of portfolio management is undergoing a transformative shift driven by artificial intelligence (AI) and the proliferation of alternative data sources. While traditional financial metrics remain foundational, the integration of real-time supply chain dynamics, social media sentiment, and news analytics presents unprecedented opportunities for sophisticated investment decision-making.
            <br /><br />
            This document proposes to develop a novel multi-agent AI architecture designed to coordinate specialized agents that process distinct data streams: real-time supply chain indicators (including supplier health and logistics disruptions), social media information, news analytics, and traditional financial data.
            <br /><br />
            The proposed study aims to investigate how these agents can collaboratively optimize dynamic portfolio rebalancing while maintaining robust risk management frameworks. The research will evaluate the system's performance over a 12-month period, comparing outcomes against both conventional portfolio management approaches and contemporary single-agent AI solutions, with a focus on risk-adjusted returns and downside protection.
        </p>
    </div>
));

Phd.displayName = "Phd";

export default Phd;