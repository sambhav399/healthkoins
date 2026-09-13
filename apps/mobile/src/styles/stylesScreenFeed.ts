import { StyleSheet } from 'react-native';
import Theme from '@/design-system/Theme';

export const styleFeedBlockUser = () =>
  StyleSheet.create({
    blockHeader: {},
    userProfile: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: Theme.SCALE[2]
    },
    userProfileImage: {
      width: Theme.SCALE[12],
      height: Theme.SCALE[12],
      borderRadius: Theme.SCALE[12]
    },
    userProfileData: {
      flexDirection: 'column',
      gap: Theme.SCALE[1]
    },
    userProfileName: {
      ...Theme.FONT_FAMILY.Default.Bold,
      ...Theme.FONT_SIZE.Body2,
      color: Theme.COLORS.Default[100]
    },
    userProfileDetails: {
      ...Theme.FONT_FAMILY.Default.Regular,
      ...Theme.FONT_SIZE.Body4,
      color: Theme.COLORS.Default[200]
    },
    userCoins: {},
    blockBody: {
      ...Theme.SPACING.Padding['py-2']
    },
    blockFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: Theme.COLORS.Primary[800]
    },
    actionFooter: {
      ...Theme.SPACING.Padding['pt-2'],
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: Theme.SCALE[1]
    },
    actionFooterIcon: {
      color: Theme.COLORS.Default[200]
    },
    actionFooterLabel: {
      ...Theme.FONT_FAMILY.Default.Medium,
      ...Theme.FONT_SIZE.Body3,
      color: Theme.COLORS.Default[200]
    }
  });

export const stylesScreenFeed = () =>
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
