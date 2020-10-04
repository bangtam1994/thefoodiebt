import { Link } from "gatsby";
import React, { useState } from "react";

import "./index.scss";
import Tags from "./Tags";

interface Props {
  handleOnClick: () => void;
  tagsList: string[];
  tagSelected: string[];
}

const NavigationTags = ({ handleOnClick, tagsList, tagSelected }) => {
  return (
    <div className="navigation-tags-wrapper">
      <Tags
        tagsList={tagsList}
        handleOnClick={handleOnClick}
        tagSelected={tagSelected}
      />
    </div>
  );
};

export default NavigationTags;
