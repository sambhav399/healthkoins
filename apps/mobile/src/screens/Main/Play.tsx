import { StyleSheet, Text, View } from 'react-native';
import Theme from '@/design-system/Theme';

export function Play() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Play</Text>
    </View>
  );
}

export default Play;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  title: {
    ...Theme.FONT_SIZE.Heading2
  }
});
