import { StyleSheet, Text, View } from 'react-native';
import type { LucideIcon } from '@/design-system/Icons';
import Theme from '@/design-system/Theme';

export type PROPS_Badge = {
  label: string;
  icon?: LucideIcon;
  color: string;
  size: number;
  backgroundColor: string;
};

export const Badge = ({
  label,
  icon,
  backgroundColor,
  color,
  size
}: PROPS_Badge) => {
  const styles = stylesBadge({ color, backgroundColor });
  const IconComponent = icon;
  return (
    <View style={styles.badge}>
      {IconComponent && (
        <IconComponent color={styles.badgeIcon.color} size={size} />
      )}
      <Text style={styles.badgeLabel}>{label}</Text>
    </View>
  );
};

const stylesBadge = ({
  color,
  backgroundColor
}: {
  color: string;
  backgroundColor: string;
}) =>
  StyleSheet.create({
    badge: {
      ...Theme.SPACING.Padding['py-1'],
      ...Theme.SPACING.Padding['px-2'],
      borderRadius: 99,
      flexDirection: 'row',
      gap: Theme.SCALE[1],
      alignItems: 'center',
      backgroundColor
    },
    badgeIcon: {
      color
    },
    badgeLabel: {
      ...Theme.FONT_FAMILY.Default.SemiBold,
      ...Theme.FONT_SIZE.Body3,
      color
    }
  });
