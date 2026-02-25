import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from '../../style/styles';
import OnPurposeStyles from '../../style/OnPurpose.styles';
import HomeHeader from '../../components/HomeHeader';
import Layout from '../../layout';
import Images from '../../const/imgUrl';
import AppDrawer from '../../components/AppDrawer';

const { width } = Dimensions.get('window');

const data = [
  { id: '1', title: 'Gratitude', emoji: '💖' },
  { id: '2', title: 'Nature', emoji: '🌿' },
  { id: '3', title: 'Meditation', emoji: '🧘‍♂️' },
  { id: '4', title: 'Routine', emoji: '⏰' },
  { id: '5', title: 'Movements', emoji: '🏃‍♂️' },
  { id: '6', title: 'Laughing', emoji: '😂' },
  { id: '7', title: 'Cooking', emoji: '👨‍🍳' },
  { id: '8', title: 'Music', emoji: '🎸' },
  { id: '9', title: 'Writing', emoji: '✍️' },
  { id: '10', title: 'Goals', emoji: '🎯' },
  { id: '11', title: 'Positivity', emoji: '🌈' },
  { id: '12', title: 'Chakras', emoji: '🧘' },
  { id: '13', title: 'Yoga', emoji: '🧘‍♀️' },
  { id: '14', title: 'Grounding', emoji: '🏞️' },
  { id: '15', title: 'Body Scan', emoji: '🧍' },
  { id: '16', title: 'Self-Compassion', emoji: '❤️' },
];

const days = ['M', 'T', 'W', 'Th', 'Fri', 'Sat', 'Sun'];

interface CarouselItem {
  id: number;
  type: 'text' | 'image';
  content?: string;
  image?: any;
  bgImage?: any;

  event?: {
    title: string;
    time: string;
    seats: number;
  };
}

const datas: CarouselItem[] = [
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
    event: {
      title: 'Soccer Game',
      time: '5/1 @ 5:00 PM (EST)',
      seats: 8,
    },
  },
  {
    id: 3,
    type: 'image',
    image: require('../../assets/images/user2.png'),
      event: {
      title: 'Soccer Game',
      time: '5/1 @ 5:00 PM (EST)',
      seats: 8,
    },
  },
];
const users = [
  { id: 1, image: Images.USER3 },
  { id: 2, image: Images.USER4 },
  { id: 3, image: Images.USER5 },
  { id: 4, image: Images.USER3 },
  { id: 5, image: Images.USER4 },
];

