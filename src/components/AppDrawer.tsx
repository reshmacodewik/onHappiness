import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Images from "../const/imgUrl";
import styles from "../style/AppDrawer.styles";
interface Props {
  onClose: () => void;
}

const AppDrawer: React.FC<Props> = ({ onClose }) => {
  const Divider = () => (
    <LinearGradient
      colors={["transparent", "#38D9FF", "transparent"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.divider}
    />
  );

  const MenuItem = ({ icon, label }: any) => (
    <TouchableOpacity style={styles.menuItem}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.menuText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* CLOSE */}
      <TouchableOpacity onPress={onClose}>
        <Text style={styles.close}>✕</Text>
      </TouchableOpacity>

      <Text style={styles.section}>Interaction</Text>
      <Divider />

      <MenuItem icon={Images.NOTES} label="Send Notes" />
      {/* <MenuItem icon={Images.QUESTION} label="Questions" /> */}
      <MenuItem icon={Images.IDEAS} label="Good Vibes" />
      <MenuItem icon={Images.NOMINATE} label="Nominate" />

      <Text style={styles.section}>Explore & Grow</Text>
      <Divider />

      {/* <MenuItem icon={Images.HEART} label="Practice with mindfulness" />
      <MenuItem icon={Images.SMILE} label="Interests to meet people" />
      <MenuItem icon={Images.GLOBE} label="Social Issues for Social Impact" />
      <MenuItem icon={Images.CALENDAR} label="Events" /> */}

      <Text style={styles.section}>Account & Safety</Text>
      <Divider />

      {/* <MenuItem icon={Images.PROFILE} label="Change Profile" />
      <MenuItem icon={Images.SETTINGS} label="Settings" />
      <MenuItem icon={Images.REPORT} label="Report" />
      <MenuItem icon={Images.BLOCK} label="Block" /> */}
    </View>
  );
};

export default AppDrawer;