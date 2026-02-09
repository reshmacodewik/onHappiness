import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';

import Layout from '../../layout';

import Images from '../../const/imgUrl';
import WelcomeStyles from '../../style/Welcome.styles';
import GlassButton from '../../components/GlassButton';
import { useNavigation } from '@react-navigation/native';


const WelcomeScreen: React.FC = () => {
      const navigation = useNavigation<any>();
  return (
    <Layout fullScreen>
      <ImageBackground
        source={Images.Login}
        style={WelcomeStyles.bg}
        resizeMode="cover">

        <View style={WelcomeStyles.centerWrap}>
          <Text style={WelcomeStyles.welcome}>WELCOME TO</Text>

          <Text style={WelcomeStyles.logoText}>
           <Image source={Images.Logo} style={WelcomeStyles.logo}/> N Happiness
          </Text>

          <Text style={WelcomeStyles.tagline}>MEDITATE. CONNECT. IMPACT.</Text>

          <View style={WelcomeStyles.buttonWrap}>
            <GlassButton title="Login" onPress={() =>navigation.replace('Login')} />
            <GlassButton title="Register" onPress={() => navigation.replace('Register')} />
          </View>
        </View>

      </ImageBackground>
    </Layout>
  );
};

export default WelcomeScreen;
