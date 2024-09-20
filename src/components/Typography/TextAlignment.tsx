import React from "react";

const TextAlignment = () => {
  return (
    <div className="p-6">
      <p className="text-left">This text is aligned to the left.</p>
      <p className="text-center">This text is centered.</p>
      <p className="text-right">This text is aligned to the right.</p>
      <p className="text-justify">
        This text is justified. The lines are spread out to fit the width of the
        container.
      </p>
    </div>
  );
};

export default TextAlignment;
