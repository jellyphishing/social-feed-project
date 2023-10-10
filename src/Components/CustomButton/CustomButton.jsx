import React from "react";
import "./CustomButton.css";
import { useState } from "react";
//import { ReactComponent as HeartIcon } from "../../assets/heart-svgrepo-com.svg";
const CustomButton = () => {
  const [likeButtonClass, setLikeButtonClass] = useState("inactive");
  // const [heartIconColor, setHeartIconColor] = useState("lightgrey");

  const handleLikeButtonClick = () => {
    if (likeButtonClass === "inactive") {
      setLikeButtonClass("active");
    } else {
      setLikeButtonClass("inactive");
    }
  };

  //   const handleHeartIconClick = () => {
  //     if (heartIconColor === "lightgrey") {
  //       setHeartIconColor("magenta");
  //     } else {
  //       setHeartIconColor("lightgrey");
  //     }
  // };

  return (
    <div>
      <button className={likeButtonClass} onClick={handleLikeButtonClick}>
        Click to Like!
      </button>
      {/* <HeartIcon
        height={300}
        width={300}
        fill={heartIconColor}
        onClick={handleHeartIconClick}
      /> */}
    </div>
  );
};

export default CustomButton;
