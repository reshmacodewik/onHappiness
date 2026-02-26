import React from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './style/RsvpModal.styles';
import Images from '../const/imgUrl';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const RsvpModal: React.FC<Props> = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          {/* Close */}
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>

          {/* Header */}
          <Text style={styles.rsvp}>RSVP</Text>
          <Text style={styles.title}>Peace Walk</Text>
            <View style={styles.leftdivider} />
          <View style={styles.seatBadge}>
          
            <Text style={styles.seatText}>100 seats left</Text>
          </View>
          <View style={styles.rightdivider} />
          <LinearGradient
            colors={['#1690E6', '#73EAED']}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={styles.linearGradient}
          >
            <View style={styles.Hostmaincard}>
              <View style={styles.hostCard}>
                <Image source={Images.USER3} style={styles.hostImage} />
                <View>
                  <Text style={styles.hostedBy}>Hosted by</Text>
                  <Text style={styles.hostName}>Robert Downey Jr.</Text>
                </View>
              </View>

              <View style={styles.divider} />
              <Text style={styles.label}>WHEN</Text>
              <Text style={styles.value}>
                Friday, December 5{'\n'}7:00 PM EST
              </Text>
              <View style={styles.divider} />

              <Text style={styles.label}>WHERE</Text>
              <Text style={styles.value}>Midtown{'\n'}New York, NY</Text>
              <View style={styles.divider} />
              <Text style={styles.note}>After RSVP accepted address sent</Text>
            </View>
          </LinearGradient>
          {/* Attending */}
          <Text style={styles.attending}>Attending</Text>

          <View style={styles.avatarRow}>
            {[Images.USER3, Images.USER4, Images.USER5].map((img, i) => (
              <Image key={i} source={img} style={styles.avatar} />
            ))}
          </View>

          {/* Join */}
          <TouchableOpacity activeOpacity={0.8}>
            <LinearGradient
              colors={['#1690E6', '#73EAED']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.joinBorder}
            >
              <View style={styles.joinInner}>
                <Text style={styles.joinText}>Join</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default RsvpModal;
