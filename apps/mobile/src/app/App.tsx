import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from '@/navigation/RootNavigator';
import { stylesApp } from '@/styles/stylesApp';

function App() {
  const styles = stylesApp();
  return (
    <GestureHandlerRootView style={styles.rootGestureHandler}>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        <RootNavigator />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
export default App;
