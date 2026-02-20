import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ImageBackground,
  Modal,
} from 'react-native';

import Layout from '../../layout';
import OnPurposeStyles from '../../style/OnPurpose.styles';
import HomeHeader from '../../components/HomeHeader';
import Images from '../../const/imgUrl';
import LinearGradient from 'react-native-linear-gradient';
import AppDrawer from '../../components/AppDrawer';

const { width } = Dimensions.get('window');
const CIRCLE_SIZE = width * 0.85;

interface CarouselItem {
  id: number;
  type: 'text' | 'image';
  content?: string;
  image?: any;
  bgImage?: any;
}

const data: CarouselItem[] = [
  {
    id: 1,
    type: 'text',

    content:
      'Science has shown to create healthy lives and a sense of well-being we can meditate, practice healthy habits, connect socially, and give back to our community.',
    bgImage: Images.circlebg,
  },
  {
    id: 2,
    type: 'image',
    image: require('../../assets/images/user1.png'),
  },
  {
    id: 3,
    type: 'image',
    image: require('../../assets/images/user2.png'),
  },
];
const users = [
  { id: 1, image: Images.USER3 },
  { id: 2, image: Images.USER4 },
  { id: 3, image: Images.USER5 },
  { id: 4, image: Images.USER3 },
  { id: 5, image: Images.USER4 },
];

