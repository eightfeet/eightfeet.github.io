import React from "react";
import "./Card.css";


export default function Card({ data }) {
  return (
    <div>
      <div className="container">
        <div className="square">
          <img src={data.image} alt="blog" className="blog-card-image mask" />
          <div className="blog-card-title">{data.title}</div>
          <p className="blog-card-subtitle">{data.description}</p>

          <div>
            <a href={data.url} target="_" className="button">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
