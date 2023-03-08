import React from "react";

function Card({ title, ctaContent, ctaActionHandler, children }) {
  return (
    <div className="card-container">
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
