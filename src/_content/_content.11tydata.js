module.exports = {
  eleventyComputed: {
    share_image: data => {
      const {image} = data;
      if (image) {
        return `https://res.cloudinary.com/paulrobertlloyd/image/fetch/c_fill%2Cf_auto%2Cq_auto%2Cw_1200%2Ch_630/${data.app.url}${image}`;
      }

      return `${data.app.url}${data.app.icon}`;
    },
    bookmark: data => {
      let {url} = data.page;
      url = url.replace(/(?:index)?\.html/g, '');
      return `${data.app.url}${url}`;
    }
  }
};