import React from "react";

function Pill({ btnSize, btnType, btnContent, btnPrefix }) {
  return (
    <div className="pill">
      <div className={`btn-${btnType} btn-${btnSize}`}>
        {btnPrefix && <div className="btn-prefix">{btnPrefix}</div>}
        <div className="pill-content">{btnContent}</div>
      </div>
    </div>
  );
}

export default Pill;
