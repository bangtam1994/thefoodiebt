export const breakpoints = {
  phoneOnly: 'only screen and (max-width: 599px)',
  tabletPortraitUp: 'only screen and (min-width: 600px)',
  tabletLandscapeUp: 'only screen and (min-width: 900px)',
  desktopUp: 'only screen and (min-width: 1200px)',
  bigDesktopUp: 'only screen and (min-width: 1800px)',
};

/**
 * @type typeof breakpoints;
 */

export const mediaQueries = Object.keys(breakpoints).reduce((acc, key) => {
  acc[key] = `@media ${breakpoints[key]}`;
  return acc;
}, {});
