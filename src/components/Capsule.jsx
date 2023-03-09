import React from "react";

function Capsule({ time, type, theme, title, content }) {
  return (
    <div className="capsule">
      <div className={`capsule-prefix-content ${theme}`}>
        <span className="capsule-prefix-time">{time}</span>
        <span className="capsule-prefix-type">{type}</span>
      </div>
      <div className="capsule-content">
        <span className="capsule-content-title">{title}</span>
        <span className="capsule-content-content">{content}</span>
      </div>
      <button className="capsule-action">...</button>
    </div>
  );
}

export default Capsule;
