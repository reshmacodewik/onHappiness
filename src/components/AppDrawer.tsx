import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../const/imgUrl';
import styles from '../style/AppDrawer.styles';

const { width } = Dimensions.get('window');

interface Props {
  onClose: () => void;
}

const AppDrawer: React.FC<Props> = ({ onClose }) => {
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 220,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const closeDrawer = () => {
    Animated.parallel([
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 180,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 180,
        useNativeDriver: true,
      }),
    ]).start(onClose);
  };

  const Divider = () => (
    <LinearGradient
      colors={['#38D9FF', '#007AFF', 'transparent']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.divider}
    />
  );

  const MenuItem = ({ icon, label, iconStyle }: any) => (
    <TouchableOpacity style={styles.menuItem}>
      <Image source={icon} style={[styles.icon, iconStyle]} />
      <Text style={styles.menuText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <Animated.View style={[styles.overlay, { opacity: opacityAnim }]}>
      <TouchableOpacity style={styles.backdrop} onPress={closeDrawer} />

      <Animated.View
        style={[styles.drawer, { transform: [{ scale: scaleAnim }] }]}
      >
        <TouchableOpacity onPress={closeDrawer}>
          <Text style={styles.close}>✕</Text>
        </TouchableOpacity>

        <Text style={styles.sectionIN}>Interaction</Text>
        <Divider />

        <MenuItem icon={Images.NOTES} label="Send Notes" />
        <MenuItem
          icon={Images.QUESTION}
          label="Questions"
          iconStyle={styles.questionIcon}
        />
        <MenuItem icon={Images.ZAP} label="Good Vibes" />
        <MenuItem icon={Images.NOMINATE} label="Nominate" />

        <Text style={styles.section}>Explore & Grow</Text>

        <Divider />
        <MenuItem
          icon={Images.HEART}
          label="Practice with mindfulness"
          iconStyle={styles.questionIconheart}
        />
        <MenuItem icon={Images.MIND} label="Interests to meet people" />
        <MenuItem icon={Images.SOCIALIMPACT} label="Social Issues for Social Impact" />
        <MenuItem icon={Images.EVENT} label="Events" iconStyle={styles.questionIcons}/>
        <Text style={styles.section}>Account & Safety</Text>
        <Divider />
         <MenuItem icon={Images.PROFILE} label="Change Profile" />
        <MenuItem icon={Images.SETTING} label="Settings"  iconStyle={styles.questionIcon}/>
        <MenuItem icon={Images.REPORT} label="Report" />
         <MenuItem icon={Images.BLOCK} label="Block"iconStyle={styles.questionIcons} />
      </Animated.View>
    </Animated.View>
  );
};

export default AppDrawer;
