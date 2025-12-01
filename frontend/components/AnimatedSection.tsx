import React, { useRef, ReactNode } from "react";
import { useOnScreen } from "../hooks/useOnScreen";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref, "-100px");

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        onScreen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
