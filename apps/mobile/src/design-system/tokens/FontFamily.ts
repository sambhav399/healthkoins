const FONT_Default = 'Manrope';
const FONT_Lead = 'Lora';

export const FontFamily = {
  Default: {
    Light: {
      fontFamily: `${FONT_Default}-Light`,
      fontWeight: 'normal' as const
    },
    ExtraLight: {
      fontFamily: `${FONT_Default}-ExtraLight`,
      fontWeight: 'normal' as const
    },
    Regular: {
      fontFamily: `${FONT_Default}-Regular`,
      fontWeight: 'normal' as const
    },
    Medium: {
      fontFamily: `${FONT_Default}-Medium`,
      fontWeight: 'normal' as const
    },
    SemiBold: {
      fontFamily: `${FONT_Default}-SemiBold`,
      fontWeight: 'normal' as const
    },
    Bold: {
      fontFamily: `${FONT_Default}-Bold`,
      fontWeight: 'normal' as const
    },
    ExtraBold: {
      fontFamily: `${FONT_Default}-ExtraBold`,
      fontWeight: 'normal' as const
    }
  },
  Lead: {
    Bold: {
      fontFamily: `${FONT_Lead}-Bold`,
      fontWeight: 'normal' as const
    },
    BoldItalic: {
      fontFamily: `${FONT_Lead}-BoldItalic`,
      fontStyle: 'italic' as const,
      fontWeight: 'normal' as const
    },
    Italic: {
      fontFamily: `${FONT_Lead}-Italic`,
      fontStyle: 'italic' as const,
      fontWeight: 'normal' as const
    },
    Medium: {
      fontFamily: `${FONT_Lead}-Medium`,
      fontWeight: 'normal' as const
    },
    MediumItalic: {
      fontFamily: `${FONT_Lead}-MediumItalic`,
      fontStyle: 'italic' as const,
      fontWeight: 'normal' as const
    },
    Regular: {
      fontFamily: `${FONT_Lead}-Regular`,
      fontWeight: 'normal' as const
    },
    SemiBold: {
      fontFamily: `${FONT_Lead}-SemiBold`,
      fontWeight: 'normal' as const
    },
    SemiBoldItalic: {
      fontFamily: `${FONT_Lead}-SemiBoldItalic`,
      fontStyle: 'italic' as const,
      fontWeight: 'normal' as const
    }
  }
};

export default FontFamily;
