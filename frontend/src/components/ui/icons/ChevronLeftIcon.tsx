import React from 'react';

interface ChevronLeftIconProps {
  className?: string;
  size?: number;
  color?: string;
}

const ChevronLeftIcon: React.FC<ChevronLeftIconProps> = ({
  className = "",
  size = 24,
}) => {
  return (
    <svg
      viewBox="0 0 52 52"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M34.2,47.7L13.4,27.2c-0.6-0.6-0.6-1.6,0-2.2L34.2,4.5c0.6-0.6,1.6-0.6,2.2,0l2.2,2.2
        c0.6,0.6,0.6,1.6,0,2.2L22.1,25c-0.6,0.6-0.6,1.6,0,2.2l16.3,16.1c0.6,0.6,0.6,1.6,0,2.2l-2.2,2.2C35.7,48.2,34.8,48.2,34.2,47.7z" />
    </svg>
  );
};

export default ChevronLeftIcon;
