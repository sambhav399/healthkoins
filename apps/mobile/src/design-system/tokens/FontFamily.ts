const FONT_Default = 'Manrope';

export const FontFamily = {
  Default: {
    Light: { fontFamily: `${FONT_Default}-Light`, fontWeight: 'normal' as const },
    ExtraLight: { fontFamily: `${FONT_Default}-ExtraLight`, fontWeight: 'normal' as const },
    Regular: { fontFamily: `${FONT_Default}-Regular`, fontWeight: 'normal' as const },
    Medium: { fontFamily: `${FONT_Default}-Medium`, fontWeight: 'normal' as const },
    SemiBold: { fontFamily: `${FONT_Default}-SemiBold`, fontWeight: 'normal' as const },
    Bold: { fontFamily: `${FONT_Default}-Bold`, fontWeight: 'normal' as const },
    ExtraBold: { fontFamily: `${FONT_Default}-ExtraBold`, fontWeight: 'normal' as const },
  },
};

export default FontFamily;
