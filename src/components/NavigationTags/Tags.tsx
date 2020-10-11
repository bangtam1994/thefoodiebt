import React from "react";
import "./index.scss";
import { mediaQueries } from "../../styles/breakpoints";

const Tags = ({ tagsList, handleOnClick, tagSelected }) => {
  const translateTags = (tag) => {
    if (tag === "streetfood") {
      return "Street Food";
    }
    if (tag === "koreanfood") {
      return "Coréen";
    }
    if (tag === "pasta") {
      return "Pâtes";
    }
    if (tag === "burger") {
      return "Burger";
    }
  };

  return (
    <div
      className="list"
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "60%",
      }}
    >
      {tagsList.map((item: string, index: number) => {
        return (
          <div
            className={
              tagSelected.length > 0
                ? tagSelected.find((el) => el === item)
                  ? "tag-button selected"
                  : "tag-button"
                : "tag-button"
            }
            key={index}
            // tagSelected={tagSelected === item}
            onClick={() => handleOnClick(item)}
          >
            {translateTags(item)}
          </div>
        );
      })}
    </div>
  );
};
export default Tags;
