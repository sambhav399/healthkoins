import type { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Theme from '@/design-system/Theme';

export type PROPS_DataBlock = {
  dataBlockTitle?: string;
  dataBlockBadge?: ReactNode;
  children: ReactNode;
};

export const DataBlock = ({
  dataBlockTitle,
  dataBlockBadge,
  children
}: PROPS_DataBlock) => {
  const styles = stylesDataBlock();
  return (
    <View style={styles.dataBlockWrapper}>
      <View style={styles.dataBlockHeader}>
        <View style={styles.dataBlockTitleWrapper}>
          {dataBlockTitle && (
            <Text style={styles.dataBlockTitle}>{dataBlockTitle}</Text>
          )}
        </View>
        {dataBlockBadge}
      </View>
      <View style={styles.dataBlock}>{children}</View>
    </View>
  );
};

const stylesDataBlock = () =>
  StyleSheet.create({
    dataBlockWrapper: {},
    dataBlockHeader: {
      ...Theme.SPACING.Margin['mb-2'],
      flexDirection: 'row',
      alignItems: 'center'
    },
    dataBlockTitleWrapper: {
      flex: 1
    },
    dataBlockTitle: {
      ...Theme.FONT_FAMILY.Lead.Regular,
      ...Theme.FONT_SIZE.Heading3,
      flex: 1,
      color: Theme.COLORS.Default[100]
    },
    dataBlock: {
      ...Theme.SPACING.Padding['p-4'],
      borderRadius: Theme.SCALE[4],
      backgroundColor: Theme.COLORS.Primary[900]
    }
  });
