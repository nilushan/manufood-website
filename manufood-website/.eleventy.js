const Image = require("@11ty/eleventy-img");
const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images/ingredients")
  eleventyConfig.addWatchTarget("./src/");
  eleventyConfig.addWatchTarget("./src/styles/");
  eleventyConfig.addWatchTarget("./src/js/");

  eleventyConfig.addCollection("gallery", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/gallery/*.md").sort((a, b) => {
      return new Date(b.data.date) - new Date(a.data.date);
    });
  });

  eleventyConfig.addCollection("ingredients", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/ingredients/*.md");
  });

  eleventyConfig.addFilter("filterByCategory", function (array, category) {
    if (!array) return [];
    return array.filter(item => item.data.category === category);
  });

  eleventyConfig.addAsyncShortcode("respImage", async function (src, alt, className) {
    if (!src) {
      console.warn("respImage: No source provided");
      return "";
    }
    if (!alt) throw new Error(`Missing alt text for image: ${src}`);

    try {
      let metadata = await Image(path.join("./src", src), {
        widths: [300, 600, 900, 1200],
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
    } catch (error) {
      console.error(`Error processing image ${src}:`, error.message);
      return `<div class="image-error">Image not found: ${src}</div>`;
    }
  });

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