import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/scale';

interface LayoutProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  center?: boolean;
  justifyCenter?: boolean;
  alignCenter?: boolean;
  fullScreen?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  style,
  center = false,
  justifyCenter = false,
  alignCenter = false,
  fullScreen = false,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        !fullScreen && {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
        center && styles.centerContent,
        justifyCenter && styles.justifyCenter,
        alignCenter && styles.alignCenter,
        style,
      ]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      {children}
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    flexGrow: 1,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
});

export default Layout;
