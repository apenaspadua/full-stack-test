module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            application: './src/application',
            assets: './src/assets',
            components: './src/global/components',
            constants: './src/constants',
            global: './src/global',
            infra: './src/infra',
            navigation: './src/navigation',
            providers: './src/providers',
            presentation: './src/presentation',
            types: './src/types',
            utils: './src/utils',
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