// import { StyleSheet } from 'react-native';
// import Scale from './Scale';

// const makeSpacingStyles = (prefix: string, prop: string) =>
//   Object.fromEntries(
//     Object.entries(Scale).map(([key, value]) => [
//       `${prefix}-${key}`,
//       { [prop]: value },
//     ]),
//   );

// const Margin = StyleSheet.create({
//   ...makeSpacingStyles('m', 'margin'),
//   ...makeSpacingStyles('mx', 'marginHorizontal'),
//   ...makeSpacingStyles('my', 'marginVertical'),
//   ...makeSpacingStyles('mt', 'marginTop'),
//   ...makeSpacingStyles('mb', 'marginBottom'),
//   ...makeSpacingStyles('ml', 'marginLeft'),
//   ...makeSpacingStyles('mr', 'marginRight'),
//   ...makeSpacingStyles('ms', 'marginStart'),
//   ...makeSpacingStyles('me', 'marginEnd'),
// });

// const Padding = StyleSheet.create({
//   ...makeSpacingStyles('p', 'padding'),
//   ...makeSpacingStyles('px', 'paddingHorizontal'),
//   ...makeSpacingStyles('py', 'paddingVertical'),
//   ...makeSpacingStyles('pt', 'paddingTop'),
//   ...makeSpacingStyles('pb', 'paddingBottom'),
//   ...makeSpacingStyles('pl', 'paddingLeft'),
//   ...makeSpacingStyles('pr', 'paddingRight'),
//   ...makeSpacingStyles('ps', 'paddingStart'),
//   ...makeSpacingStyles('pe', 'paddingEnd'),
// });

// export const Spacing = {
//   Margin,
//   Padding,
// };

// export default Spacing;

