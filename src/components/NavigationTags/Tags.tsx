import React from "react";
import "./index.scss";
import { mediaQueries } from "../../styles/breakpoints";
import { Wrapper } from "./element";

const Tags = ({ tagsList, handleOnClick, tagSelected }) => {
  const translateTags = (tag) => {
    if (tag === "streetfood") {
      return "Street Food";
    }
    if (tag === "asian") {
      return "ASIATIQUE";
    }
    if (tag === "pasta") {
      return "Pâtes";
    }
    if (tag === "burger") {
      return "Burger";
    }
    if (tag === "pastries") {
      return "pâtisserie";
    }
    if (tag === "boba") {
      return "boba";
    }
  };

  return (
    <Wrapper>
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
    </Wrapper>
  );
};
export default Tags;
