import { StyleSheet } from 'react-native';
import type { EdgeInsets } from 'react-native-safe-area-context';
import Theme from '@/design-system/Theme';

const colorFocused = Theme.COLORS.Brand[400];
const colorTabBackground = Theme.COLORS.Primary[900];

export const stylesCustomHeader = ({ insets }: { insets: EdgeInsets }) =>
  StyleSheet.create({
    customHeaderWrapper: {
      backgroundColor: colorTabBackground,
      paddingTop: insets.top,
    },
    customHeader: {
      ...Theme.SPACING.Padding['py-2'],
      ...Theme.SPACING.Padding['px-4'],
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    userDataWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Theme.SCALE[2]
    },
    userImage: {
      width: Theme.SCALE[12],
      height: Theme.SCALE[12],
      borderRadius: Theme.SCALE[12],
      overflow: 'hidden'
    },
    userGreeting: {
      ...Theme.FONT_FAMILY.Lead.Medium,
      ...Theme.FONT_SIZE.Body2,
      color: Theme.COLORS.Default[100]
    },
    userName: {
      ...Theme.FONT_FAMILY.Lead.SemiBold,
      ...Theme.FONT_SIZE.Body1,
      color: Theme.COLORS.Default[100]
    },
    userActionWrapper: {
      flexDirection: 'row',
      gap: Theme.SCALE[2],
      alignItems: 'center'
    },
    userActionSync: {
      ...Theme.SPACING.Padding['p-2'],
      flexDirection: 'row',
      gap: Theme.SCALE[2],
      alignItems: 'center',
      backgroundColor: Theme.COLORS.Primary[800],
      borderRadius: 99
    },
    userActionSyncLabel: {
      ...Theme.FONT_FAMILY.Default.SemiBold,
      ...Theme.FONT_SIZE.Body2,
      color: Theme.COLORS.Default[100]
    },
    userActionNotification: {
      ...Theme.SPACING.Padding['p-2'],
      borderRadius: 99,
      backgroundColor: Theme.COLORS.Primary[800]
    }
  });

export const stylesCustomTab = ({ isFocused }: { isFocused: boolean }) =>
  StyleSheet.create({
    customTab: {
      ...Theme.SPACING.Padding['py-3'],
      flex: 1,
      alignItems: 'center',
      borderTopWidth: 4,
      borderTopColor: !isFocused ? colorTabBackground : colorFocused
    },
    customTabIcon: {
      color: !isFocused ? Theme.COLORS.Default[300] : colorFocused
    },
    customTabLabel: {
      ...Theme.FONT_SIZE.Label3,
      ...Theme.FONT_FAMILY.Default.Bold,
      color: !isFocused ? Theme.COLORS.Default[300] : colorFocused
    }
  });

export const stylesCustomTabBar = ({ insets }: { insets: EdgeInsets }) =>
  StyleSheet.create({
    customTabBarWrapper: {
      backgroundColor: colorTabBackground,
      paddingBottom: insets.bottom + 4
    },
    customTabBar: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }
  });
