import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { Text } from '@/design-system/components';
import Theme from '@/design-system/Theme';
import type { AuthStackParamList } from '@/types/navigation';

type Props = NativeStackScreenProps<AuthStackParamList, 'VerifyEmail'>;

export function VerifyEmail({ route }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Email</Text>
      {route.params?.email ? (
        <Text style={styles.subtitle}>{route.params.email}</Text>
      ) : null}
    </View>
  );
}

export default VerifyEmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  title: {
    ...Theme.FONT_SIZE.Heading2
  },
  subtitle: {
    ...Theme.FONT_SIZE.Body2,
    marginTop: 8
  }
});
