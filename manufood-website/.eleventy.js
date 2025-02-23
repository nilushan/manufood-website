const Image = require("@11ty/eleventy-img");
const path = require("path");

module.exports = function(eleventyConfig) {
  // Add passthrough copy for styles, scripts and images
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/js");
  // eleventyConfig.addPassthroughCopy("src/images");

  // Watch all content files
  eleventyConfig.addWatchTarget("./src/");
  eleventyConfig.addWatchTarget("./src/styles/");
  eleventyConfig.addWatchTarget("./src/js/");

  eleventyConfig.addAsyncShortcode("respImage", async function(src, alt, className) {
    if (!alt) throw new Error(`Missing alt text for image: ${src}`);

    let metadata = await Image(path.join("./src", src), {
      widths: [300, 600, 900],
      formats: ["webp", "jpeg"],
      outputDir: "./_site/img/",
      urlPath: "/img/"
    });

    let imageAttributes = {
      alt,
      sizes: "(max-width: 600px) 300px, (max-width: 900px) 600px, 900px",
      loading: "lazy",
      decoding: "async",
      class: className || ""
    };

    return Image.generateHTML(metadata, imageAttributes);
  });

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