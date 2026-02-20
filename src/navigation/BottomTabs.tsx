import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Image, View } from 'react-native';
import OnPurposeScreen from '../screens/Home/OnPurposeScreen';
import Images from '../const/imgUrl';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

const DummyScreen = ({ title }: { title: string }) => (
  <Text style={{ flex: 1, textAlign: 'center', marginTop: 100 }}>{title}</Text>
);

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          backgroundColor: 'rgba(241,233,233,1)',
          height: 100,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          position: 'absolute',
          overflow: 'hidden',
          marginTop: 20,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 10, // 🔥 moves text closer to icon
        },
        tabBarBackground: () => (
          <View style={{ flex: 1 }}>
            {/* TOP GRADIENT LINE */}
            <LinearGradient
              colors={['#73EAED', '#1690E6']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                height: 3,
                width: '100%',
              }}
            />

            {/* TAB BAR BG */}
            <View style={{ flex: 1, backgroundColor: 'rgba(241,233,233,1)' }} />
          </View>
        ),
        tabBarIcon: ({ focused }) => {
          let iconSource = null;

          switch (route.name) {
            case 'Home':
              iconSource = Images.HOME;
              break;
            case 'Mindfulness':
              iconSource = Images.MEETPEOPLE;
              break;
            case 'MeetPeople':
              iconSource = Images.MINDFUL;
              break;
            case 'SocialImpact':
              iconSource = Images.SOCIALIMPACT;
              break;
          }

          if (!iconSource) return null;

          return (
            <View style={{ marginVertical: 20 }}>
              <Image
                source={iconSource}
                style={{
                  width: 22,
                  height: 22,
                  resizeMode: 'contain',
                  tintColor: focused ? '#2F80ED' : 'rgba(0, 0, 0, 1)',
                  marginTop: 20,
                }}
              />
            </View>
          );
        },
        tabBarActiveTintColor: '#2F80ED',
        tabBarInactiveTintColor: 'rgba(0, 0, 0, 1)',
      })}
    >
      <Tab.Screen name="Home" component={OnPurposeScreen} />
      <Tab.Screen name="Mindfulness">
        {() => <DummyScreen title="Mindfulness" />}
      </Tab.Screen>
      <Tab.Screen name="MeetPeople">
        {() => <DummyScreen title="Meet People" />}
      </Tab.Screen>
      <Tab.Screen name="SocialImpact">
        {() => <DummyScreen title="Social Impact" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabs;
