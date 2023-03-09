import React from "react";

function Card({ cName, title, ctaContent, ctaActionHandler, children }) {
  return (
    <div className={`card-container ${cName}`}>
      <div className="card-header">
        <h2>{title}</h2>
        {ctaContent && ctaActionHandler && (
          <button className="btn-card-cta" onClick={() => ctaActionHandler()}>
            {ctaContent}
          </button>
        )}
      </div>
      <hr />
      <div className="card-content">{children}</div>
    </div>
  );
}

export default Card;