const OnPurposeScreen: React.FC = () => {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setIndex(slideIndex);
  };

  return (
    <Layout fullScreen>
      <ScrollView
        style={{ flex: 1, backgroundColor: '#000' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View style={OnPurposeStyles.container}>
          <HomeHeader onMenuPress={() => setDrawerOpen(true)} />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={OnPurposeStyles.usersScroll}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {users.map(user => (
              <View key={user.id} style={OnPurposeStyles.userItem}>
                <Image source={user.image} style={OnPurposeStyles.userImage} />
              </View>
            ))}
          </ScrollView>

          {/* CAROUSEL */}
          <View style={OnPurposeStyles.carouselWrapper}>
            <ScrollView
              ref={scrollRef}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={handleScroll}
            >
              {data.map(item => {
                const hasImage = item.type === 'image' && item.image;

                return (
                  <View key={item.id} style={{ width, alignItems: 'center' }}>
                    <View style={OnPurposeStyles.circle}>
                      {item.type === 'text' && (
                        <>
                          <Image
                            source={require('../../assets/gif/circle.gif')}
                            style={OnPurposeStyles.circleBg}
                          />
                          <View style={OnPurposeStyles.overlay} />

                          {/* Text */}
                          <Text style={OnPurposeStyles.circleText}>
                            {item.content}
                          </Text>
                        </>
                      )}

                      {/* IMAGE */}
                      {item.type === 'image' && hasImage && (
                        <Image
                          source={item.image}
                          style={OnPurposeStyles.circleImage}
                        />
                      )}
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>

          {/* DOTS */}
          <View style={OnPurposeStyles.dotsContainer}>
            {data.map((_, i) => (
              <View
                key={i}
                style={[
                  OnPurposeStyles.dot,
                  { opacity: index === i ? 1 : 0.3 },
                ]}
              />
            ))}
          </View>

          <View>
            <Text style={OnPurposeStyles.name}>Jannie Perez</Text>
            <Text style={OnPurposeStyles.location}>📍 Downtown, New York</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginVertical: 35 }}
            contentContainerStyle={{ paddingHorizontal: 5 }}
          >
            {[
              { name: 'India', flag: Images.FLAG6 },
              { name: 'Australia', flag: Images.FLAG1 },
              { name: 'Japan', flag: Images.FLAG2 },
              { name: 'Bangladesh', flag: Images.FLAG4 },
              { name: 'Spain', flag: Images.FLAG5 },
            ].map((c, i) => (
              <View key={i} style={OnPurposeStyles.countryItem}>
                <Image source={c.flag} style={OnPurposeStyles.flag} />
                <Text style={OnPurposeStyles.countryText}>{c.name}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={OnPurposeStyles.followBtn}>
            <Text style={OnPurposeStyles.followText}>Follow Leaders</Text>
          </View>

          <View style={OnPurposeStyles.actionsRow}>
            <View style={OnPurposeStyles.actionItem}>
              <Image source={Images.NOTES} style={OnPurposeStyles.actionIcon} />
              <Text style={OnPurposeStyles.actionText}>Send notes</Text>
            </View>

            <View style={OnPurposeStyles.actionItem}>
              <Image
                source={Images.NOMINATE}
                style={OnPurposeStyles.actionIcon}
              />
              <Text style={OnPurposeStyles.actionText}>Nominate</Text>
            </View>

            <View style={OnPurposeStyles.actionItem}>
              <Image source={Images.IDEAS} style={OnPurposeStyles.actionIcon} />
              <Text style={OnPurposeStyles.actionText}>Good Idea</Text>
            </View>
          </View>
          <LinearGradient
            colors={['#1690E6', '#73EAED']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={OnPurposeStyles.linearGradient}
          >
            <View style={OnPurposeStyles.infoCardInner}>
              <Text style={OnPurposeStyles.sectionTitle}>Practices</Text>
              <View style={OnPurposeStyles.tagRow}>
                <Text style={OnPurposeStyles.tag}>Meditation 🧘</Text>
                <Text style={OnPurposeStyles.tag}>Laughing 😂</Text>
              </View>

              <Text style={OnPurposeStyles.sectionTitle}>Interests</Text>
              <View style={OnPurposeStyles.tagRow}>
                <Text style={OnPurposeStyles.tag}>Dancing 💃</Text>
                <Text style={OnPurposeStyles.tag}>Anything Art 🎨</Text>
              </View>

              <Text style={OnPurposeStyles.sectionTitle}>Social Issues</Text>
              <View style={OnPurposeStyles.tagRow}>
                <Text style={OnPurposeStyles.tag}>Global Warming 🌍</Text>
                <Text style={OnPurposeStyles.tag}>Human Rights ✊</Text>
              </View>

              <Text style={OnPurposeStyles.sectionTitle}>Countries</Text>
              <View style={OnPurposeStyles.countryRow}>
                <Image
                  source={Images.FLAG6}
                  style={OnPurposeStyles.flagSmall}
                />
                <Image
                  source={Images.FLAG1}
                  style={OnPurposeStyles.flagSmall}
                />
              </View>

              <Text style={OnPurposeStyles.sectionTitle}>Location</Text>
              <Text style={OnPurposeStyles.infoText}>Manhattan, New York</Text>

              <Text style={OnPurposeStyles.sectionTitle}>Education</Text>
              <Text style={OnPurposeStyles.infoText}>New York University</Text>

              <Text style={OnPurposeStyles.sectionTitle}>Career</Text>
              <Text style={OnPurposeStyles.infoText}>
                Singer, Universal Music
              </Text>

              {/* STATS */}
              <View style={OnPurposeStyles.statsRow}>
                <View style={OnPurposeStyles.statBox}>
                  <Image
                    source={Images.HEART}
                    style={OnPurposeStyles.statIconMind}
                  />
                  <Text style={OnPurposeStyles.statLabel}>Mindfulness</Text>
                  <Text style={OnPurposeStyles.statValue}>100</Text>
                </View>

                <View style={OnPurposeStyles.statBox}>
                  <Image
                    source={Images.MIND}
                    style={OnPurposeStyles.statIcon}
                  />
                  <Text style={OnPurposeStyles.statLabel}>Meet People</Text>
                  <Text style={OnPurposeStyles.statValue}>22</Text>
                </View>

                <View style={OnPurposeStyles.statBox}>
                  <Image
                    source={Images.SOCIALIMPACTS}
                    style={OnPurposeStyles.statIcon}
                  />
                  <Text style={OnPurposeStyles.statLabels}>Social Impact</Text>
                  <Text style={OnPurposeStyles.statValue}>50</Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
      <Modal
        visible={drawerOpen}
        transparent
        animationType="none"
        statusBarTranslucent
      >
        <AppDrawer onClose={() => setDrawerOpen(false)} />
      </Modal>
    </Layout>
  );
};

export default OnPurposeScreen;
