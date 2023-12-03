import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { IoIosStarOutline } from 'react-icons/io';

import './StarRating.css';

function StarRating() {
  const [starElements, setStarElements] = useState([]);

  useEffect(() => {
    createStars();

    function createStars() {
      const stars = [];

      for (let i = 5; i >= 0; i--) {
        const starRating = i;
        const starsIcons = getStarIcons(starRating);
        const ratingElement = (
          <div className="container-star" key={starRating}>
            {starRating > 0 ? (
              <li>
                {starRating}.0 {starsIcons}
              </li>
            ) : (
              <li>
                Não avaliaram
              </li>
            )}
          </div>
        );

        stars.push(ratingElement);
      }

      setStarElements(stars);
    }

    function getStarIcons(starRating) {
      const starIcons = [];

      for (let i = 0; i < Math.floor(starRating); i++) {
        starIcons.push(
          <FaStar key={i} className="yellow-star" />
        );
      }

      if (starRating % 1 !== 0) {
        starIcons.push(
          <FaStarHalfAlt key="half" className="yellow-star" />
        );
      }

      for (let i = 0; i < 5 - Math.ceil(starRating); i++) {
        starIcons.push(
          <IoIosStarOutline key={i} className="silver-star" />
        );
      }

      return starIcons;
    }
  }, []);

  return (
    <div>
      <div id="stars">{starElements}</div>
    </div>
  );
}

export default StarRating;