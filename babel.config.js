module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        'root': ['.'],
        'alias': {
          'assets': './src/assets',
          'containers': './src/containers',
          'components': './src/components',
          'http': './src/http',
          'app-enums': './src/enums',
          'screens': './src/screens',
          'services': './src/services',
          'store': './src/store',
          'selectors': './src/selectors',
          'types': './src/types',
          'utils': './src/utils',
        },
      }
    ],
    ['react-native-reanimated/plugin']
  ],
};
