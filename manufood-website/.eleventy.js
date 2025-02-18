module.exports = function(eleventyConfig) {
  // Add passthrough copy for styles, scripts and images
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  // Return the configuration object
  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site"
    },
    passthroughFileCopy: true
  };
};