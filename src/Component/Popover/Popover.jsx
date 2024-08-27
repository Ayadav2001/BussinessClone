import React, { useState, useRef, useEffect } from 'react';

const Popover = ({ children, content, placement = 'bottom' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);
  const triggerRef = useRef(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = (event) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.relatedTarget) &&
      !triggerRef.current.contains(event.relatedTarget)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mouseover', handleMouseLeave);
    } else {
      document.removeEventListener('mouseover', handleMouseLeave);
    }
    return () => {
      document.removeEventListener('mouseover', handleMouseLeave);
    };
  }, [isOpen]);

  const popoverClasses = `absolute z-10 w-64 p-4 bg-white rounded shadow-lg ${
    placement === 'bottom' ? 'mt-2' : placement === 'top' ? 'mb-2' : ''
  }`;

  return (
    <div className="relative inline-block text-left">
      <button
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="px-2 py-0 font-medium rounded text-gray-300 hover:text-white transition-colors duration-200"
      >
        {children}
      </button>
      {isOpen && (
        <div
          ref={popoverRef}
          className={popoverClasses}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
