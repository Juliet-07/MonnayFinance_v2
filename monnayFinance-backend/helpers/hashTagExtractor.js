module.exports = function hashTagExtractor(text="") {
    return text.match(/#[a-z]+/gi) || [];
  };