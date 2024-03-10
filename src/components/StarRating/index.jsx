import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

const StarRating = ({ noofStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, sethover] = useState(0);
  const [ratingval, setratingval] = useState(0);

  function handleMouseClick(getcurrentindex) {
    setRating(getcurrentindex);
    setratingval(getcurrentindex);
  }

  function handleMouseEnter(getcurrentindex) {
    sethover(getcurrentindex);
    setratingval(getcurrentindex);
  }

  function handleMouseLeave() {
    sethover(rating);
    setratingval(rating);
  }

  return (
    <div className="Starrating">
      <div>
        {[...Array(noofStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleMouseClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={80}
            />
          );
        })}
      </div>
      <h3>Total rating :{ratingval}</h3>
    </div>
  );
};

export default StarRating;
