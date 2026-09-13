import { StyleSheet } from 'react-native';
import Theme from '@/design-system/Theme';

export const stylesHero = ({
  width,
  height
}: {
  width: number;
  height: number;
}) =>
  StyleSheet.create({
    hero: {
      width,
      height,
      justifyContent: 'flex-end'
    },
    heroImage: {
      width,
      height,
      position: 'absolute'
    },
    heroGradient: {
      width,
      height,
      position: 'absolute'
    },
    userStageDetails: {
      ...Theme.SPACING.Padding['px-4'],
      alignItems: 'center',
      gap: Theme.SCALE[1]
    },
    userStageBadges: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: Theme.SCALE[2]
    },
    userStageName: {
      ...Theme.FONT_FAMILY.Lead.Medium,
      ...Theme.FONT_SIZE.Display1,
      color: Theme.COLORS.Brand[400]
    },
    userStageDescription: {
      ...Theme.FONT_FAMILY.Default.Medium,
      ...Theme.FONT_SIZE.Body4,
      color: Theme.COLORS.Default[100]
    }
  });

export const stylesScreenHome = () =>
  StyleSheet.create({
    scrollView: {
      backgroundColor: Theme.COLORS.Primary[950]
    },
    content: {
      ...Theme.SPACING.Padding['p-4'],
      flex: 1,
      backgroundColor: Theme.COLORS.Primary[950]
    }
  });
