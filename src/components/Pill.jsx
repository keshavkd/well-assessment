import React from "react";

function Pill({ btnSize, btnType, btnClickHandler, btnContent, btnPrefix }) {
  return (
    <div className="pill">
      <button
        className={`btn-${btnType} btn-${btnSize}`}
        onClick={() => btnClickHandler()}
      >
        {btnPrefix && <div className="btn-prefix">{btnPrefix}</div>}
        {btnContent}
      </button>
    </div>
  );
}

export default Pill;
