import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Image, View } from 'react-native';
import OnPurposeScreen from '../screens/Home/OnPurposeScreen';
import Images from '../const/imgUrl';

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
          backgroundColor: 'rgba(241, 233, 233, 1)',
          height: 110,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          overflow: 'hidden',
          position: 'absolute',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 8,
        },
        tabBarIcon: ({ focused }) => {
          let iconSource = null;

          switch (route.name) {
            case 'Home':
              iconSource = Images.HOME;
              break;
            case 'Mindfulness':
              iconSource = Images.MINDFUL;
              break;
            case 'MeetPeople':
              iconSource = Images.MEETPEOPLE;
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
