module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            application: './src/application',
            assets: './src/assets',
            components: './src/components',
            core: './src/core',
            navigation: './src/navigation',
            providers: './src/providers',
            presentation: './src/presentation',
            types: './src/types',
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};