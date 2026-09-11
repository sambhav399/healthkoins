
const FONT_Lead = 'Italiana';
const FONT_Default = 'Quicksand';

export const FontFamily = {
  Default: {
    Light: { fontFamily: `${FONT_Default}-Light`, fontWeight: 'normal' as const },
    Regular: { fontFamily: `${FONT_Default}-Regular`, fontWeight: 'normal' as const },
    Medium: { fontFamily: `${FONT_Default}-Medium`, fontWeight: 'normal' as const },
    SemiBold: { fontFamily: `${FONT_Default}-SemiBold`, fontWeight: 'normal' as const },
    Bold: { fontFamily: `${FONT_Default}-Bold`, fontWeight: 'normal' as const },
  },
  Lead: {
    Regular: { fontFamily: `${FONT_Lead}-Regular`, fontWeight: 'normal' as const },
  },
};

export default FontFamily;
