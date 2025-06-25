// TooltipWrapper.tsx
import React, { ReactNode } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

import "./TooltipWrrapper.scss";

interface TooltipWrapperProps {
  tooltipText: string;
  align?: "center" | "start" | "end";
  side: "top" | "right" | "bottom" | "left";
  children: ReactNode;
  className?: string;
}

const TooltipWrapper: React.FC<TooltipWrapperProps> = ({ 
  tooltipText, 
  children, 
  align="center", 
  side = "top", 
  className="" 
}) => {
  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div className={`tooltip-trigger ${className}`}>{children}</div>
        </Tooltip.Trigger>
        <Tooltip.Content side={side} align={align} className="tooltip-content z-[9999]">
          <span>{tooltipText}</span>
          <Tooltip.Arrow className="tooltip-arrow" />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipWrapper;
