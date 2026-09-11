module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: [require('node:path').resolve(__dirname, 'src')],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
          '@': require('node:path').resolve(__dirname, 'src'),
        },
      },
    ],
    'react-native-worklets/plugin',
  ]
};