export default function MeetPeopleScreen() {
  const [selected, setSelected] = useState<string[]>([]);
  const [step, setStep] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerOpens, setDrawerOpens] = useState(false);
  const scrollRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [activeDay, setActiveDay] = useState(4);
  const toggle = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id],
    );
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.round(e.nativeEvent.contentOffset.x / width);
    setIndex(slide);
  };

  const renderItem = ({ item }: any) => {
    const active = selected.includes(item.id);

    if (active) {
      return (
        <LinearGradient
          colors={['#1690E6', '#73EAED']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.linearGradient}
        >
          <TouchableOpacity
            style={styles.activeInner}
            onPress={() => toggle(item.id)}
          >
            <Text style={styles.cardText}>
              {item.title} {item.emoji}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      );
    }

    return (
      <TouchableOpacity style={styles.card} onPress={() => toggle(item.id)}>
        <Text style={styles.cardText}>
          {item.title} {item.emoji}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Layout fullScreen>
      <View style={styles.bg}>
        {step === 1 && (
          <View style={{ flex: 1, marginTop: 50 }}>
            <ScrollView
              contentContainerStyle={{ paddingBottom: 30 }}
              showsVerticalScrollIndicator={false}
            >
              <HomeHeader
                centerText="Meet People"
                showAddBtn={false}
                onMenuPress={() => setDrawerOpens(true)}
              />

              <View style={[styles.innercontainer]}>
                <View style={styles.headerRow}>
                  <Text style={styles.header}>Select Category</Text>

                  <LinearGradient
                    colors={['rgba(183,253,255,1)', 'rgba(172,194,246,1)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.badge}
                  >
                    <Text style={styles.badgeText}>
                      {selected.length} Selected
                    </Text>
                  </LinearGradient>
                </View>

                <Text style={styles.subtitle}>
                  Select your favorite practices
                </Text>
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={i => i.id}
                  numColumns={2}
                  columnWrapperStyle={styles.row}
                  scrollEnabled={false}
                />

                <TouchableOpacity
                  style={styles.cta}
                  onPress={() => {
                    if (selected.length > 0) setStep(2);
                  }}
                >
                  <Text style={styles.ctaText}>
                    {selected.length > 0 ? 'Next' : 'Select'}
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
            <Modal
              visible={drawerOpens}
              transparent
              animationType="none"
              statusBarTranslucent
            >
              <AppDrawer onClose={() => setDrawerOpens(false)} />
            </Modal>
          </View>
        )}

        {step === 2 && (
          <Layout fullScreen>
            <ScrollView
              style={{ flex: 1, backgroundColor: '#000' }}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 120 }}
            >
              <View style={OnPurposeStyles.container}>
                <HomeHeader onMenuPress={() => setDrawerOpen(true)} />
                <Text style={OnPurposeStyles.leaderTitle}>
                  Leaders To Follow
                </Text>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={OnPurposeStyles.usersScroll}
                  contentContainerStyle={{ paddingHorizontal: 20 }}
                >
                  {users.map(user => (
                    <View key={user.id} style={OnPurposeStyles.userItem}>
                      <Image
                        source={user.image}
                        style={OnPurposeStyles.userImage}
                      />
                    </View>
                  ))}
                </ScrollView>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={OnPurposeStyles.pillsContainer}
                >
                  <TouchableOpacity style={OnPurposeStyles.pillActive}>
                    <Text style={OnPurposeStyles.pillActiveText}>
                      Meditation
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={OnPurposeStyles.pill}>
                    <Text style={OnPurposeStyles.pillText}>Movement</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={OnPurposeStyles.pill}>
                    <Text style={OnPurposeStyles.pillText}>Gratitude</Text>
                  </TouchableOpacity>
                </ScrollView>
               
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={OnPurposeStyles.daysContainer}
                  >
                    {days.map((day, index) => {
                      const isActive = index === activeDay;

                      return (
                        <TouchableOpacity
                          key={index}
                          style={[
                            OnPurposeStyles.dayItem,
                            isActive && OnPurposeStyles.activeDayItem,
                          ]}
                          onPress={() => setActiveDay(index)}
                        >
                          <Text
                            style={[
                              OnPurposeStyles.dayText,
                              isActive && OnPurposeStyles.activeDayText,
                            ]}
                          >
                            {day}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </ScrollView>
              
                <View style={OnPurposeStyles.carouselWrapper}>
                  <ScrollView
                    ref={scrollRef}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={handleScroll}
                  >
                    {datas.map(item => {
                      const hasImage = item.type === 'image' && item.image;

                      return (
                        <View
                          key={item.id}
                          style={{ width, alignItems: 'center' }}
                        >
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

                            {item.event && (
                              <View style={OnPurposeStyles.eventCard}>
                                <Text style={OnPurposeStyles.eventTitle}>
                                  Upcoming Event
                                </Text>

                                <Text style={OnPurposeStyles.eventName}>
                                  {item.event.title}
                                </Text>

                                <Text style={OnPurposeStyles.eventTime}>
                                  {item.event.time}
                                </Text>

                                <View style={OnPurposeStyles.rsvpBtn}>
                                  <Text style={OnPurposeStyles.rsvpText}>
                                    RSVP | {item.event.seats} Seats
                                  </Text>
                                </View>
                              </View>
                            )}
                          </View>
                        </View>
                      );
                    })}
                  </ScrollView>
                </View>

                <View style={OnPurposeStyles.dotsContainer}>
                  {datas.map((_, i) => (
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
                  <Text style={OnPurposeStyles.location}>
                    📍 Downtown, New York
                  </Text>
                </View>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{ marginVertical: 35 }}
                  contentContainerStyle={{ paddingHorizontal: 50 }}
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
                    <Image
                      source={Images.NOTES}
                      style={OnPurposeStyles.actionIcon}
                    />
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
                    <Image
                      source={Images.IDEAS}
                      style={OnPurposeStyles.actionIcon}
                    />
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

                    <Text style={OnPurposeStyles.sectionTitle}>
                      Social Issues
                    </Text>
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
                    <Text style={OnPurposeStyles.infoText}>
                      Manhattan, New York
                    </Text>

                    <Text style={OnPurposeStyles.sectionTitle}>Education</Text>
                    <Text style={OnPurposeStyles.infoText}>
                      New York University
                    </Text>

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
                        <Text style={OnPurposeStyles.statLabel}>
                          Mindfulness
                        </Text>
                        <Text style={OnPurposeStyles.statValue}>100</Text>
                      </View>

                      <View style={OnPurposeStyles.statBox}>
                        <Image
                          source={Images.MIND}
                          style={OnPurposeStyles.statIcon}
                        />
                        <Text style={OnPurposeStyles.statLabel}>
                          Meet People
                        </Text>
                        <Text style={OnPurposeStyles.statValue}>22</Text>
                      </View>

                      <View style={OnPurposeStyles.statBox}>
                        <Image
                          source={Images.SOCIALIMPACTS}
                          style={OnPurposeStyles.statIcon}
                        />
                        <Text style={OnPurposeStyles.statLabels}>
                          Social Impact
                        </Text>
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
        )}
      </View>
    </Layout>
  );
}
