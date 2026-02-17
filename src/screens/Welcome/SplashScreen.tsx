import React, { useEffect } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import Layout from '../../layout/index';
import styles from '../../style/Splash.styles';
import { useNavigation } from '@react-navigation/native';
import Images from '../../const/imgUrl';

const SplashScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Welcome');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout fullScreen>
      <ImageBackground
        source={Images.Login}
        style={styles.bg}
        resizeMode="cover"
      >
        <View style={styles.centerWrap}>
          <Image source={Images.Logo} style={styles.logo} />

          <Text style={styles.tagline}>MEDITATE. CONNECT. IMPACT.</Text>
        </View>
      </ImageBackground>
    </Layout>
  );
};

export default SplashScreen;
