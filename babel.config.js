module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@assets': './src/assets',
          },
        },
      ],
    ],
  };
};
