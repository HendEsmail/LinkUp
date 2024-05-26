module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          api: './src/api',
          components: './src/components',
          navigation: './src/navigation',
          screens: './src/screens',
          store: './src/store',
          theme: './src/theme',
          types: './src/types',
          utils: './src/utils',
          images: './assets/images',
          hooks: './src/hooks',
        },
      },
    ],
  ],
};
