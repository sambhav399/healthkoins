import type { StyleProp, TextProps, TextStyle } from 'react-native';
import { Text as NativeText } from 'react-native';
import Theme from '@/design-system/Theme';

type Props = TextProps & {
  style?: StyleProp<TextStyle>;
};

export const Text = ({ style, ...props }: Props) => (
  <NativeText
    {...props}
    style={[
      Theme.FONT_FAMILY.Default.Regular,
      style
    ]}
  />
);

export default Text;
