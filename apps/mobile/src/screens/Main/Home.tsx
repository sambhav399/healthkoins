import { Dimensions, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type { SharedValue } from 'react-native-reanimated';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollOffset
} from 'react-native-reanimated';
import USER_STAGES from '@/constants/USER_STAGES';
import { Badge } from '@/design-system/components';
import { Flame, Link2, ShieldCheck } from '@/design-system/Icons';
import Theme from '@/design-system/Theme';
import { stylesHero, stylesScreenHome } from '@/styles/stylesScreenHome';

const { width, height } = Dimensions.get('window');
const user = USER_STAGES[12 - 1];
const IMG_HEIGHT = height / 2.5;

const HeroSection = ({
  scrollOffset
}: {
  scrollOffset: SharedValue<number>;
}) => {
  const styles = stylesHero({ width: width, height: IMG_HEIGHT });
  const heroImageAnimatedStyle = useAnimatedStyle(() => ({
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
    <View style={styles.hero}>
      <Animated.Image
        source={user.image}
        style={[styles.heroImage, heroImageAnimatedStyle]}
      />
      <LinearGradient
        style={styles.heroGradient}
        colors={['transparent', Theme.COLORS.Primary[950]]}
        start={{
          x: 0,
          y: 0.4
        }}
        end={{
          x: 0,
          y: 1
        }}
      />
      <View style={styles.userStageDetails}>
        <View style={styles.userStageBadges}>
          <Badge
            label={`Level - ${user.level}`}
            backgroundColor={Theme.COLORS.Brand[400]}
            color={Theme.COLORS.Default[900]}
            icon={ShieldCheck}
            size={Theme.SCALE[3]}
          />
          <Badge
            label={`Streak - 3`}
            backgroundColor={Theme.COLORS.Default[400]}
            color={Theme.COLORS.Default[900]}
            icon={Flame}
            size={Theme.SCALE[3]}
          />
          <Badge
            label={`Linked`}
            backgroundColor={Theme.COLORS.Default[400]}
            color={Theme.COLORS.Default[900]}
            icon={Link2}
            size={Theme.SCALE[3]}
          />
        </View>
        <Text style={styles.userStageName}>{user.name}</Text>
        <Text style={styles.userStageDescription}>{user.description}</Text>
      </View>
    </View>
  );
};

export function Home() {
  const styles = stylesScreenHome();
  const refScrollView = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollOffset(refScrollView);

  return (
    <Animated.ScrollView
      ref={refScrollView}
      scrollEventThrottle={16}
      style={styles.scrollView}
    >
      <HeroSection scrollOffset={scrollOffset} />
      <View style={styles.content} />
    </Animated.ScrollView>
  );
}

export default Home;
