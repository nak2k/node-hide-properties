function hideProperties(obj, propNames) {
  const props = {};

  propNames.forEach(name => props[name] = {
    enumerable: false,
    writable: true,
  });

  Object.defineProperties(obj, props);
}

/*
 * Exports.
 */
exports.hideProperties = hideProperties;
