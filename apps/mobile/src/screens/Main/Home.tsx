import { StyleSheet, View } from 'react-native';
import { Text } from '@/design-system/components';
import Theme from '@/design-system/Theme';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, Theme.FONT_FAMILY.Default.Light]}>Home</Text>
      <Text style={[styles.title, Theme.FONT_FAMILY.Default.Regular]}>Home</Text>
      <Text style={[styles.title, Theme.FONT_FAMILY.Default.Medium]}>Home</Text>
      <Text style={[styles.title, Theme.FONT_FAMILY.Default.SemiBold]}>Home</Text>
      <Text style={[styles.title, Theme.FONT_FAMILY.Default.Bold]}>Home</Text>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: Theme.COLORS.Primary[950]
  },
  title: {
    ...Theme.FONT_SIZE.Heading2,
  },
});
