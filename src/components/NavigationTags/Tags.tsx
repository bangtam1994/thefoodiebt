import React from "react";
import "./index.scss";
import { mediaQueries } from "../../styles/breakpoints";

const Tags = ({ tagsList, handleOnClick, tagSelected }) => {
  return (
    <div
      className="list"
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "10px",
      }}
    >
      {tagsList.map((item: string, index: number) => {
        return (
          <div
            className={
              tagSelected.find((el) => el === item)
                ? "tag-button selected"
                : "tag-button"
            }
            key={index}
            // tagSelected={tagSelected === item}
            onClick={() => handleOnClick(item)}
          >
            {item === "tous" ? <div>{item}</div> : item}
          </div>
        );
      })}
    </div>
  );
};
export default Tags;
