import { Dimensions, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollOffset
} from 'react-native-reanimated';
import USER_STAGES from '@/constants/USER_STAGES';
import { Flame, ShieldCheck } from '@/design-system/Icons';
import Theme from '@/design-system/Theme';

const { width } = Dimensions.get('window');
const user = USER_STAGES[18 - 1];
const IMG_HEIGHT = 400;

export function Home() {
  const refScrollView = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollOffset(refScrollView);
  const imageAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollOffset.value,
          [-IMG_HEIGHT / 2, 0, IMG_HEIGHT],
          [-IMG_HEIGHT / 4, 0, IMG_HEIGHT * 0.5]
        )
      },
      {
        scale: interpolate(
          scrollOffset.value,
          [-IMG_HEIGHT, 0, IMG_HEIGHT],
          [2, 1, 1]
        )
      }
    ]
  }));

  return (
    <Animated.ScrollView
      ref={refScrollView}
      scrollEventThrottle={16}
      style={{
        backgroundColor: Theme.COLORS.Primary[950]
      }}
      contentContainerStyle={{
        flex: 1
      }}
    >
      <View
        style={{
          width,
          height: IMG_HEIGHT,
          justifyContent: 'flex-end'
        }}
      >
        <Animated.Image
          source={user.image}
          style={[
            {
              width,
              height: IMG_HEIGHT,
              position: 'absolute'
            },
            imageAnimatedStyle
          ]}
        />
        <LinearGradient
          style={{
            width,
            height: IMG_HEIGHT,
            position: 'absolute'
          }}
          colors={['transparent', Theme.COLORS.Primary[950]]}
          start={{
            x: 0,
            y: 0.45
          }}
          end={{
            x: 0,
            y: 1
          }}
        />
        <View style={[Theme.SPACING.Padding['px-4']]}>
          <View
            style={{
              alignItems: 'center',
              gap: Theme.SCALE[2]
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                gap: Theme.SCALE[2],
                alignItems: 'center'
              }}
            >
              <View
                style={[
                  Theme.SPACING.Padding['py-1'],
                  Theme.SPACING.Padding['px-2'],
                  {
                    backgroundColor: Theme.COLORS.Brand[400],
                    borderRadius: 99,
                    flexDirection: 'row',
                    gap: Theme.SCALE[1],
                    alignItems: 'center'
                  }
                ]}
              >
                <ShieldCheck size={Theme.SCALE[3]} />
                <Text
                  style={[
                    Theme.FONT_FAMILY.Default.SemiBold,
                    Theme.FONT_SIZE.Body3,
                    {
                      color: Theme.COLORS.Default[900]
                    }
                  ]}
                >
                  Level - {user.level}
                </Text>
              </View>
              <View
                style={[
                  Theme.SPACING.Padding['py-1'],
                  Theme.SPACING.Padding['px-2'],
                  {
                    backgroundColor: Theme.COLORS.Default[300],
                    borderRadius: 99,
                    flexDirection: 'row',
                    gap: Theme.SCALE[1],
                    alignItems: 'center'
                  }
                ]}
              >
                <Flame size={Theme.SCALE[3]} />
                <Text
                  style={[
                    Theme.FONT_FAMILY.Default.SemiBold,
                    Theme.FONT_SIZE.Body3,
                    {
                      color: Theme.COLORS.Default[900]
                    }
                  ]}
                >
                  Streak - 3
                </Text>
              </View>
            </View>
            <Text
              style={[
                Theme.FONT_FAMILY.Lead.Medium,
                Theme.FONT_SIZE.Display1,
                {
                  color: Theme.COLORS.Brand[400]
                }
              ]}
            >
              {user.name}
            </Text>
          </View>
        </View>
      </View>
      {/*
      <View
        style={[
          Theme.SPACING.Padding['px-4'],
          {
            flex: 1,
            backgroundColor: Theme.COLORS.Primary[950]
          }
        ]}
      >
        <Text
          style={[
            Theme.FONT_FAMILY.Default.Regular,
            Theme.FONT_SIZE.Display1,
            {
              color: Theme.COLORS.Default[100]
            }
          ]}
        >
          Home
        </Text>
      </View> */}
    </Animated.ScrollView>
  );
}

export default Home;