const Margin = {
  'm-1': {
    margin: 4
  },
  'm-2': {
    margin: 8
  },
  'm-3': {
    margin: 12
  },
  'm-4': {
    margin: 16
  },
  'm-5': {
    margin: 20
  },
  'm-6': {
    margin: 24
  },
  'm-7': {
    margin: 28
  },
  'm-8': {
    margin: 32
  },
  'm-9': {
    margin: 36
  },
  'm-10': {
    margin: 40
  },
  'm-11': {
    margin: 44
  },
  'm-12': {
    margin: 48
  },
  'm-13': {
    margin: 52
  },
  'm-14': {
    margin: 56
  },
  'm-15': {
    margin: 60
  },
  'm-16': {
    margin: 64
  },

  'mx-1': {
    marginHorizontal: 4
  },
  'mx-2': {
    marginHorizontal: 8
  },
  'mx-3': {
    marginHorizontal: 12
  },
  'mx-4': {
    marginHorizontal: 16
  },
  'mx-5': {
    marginHorizontal: 20
  },
  'mx-6': {
    marginHorizontal: 24
  },
  'mx-7': {
    marginHorizontal: 28
  },
  'mx-8': {
    marginHorizontal: 32
  },
  'mx-9': {
    marginHorizontal: 36
  },
  'mx-10': {
    marginHorizontal: 40
  },
  'mx-11': {
    marginHorizontal: 44
  },
  'mx-12': {
    marginHorizontal: 48
  },
  'mx-13': {
    marginHorizontal: 52
  },
  'mx-14': {
    marginHorizontal: 56
  },
  'mx-15': {
    marginHorizontal: 60
  },
  'mx-16': {
    marginHorizontal: 64
  },

  'my-1': {
    marginVertical: 4
  },
  'my-2': {
    marginVertical: 8
  },
  'my-3': {
    marginVertical: 12
  },
  'my-4': {
    marginVertical: 16
  },
  'my-5': {
    marginVertical: 20
  },
  'my-6': {
    marginVertical: 24
  },
  'my-7': {
    marginVertical: 28
  },
  'my-8': {
    marginVertical: 32
  },
  'my-9': {
    marginVertical: 36
  },
  'my-10': {
    marginVertical: 40
  },
  'my-11': {
    marginVertical: 44
  },
  'my-12': {
    marginVertical: 48
  },
  'my-13': {
    marginVertical: 52
  },
  'my-14': {
    marginVertical: 56
  },
  'my-15': {
    marginVertical: 60
  },
  'my-16': {
    marginVertical: 64
  },

  'mt-1': {
    marginTop: 4
  },
  'mt-2': {
    marginTop: 8
  },
  'mt-3': {
    marginTop: 12
  },
  'mt-4': {
    marginTop: 16
  },
  'mt-5': {
    marginTop: 20
  },
  'mt-6': {
    marginTop: 24
  },
  'mt-7': {
    marginTop: 28
  },
  'mt-8': {
    marginTop: 32
  },
  'mt-9': {
    marginTop: 36
  },
  'mt-10': {
    marginTop: 40
  },
  'mt-11': {
    marginTop: 44
  },
  'mt-12': {
    marginTop: 48
  },
  'mt-13': {
    marginTop: 52
  },
  'mt-14': {
    marginTop: 56
  },
  'mt-15': {
    marginTop: 60
  },
  'mt-16': {
    marginTop: 64
  },

  'mb-1': {
    marginBottom: 4
  },
  'mb-2': {
    marginBottom: 8
  },
  'mb-3': {
    marginBottom: 12
  },
  'mb-4': {
    marginBottom: 16
  },
  'mb-5': {
    marginBottom: 20
  },
  'mb-6': {
    marginBottom: 24
  },
  'mb-7': {
    marginBottom: 28
  },
  'mb-8': {
    marginBottom: 32
  },
  'mb-9': {
    marginBottom: 36
  },
  'mb-10': {
    marginBottom: 40
  },
  'mb-11': {
    marginBottom: 44
  },
  'mb-12': {
    marginBottom: 48
  },
  'mb-13': {
    marginBottom: 52
  },
  'mb-14': {
    marginBottom: 56
  },
  'mb-15': {
    marginBottom: 60
  },
  'mb-16': {
    marginBottom: 64
  },

  'ml-1': {
    marginLeft: 4
  },
  'ml-2': {
    marginLeft: 8
  },
  'ml-3': {
    marginLeft: 12
  },
  'ml-4': {
    marginLeft: 16
  },
  'ml-5': {
    marginLeft: 20
  },
  'ml-6': {
    marginLeft: 24
  },
  'ml-7': {
    marginLeft: 28
  },
  'ml-8': {
    marginLeft: 32
  },
  'ml-9': {
    marginLeft: 36
  },
  'ml-10': {
    marginLeft: 40
  },
  'ml-11': {
    marginLeft: 44
  },
  'ml-12': {
    marginLeft: 48
  },
  'ml-13': {
    marginLeft: 52
  },
  'ml-14': {
    marginLeft: 56
  },
  'ml-15': {
    marginLeft: 60
  },
  'ml-16': {
    marginLeft: 64
  },

  'mr-1': {
    marginRight: 4
  },
  'mr-2': {
    marginRight: 8
  },
  'mr-3': {
    marginRight: 12
  },
  'mr-4': {
    marginRight: 16
  },
  'mr-5': {
    marginRight: 20
  },
  'mr-6': {
    marginRight: 24
  },
  'mr-7': {
    marginRight: 28
  },
  'mr-8': {
    marginRight: 32
  },
  'mr-9': {
    marginRight: 36
  },
  'mr-10': {
    marginRight: 40
  },
  'mr-11': {
    marginRight: 44
  },
  'mr-12': {
    marginRight: 48
  },
  'mr-13': {
    marginRight: 52
  },
  'mr-14': {
    marginRight: 56
  },
  'mr-15': {
    marginRight: 60
  },
  'mr-16': {
    marginRight: 64
  },

  'ms-1': {
    marginStart: 4
  },
  'ms-2': {
    marginStart: 8
  },
  'ms-3': {
    marginStart: 12
  },
  'ms-4': {
    marginStart: 16
  },
  'ms-5': {
    marginStart: 20
  },
  'ms-6': {
    marginStart: 24
  },
  'ms-7': {
    marginStart: 28
  },
  'ms-8': {
    marginStart: 32
  },
  'ms-9': {
    marginStart: 36
  },
  'ms-10': {
    marginStart: 40
  },
  'ms-11': {
    marginStart: 44
  },
  'ms-12': {
    marginStart: 48
  },
  'ms-13': {
    marginStart: 52
  },
  'ms-14': {
    marginStart: 56
  },
  'ms-15': {
    marginStart: 60
  },
  'ms-16': {
    marginStart: 64
  },

  'me-1': {
    marginEnd: 4
  },
  'me-2': {
    marginEnd: 8
  },
  'me-3': {
    marginEnd: 12
  },
  'me-4': {
    marginEnd: 16
  },
  'me-5': {
    marginEnd: 20
  },
  'me-6': {
    marginEnd: 24
  },
  'me-7': {
    marginEnd: 28
  },
  'me-8': {
    marginEnd: 32
  },
  'me-9': {
    marginEnd: 36
  },
  'me-10': {
    marginEnd: 40
  },
  'me-11': {
    marginEnd: 44
  },
  'me-12': {
    marginEnd: 48
  },
  'me-13': {
    marginEnd: 52
  },
  'me-14': {
    marginEnd: 56
  },
  'me-15': {
    marginEnd: 60
  },
  'me-16': {
    marginEnd: 64
  }
};

