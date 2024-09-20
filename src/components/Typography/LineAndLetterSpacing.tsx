import React from "react";

const LineAndLetterSpacing = () => {
  return (
    <div className="p-6">
      <p className="leading-none">
        This text has no line spacing. The lines are very close.
      </p>
      <p className="leading-relaxed">
        This text has relaxed line spacing, making it more readable.
      </p>
      <p className="leading-loose">
        This text has very loose line spacing, making it breathe.
      </p>

      <div className="p-6">
        <p className="tracking-tight">This text has tight letter spacing.</p>
        <p className="tracking-wide">This text has wide letter spacing.</p>
        <p className="tracking-widest">
          This text has the widest letter spacing.
        </p>
      </div>
    </div>
  );
};

export default LineAndLetterSpacing;
