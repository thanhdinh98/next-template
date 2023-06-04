import React from "react";

export default function Menu() {
  return (
    <div className="alime-projects-menu">
      <div className="portfolio-menu text-center">
        <button type="button" className="btn active" data-filter="*">All</button>
        <button type="button" className="btn" data-filter=".human">Human</button>
        <button type="button" className="btn" data-filter=".nature">Nature</button>
        <button type="button" className="btn" data-filter=".country">Country</button>
        <button type="button" className="btn" data-filter=".video">Video</button>
      </div>
    </div>
  );
}
