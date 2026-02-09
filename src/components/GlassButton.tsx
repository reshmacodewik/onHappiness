import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import GlassButtonStyles from './style/GlassButton.styles';
import {
  isLiquidGlassSupported,
  LiquidGlassView,
} from '@callstack/liquid-glass';

type GlassButtonProps = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
};

const GlassButton: React.FC<GlassButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
      <LiquidGlassView
        style={[
          GlassButtonStyles.container,
          !isLiquidGlassSupported && {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        ]}
        interactive={true}
        effect="clear"
       tintColor="rgba(255,255,255,0.45)"
        colorScheme={'light'}
  
      >
        <Text style={GlassButtonStyles.text}>{title}</Text>
      </LiquidGlassView>
    </TouchableOpacity>
  );
};

export default GlassButton;