const Padding = {
  'p-1': {
    padding: 4
  },
  'p-2': {
    padding: 8
  },
  'p-3': {
    padding: 12
  },
  'p-4': {
    padding: 16
  },
  'p-5': {
    padding: 20
  },
  'p-6': {
    padding: 24
  },
  'p-7': {
    padding: 28
  },
  'p-8': {
    padding: 32
  },
  'p-9': {
    padding: 36
  },
  'p-10': {
    padding: 40
  },
  'p-11': {
    padding: 44
  },
  'p-12': {
    padding: 48
  },
  'p-13': {
    padding: 52
  },
  'p-14': {
    padding: 56
  },
  'p-15': {
    padding: 60
  },
  'p-16': {
    padding: 64
  },

  'px-1': {
    paddingHorizontal: 4
  },
  'px-2': {
    paddingHorizontal: 8
  },
  'px-3': {
    paddingHorizontal: 12
  },
  'px-4': {
    paddingHorizontal: 16
  },
  'px-5': {
    paddingHorizontal: 20
  },
  'px-6': {
    paddingHorizontal: 24
  },
  'px-7': {
    paddingHorizontal: 28
  },
  'px-8': {
    paddingHorizontal: 32
  },
  'px-9': {
    paddingHorizontal: 36
  },
  'px-10': {
    paddingHorizontal: 40
  },
  'px-11': {
    paddingHorizontal: 44
  },
  'px-12': {
    paddingHorizontal: 48
  },
  'px-13': {
    paddingHorizontal: 52
  },
  'px-14': {
    paddingHorizontal: 56
  },
  'px-15': {
    paddingHorizontal: 60
  },
  'px-16': {
    paddingHorizontal: 64
  },

  'py-1': {
    paddingVertical: 4
  },
  'py-2': {
    paddingVertical: 8
  },
  'py-3': {
    paddingVertical: 12
  },
  'py-4': {
    paddingVertical: 16
  },
  'py-5': {
    paddingVertical: 20
  },
  'py-6': {
    paddingVertical: 24
  },
  'py-7': {
    paddingVertical: 28
  },
  'py-8': {
    paddingVertical: 32
  },
  'py-9': {
    paddingVertical: 36
  },
  'py-10': {
    paddingVertical: 40
  },
  'py-11': {
    paddingVertical: 44
  },
  'py-12': {
    paddingVertical: 48
  },
  'py-13': {
    paddingVertical: 52
  },
  'py-14': {
    paddingVertical: 56
  },
  'py-15': {
    paddingVertical: 60
  },
  'py-16': {
    paddingVertical: 64
  },

  'pt-1': {
    paddingTop: 4
  },
  'pt-2': {
    paddingTop: 8
  },
  'pt-3': {
    paddingTop: 12
  },
  'pt-4': {
    paddingTop: 16
  },
  'pt-5': {
    paddingTop: 20
  },
  'pt-6': {
    paddingTop: 24
  },
  'pt-7': {
    paddingTop: 28
  },
  'pt-8': {
    paddingTop: 32
  },
  'pt-9': {
    paddingTop: 36
  },
  'pt-10': {
    paddingTop: 40
  },
  'pt-11': {
    paddingTop: 44
  },
  'pt-12': {
    paddingTop: 48
  },
  'pt-13': {
    paddingTop: 52
  },
  'pt-14': {
    paddingTop: 56
  },
  'pt-15': {
    paddingTop: 60
  },
  'pt-16': {
    paddingTop: 64
  },

  'pb-1': {
    paddingBottom: 4
  },
  'pb-2': {
    paddingBottom: 8
  },
  'pb-3': {
    paddingBottom: 12
  },
  'pb-4': {
    paddingBottom: 16
  },
  'pb-5': {
    paddingBottom: 20
  },
  'pb-6': {
    paddingBottom: 24
  },
  'pb-7': {
    paddingBottom: 28
  },
  'pb-8': {
    paddingBottom: 32
  },
  'pb-9': {
    paddingBottom: 36
  },
  'pb-10': {
    paddingBottom: 40
  },
  'pb-11': {
    paddingBottom: 44
  },
  'pb-12': {
    paddingBottom: 48
  },
  'pb-13': {
    paddingBottom: 52
  },
  'pb-14': {
    paddingBottom: 56
  },
  'pb-15': {
    paddingBottom: 60
  },
  'pb-16': {
    paddingBottom: 64
  },

  'pl-1': {
    paddingLeft: 4
  },
  'pl-2': {
    paddingLeft: 8
  },
  'pl-3': {
    paddingLeft: 12
  },
  'pl-4': {
    paddingLeft: 16
  },
  'pl-5': {
    paddingLeft: 20
  },
  'pl-6': {
    paddingLeft: 24
  },
  'pl-7': {
    paddingLeft: 28
  },
  'pl-8': {
    paddingLeft: 32
  },
  'pl-9': {
    paddingLeft: 36
  },
  'pl-10': {
    paddingLeft: 40
  },
  'pl-11': {
    paddingLeft: 44
  },
  'pl-12': {
    paddingLeft: 48
  },
  'pl-13': {
    paddingLeft: 52
  },
  'pl-14': {
    paddingLeft: 56
  },
  'pl-15': {
    paddingLeft: 60
  },
  'pl-16': {
    paddingLeft: 64
  },

  'pr-1': {
    paddingRight: 4
  },
  'pr-2': {
    paddingRight: 8
  },
  'pr-3': {
    paddingRight: 12
  },
  'pr-4': {
    paddingRight: 16
  },
  'pr-5': {
    paddingRight: 20
  },
  'pr-6': {
    paddingRight: 24
  },
  'pr-7': {
    paddingRight: 28
  },
  'pr-8': {
    paddingRight: 32
  },
  'pr-9': {
    paddingRight: 36
  },
  'pr-10': {
    paddingRight: 40
  },
  'pr-11': {
    paddingRight: 44
  },
  'pr-12': {
    paddingRight: 48
  },
  'pr-13': {
    paddingRight: 52
  },
  'pr-14': {
    paddingRight: 56
  },
  'pr-15': {
    paddingRight: 60
  },
  'pr-16': {
    paddingRight: 64
  },

  'ps-1': {
    paddingStart: 4
  },
  'ps-2': {
    paddingStart: 8
  },
  'ps-3': {
    paddingStart: 12
  },
  'ps-4': {
    paddingStart: 16
  },
  'ps-5': {
    paddingStart: 20
  },
  'ps-6': {
    paddingStart: 24
  },
  'ps-7': {
    paddingStart: 28
  },
  'ps-8': {
    paddingStart: 32
  },
  'ps-9': {
    paddingStart: 36
  },
  'ps-10': {
    paddingStart: 40
  },
  'ps-11': {
    paddingStart: 44
  },
  'ps-12': {
    paddingStart: 48
  },
  'ps-13': {
    paddingStart: 52
  },
  'ps-14': {
    paddingStart: 56
  },
  'ps-15': {
    paddingStart: 60
  },
  'ps-16': {
    paddingStart: 64
  },

  'pe-1': {
    paddingEnd: 4
  },
  'pe-2': {
    paddingEnd: 8
  },
  'pe-3': {
    paddingEnd: 12
  },
  'pe-4': {
    paddingEnd: 16
  },
  'pe-5': {
    paddingEnd: 20
  },
  'pe-6': {
    paddingEnd: 24
  },
  'pe-7': {
    paddingEnd: 28
  },
  'pe-8': {
    paddingEnd: 32
  },
  'pe-9': {
    paddingEnd: 36
  },
  'pe-10': {
    paddingEnd: 40
  },
  'pe-11': {
    paddingEnd: 44
  },
  'pe-12': {
    paddingEnd: 48
  },
  'pe-13': {
    paddingEnd: 52
  },
  'pe-14': {
    paddingEnd: 56
  },
  'pe-15': {
    paddingEnd: 60
  },
  'pe-16': {
    paddingEnd: 64
  }
};

export const Spacing = {
  Margin,
  Padding
};

export default Spacing;
