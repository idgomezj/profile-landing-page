import React from 'react';

interface ChevronRightIconProps {
  className?: string;
  size?: number;
  color?: string;
}

const ChevronRightIcon: React.FC<ChevronRightIconProps> = ({
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
      <path d="M17.8,4.3l20.8,20.5c0.6,0.6,0.6,1.6,0,2.2L17.8,47.5c-0.6,0.6-1.6,0.6-2.2,0l-2.2-2.2c-0.6-0.6-0.6-1.6,0-2.2l16.3-16.1
        c0.6-0.6,0.6-1.6,0-2.2L13.4,8.7c-0.6-0.6-0.6-1.6,0-2.2l2.2-2.2C16.2,3.7,17.2,3.7,17.8,4.3z" />
    </svg>
  );
};

export default ChevronRightIcon;
