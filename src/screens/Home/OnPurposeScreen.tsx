import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

import Layout from '../../layout';
import OnPurposeStyles from '../../style/OnPurpose.styles';
import HomeHeader from '../../components/HomeHeader';
import Images from '../../const/imgUrl';

const { width } = Dimensions.get('window');
const CIRCLE_SIZE = width * 0.85;

interface CarouselItem {
  id: number;
  type: 'text' | 'image';
  content?: string;
  image?: any;
}

const data: CarouselItem[] = [
  {
    id: 1,
    type: 'text',
    content:
      'Science has shown to create healthy lives and a sense of well-being we can meditate, practice healthy habits, connect socially, and give back to our community.',
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

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setIndex(slideIndex);
  };

  return (
    <Layout fullScreen>
      <View style={OnPurposeStyles.container}>
        <HomeHeader />

        {/* USERS ROW */}
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
            {data.map(item => (
              <View key={item.id} style={{ width, alignItems: 'center' }}>
                {item.type === 'text' ? (
                  <View style={OnPurposeStyles.circle}>
                    <Text style={OnPurposeStyles.circleText}>
                      {item.content}
                    </Text>
                  </View>
                ) : (
                  <Image
                    source={item.image}
                    style={OnPurposeStyles.circleImage}
                  />
                )}
              </View>
            ))}
          </ScrollView>
        </View>

        {/* DOTS */}
        <View style={OnPurposeStyles.dotsContainer}>
          {data.map((_, i) => (
            <View
              key={i}
              style={[OnPurposeStyles.dot, { opacity: index === i ? 1 : 0.3 }]}
            />
          ))}
         
         
        </View>

      <View>
             <Text style={OnPurposeStyles.name}>Jannie Perez</Text>
        <Text style={OnPurposeStyles.location}>📍 Downtown, New York</Text>
          </View>
        
      </View>
    </Layout>
  );
};

export default OnPurposeScreen;
