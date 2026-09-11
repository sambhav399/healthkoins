import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { Text } from '@/design-system/components';
import Theme from '@/design-system/Theme';
import type { AuthStackParamList } from '@/types/navigation';

type Props = NativeStackScreenProps<AuthStackParamList, 'ResetPassword'>;

export function ResetPassword({ route }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      {route.params?.token ? (
        <Text style={styles.subtitle}>{route.params.token}</Text>
      ) : null}
    </View>
  );
}

export default ResetPassword;

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
