import { StyleSheet, View } from 'react-native';
import { Text } from '@/design-system/components';
import Theme from '@/design-system/Theme';

export function Ranks() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ranks</Text>
        </View>
    );
}

export default Ranks;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    title: {
        ...Theme.FONT_SIZE.Heading2,
    },
});
