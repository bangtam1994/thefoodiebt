import { Link } from "gatsby";
import React, { useState } from "react";
import { NavigationWrapper } from "./element";

import "./index.scss";
import Tags from "./Tags";

interface Props {
  handleOnClick: () => void;
  tagsList: string[];
  tagSelected: string[];
}

const NavigationTags = ({ handleOnClick, tagsList, tagSelected }) => {
  return (
    <NavigationWrapper>
      <Tags
        tagsList={tagsList}
        handleOnClick={handleOnClick}
        tagSelected={tagSelected}
      />
    </NavigationWrapper>
  );
};

export default NavigationTags;
