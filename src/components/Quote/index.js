import React from "react";

function Quote() {
    return (
        <section className="card quote-card parallax pageBottom">
            <div className="card-header glowBox">
                Favorite Quote
            </div>
            <div className="card-body glowBox">
                <blockquote className="blockquote mb-0">
                    <p>"Success is going from failure to failure without loss of enthusiasm."</p>
                    <footer className="blockquote-footer">Winston Chruchill
                    </footer>
                </blockquote>
            </div>
            <span id="portfolio"></span>
        </section>
    );
}

export default Quote;


