import type {
  BottomTabBarProps,
  BottomTabHeaderProps
} from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { NavigationRoute, ParamListBase } from '@react-navigation/native';
import { memo } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ROUTES } from '@/constants/ROUTES';
import {
  Bell,
  House,
  Newspaper,
  RefreshCw,
  Swords,
  Trophy,
  Users
} from '@/design-system/Icons';
import Theme from '@/design-system/Theme';
import Feed from '@/screens/Main/Feed';
import Groups from '@/screens/Main/Groups';
import Home from '@/screens/Main/Home';
import Play from '@/screens/Main/Play';
import Ranks from '@/screens/Main/Ranks';
import {
  stylesCustomHeader,
  stylesCustomTab,
  stylesCustomTabBar
} from '@/styles/stylesTabNavigator';
import type { TabParamList } from '@/types/navigation';

const colorFocused = Theme.COLORS.Brand[400];
const Tab = createBottomTabNavigator<TabParamList>();
const TabIcons = {
  [ROUTES.TABS.HOME]: House,
  [ROUTES.TABS.PLAY]: Swords,
  [ROUTES.TABS.GROUPS]: Users,
  [ROUTES.TABS.FEED]: Newspaper,
  [ROUTES.TABS.RANKS]: Trophy
};

type PROPS_CustomTab = {
  route: NavigationRoute<ParamListBase, string>;
  onPress: () => void;
  isFocused: boolean;
};

const CustomHeader = (_props: BottomTabHeaderProps) => {
  const insets = useSafeAreaInsets();
  const styles = stylesCustomHeader({ insets: insets });

  return (
    <View style={styles.customHeaderWrapper}>
      <View style={styles.customHeader}>
        <View style={styles.userDataWrapper}>
          <Image
            source={require('@/assets/images/avatars/level1.png')}
            style={styles.userImage}
          />
          <View>
            <Text style={styles.userGreeting}>Welcome</Text>
            <Text style={styles.userName}>Sambhav Sharma</Text>
          </View>
        </View>
        <View style={styles.userActionWrapper}>
          <Pressable style={styles.userActionSync}>
            <RefreshCw color={colorFocused} size={Theme.SCALE[5]} />
            <Text style={styles.userActionSyncLabel}>Sync</Text>
          </Pressable>
          <Pressable style={styles.userActionNotification}>
            <Bell color={colorFocused} size={Theme.SCALE[5]} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const CustomTab = memo(({ route, onPress, isFocused }: PROPS_CustomTab) => {
  const styles = stylesCustomTab({ isFocused: isFocused });
  const Icon = TabIcons[route.name as keyof typeof TabIcons];

  return (
    <Pressable onPress={onPress} style={styles.customTab}>
      <Icon color={styles.customTabIcon.color} size={Theme.SCALE[5]} />
      <Text style={styles.customTabLabel}>{route.name}</Text>
    </Pressable>
  );
});

const CustomTabBar = memo(
  ({ state, navigation, insets }: BottomTabBarProps) => {
    const { routes, index } = state;
    const styles = stylesCustomTabBar({ insets: insets });

    const handleTabClick = (
      routeKey: string,
      routeName: string,
      isFocused: boolean
    ) => {
      const event = navigation.emit({
        type: 'tabPress',
        target: routeKey,
        canPreventDefault: true
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(routeName as never);
      }
    };

    return (
      <View style={styles.customTabBarWrapper}>
        <View style={styles.customTabBar}>
          {routes.map((route, routeIndex) => {
            const isFocused = routeIndex === index;
            return (
              <CustomTab
                isFocused={isFocused}
                key={route.key}
                route={route}
                onPress={() => handleTabClick(route.key, route.name, isFocused)}
              />
            );
          })}
        </View>
      </View>
    );
  }
);

export function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.TABS.HOME}
      backBehavior="initialRoute"
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: true,
        header: (props) => <CustomHeader {...props} />
      }}
    >
      <Tab.Screen name={ROUTES.TABS.HOME} component={Home} />
      <Tab.Screen name={ROUTES.TABS.PLAY} component={Play} />
      <Tab.Screen name={ROUTES.TABS.GROUPS} component={Groups} />
      <Tab.Screen name={ROUTES.TABS.FEED} component={Feed} />
      <Tab.Screen name={ROUTES.TABS.RANKS} component={Ranks} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
