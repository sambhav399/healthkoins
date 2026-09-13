import { Image, ScrollView, Text, View } from 'react-native';
import USER_STAGES from '@/constants/USER_STAGES';
import { DataBlock } from '@/design-system/components';
import {
  BicepsFlexed,
  Heart,
  MessageCircle,
  Share
} from '@/design-system/Icons';
import Theme from '@/design-system/Theme';
import {
  styleFeedBlockUser,
  stylesScreenFeed
} from '@/styles/stylesScreenFeed';

const FeedBlockUser = ({ userLevel }: { userLevel: number }) => {
  const styles = styleFeedBlockUser();
  const user = USER_STAGES[userLevel];

  return (
    <DataBlock>
      <View style={styles.blockHeader}>
        <View style={styles.userProfile}>
          <Image source={user.image} style={styles.userProfileImage} />
          <View style={styles.userProfileData}>
            <Text style={styles.userProfileName}>{user.name}</Text>
            <Text style={styles.userProfileDetails}>
              Level {user.level} - {user.name} •{' '}
              {Math.floor(Math.random() * 10)} Days Ago
            </Text>
          </View>
        </View>
        <View style={styles.userCoins} />
      </View>
      <View style={styles.blockBody}>
        <Text>Completed Daily challenge</Text>
      </View>
      <View style={styles.blockFooter}>
        <View style={styles.actionFooter}>
          <Heart color={styles.actionFooterIcon.color} size={Theme.SCALE[4]} />
          <Text style={styles.actionFooterLabel}>0</Text>
        </View>
        <View style={styles.actionFooter}>
          <MessageCircle
            color={styles.actionFooterIcon.color}
            size={Theme.SCALE[4]}
          />
          <Text style={styles.actionFooterLabel}>0</Text>
        </View>
        <View style={styles.actionFooter}>
          <BicepsFlexed
            color={styles.actionFooterIcon.color}
            size={Theme.SCALE[4]}
          />
          <Text style={styles.actionFooterLabel}>React</Text>
        </View>
        <View style={styles.actionFooter}>
          <Share color={styles.actionFooterIcon.color} size={Theme.SCALE[4]} />
          <Text style={styles.actionFooterLabel}>Share</Text>
        </View>
      </View>
    </DataBlock>
  );
};

export function Feed() {
  const styles = stylesScreenFeed();

  return (
    <ScrollView
      style={styles.scrollView}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.content}>
        {[...Array(20)].map((_, index) => (
          <FeedBlockUser key={index.toString()} userLevel={index} />
        ))}
      </View>
    </ScrollView>
  );
}

export default Feed;
