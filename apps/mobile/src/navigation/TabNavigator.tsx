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
import type { TabParamList } from '@/types/navigation';

const colorFocused = Theme.COLORS.Brand[400];
const colorTabBackground = Theme.COLORS.Primary[900];
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

const CustomTab = memo(({ route, onPress, isFocused }: PROPS_CustomTab) => {
  const Icon = TabIcons[route.name as keyof typeof TabIcons];

  const color = !isFocused ? Theme.COLORS.Default[300] : colorFocused;
  return (
    <Pressable
      onPress={onPress}
      style={[
        Theme.SPACING.Padding['py-3'],
        {
          flex: 1,
          alignItems: 'center',
          borderTopWidth: 4,
          borderTopColor: !isFocused ? colorTabBackground : colorFocused
        }
      ]}
    >
      <Icon color={color} size={Theme.SCALE[5]} />
      <Text
        style={[
          Theme.FONT_SIZE.Label3,
          Theme.FONT_FAMILY.Default.Bold,
          {
            color: color
          }
        ]}
      >
        {route.name}
      </Text>
    </Pressable>
  );
});

const CustomTabBar = memo(
  ({ state, navigation, insets }: BottomTabBarProps) => {
    const { routes, index } = state;

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
      <View
        style={{
          backgroundColor: colorTabBackground,
          paddingBottom: insets.bottom + 4
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
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

const CustomHeader = (_props: BottomTabHeaderProps) => {
  const inset = useSafeAreaInsets();
  return (
    <View
      style={{
        backgroundColor: colorTabBackground,
        paddingTop: inset.top
      }}
    >
      <View
        style={[
          Theme.SPACING.Padding['py-2'],
          Theme.SPACING.Padding['px-4'],
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }
        ]}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: Theme.SCALE[2]
          }}
        >
          <Image
            source={require('@/assets/images/avatars/level1.png')}
            style={[
              {
                width: Theme.SCALE[12],
                height: Theme.SCALE[12],
                borderRadius: Theme.SCALE[12],
                overflow: 'hidden'
              }
            ]}
          />
          <View>
            <Text
              style={[
                Theme.FONT_FAMILY.Lead.Medium,
                Theme.FONT_SIZE.Body2,
                {
                  color: Theme.COLORS.Default[100]
                }
              ]}
            >
              Welcome
            </Text>
            <Text
              style={[
                Theme.FONT_FAMILY.Lead.SemiBold,
                Theme.FONT_SIZE.Body1,
                {
                  color: Theme.COLORS.Default[100]
                }
              ]}
            >
              Sambhav Sharma
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: Theme.SCALE[2],
            alignItems: 'center'
          }}
        >
          <Pressable
            style={[
              Theme.SPACING.Padding['p-2'],
              {
                flexDirection: 'row',
                gap: Theme.SCALE[2],
                alignItems: 'center',
                backgroundColor: Theme.COLORS.Primary[800],
                borderRadius: 99
              }
            ]}
          >
            <RefreshCw color={colorFocused} size={Theme.SCALE[5]} />
            <Text
              style={[
                Theme.FONT_FAMILY.Default.SemiBold,
                Theme.FONT_SIZE.Body2,
                {
                  color: Theme.COLORS.Default[100]
                }
              ]}
            >
              Sync
            </Text>
          </Pressable>
          <Pressable
            style={[
              Theme.SPACING.Padding['p-2'],
              {
                borderRadius: 99,
                backgroundColor: Theme.COLORS.Primary[800]
              }
            ]}
          >
            <Bell color={colorFocused} size={Theme.SCALE[5]} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.TABS.HOME}
      backBehavior="initialRoute"
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: true,
        // headerTransparent: true,
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
