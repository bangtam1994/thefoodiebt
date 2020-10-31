export const breakpoints = {
  phoneOnly: "only screen and (max-width: 768px)",
  tabletLandscapeUp: "(min-width: 769px) and (max-width: 1024px)",
  desktopUp: "only screen and (minWidth: 1024px)",
};

/**
 * @type typeof breakpoints;
 */

export const mediaQueries = Object.keys(breakpoints).reduce((acc, key) => {
  acc[key] = `@media ${breakpoints[key]}`;
  return acc;
}, {});
