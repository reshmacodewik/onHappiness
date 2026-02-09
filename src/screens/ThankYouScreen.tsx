import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Layout from '../layout';
import Images from '../const/imgUrl';
import styles from '../style/ThankYou.styles';


const ThankYouScreen = () => {
  return (
    <Layout fullScreen>
      <View style={styles.container}>
        {/* Icon */}
        <Image source={Images.THANK_YOU} style={styles.icon} />

        {/* Title */}
        <Text style={styles.title}>Thank you</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Your application is submitted we will{'\n'}
          let you know when it is approved!
        </Text>
      </View>
    </Layout>
  );
};

export default ThankYouScreen;

