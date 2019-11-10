const colonsToCamelCase = function(str) {
  return str.replace(/(:\w)/g, m => m[1].toUpperCase());
};

export default colonsToCamelCase;
