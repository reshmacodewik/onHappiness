import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Images from '../const/imgUrl';

interface Props {
  onMenuPress?: () => void;
  onAddPress?: () => void;
  showLogo?: boolean; // Show logo in center
  centerText?: string; // Show text instead of logo
  showAddBtn?: boolean; // Show add button on right
  showZap?: boolean; // Show zap icon
}

const HomeHeader: React.FC<Props> = ({
  onMenuPress,
  onAddPress,
  showLogo = true,
  centerText,
  showAddBtn = true,
  showZap = true,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 15,
        backgroundColor: '#000',
      }}
    >
      <TouchableOpacity
        style={{ width: 40 }}
        onPress={() => {
          console.log('MENU PRESSED');
          onMenuPress && onMenuPress();
        }}
      >
        <Image
          source={Images.MENU}
          style={{ width: 35, height: 24, resizeMode: 'contain' }}
        />
      </TouchableOpacity>

      <View style={{ flex: 1, alignItems: 'center' }}>
        {centerText ? (
          <Text
            style={{
              color: '#fff',
              fontSize: 30,
              fontFamily: 'OpenSans_SemiCondensed-Bold',
            }}
          >
            {centerText}
          </Text>
        ) : (
          showLogo && (
            <Image
              source={Images.Logo}
              style={{ height: 50, width: 200, }}
            />
          )
        )}
      </View>

      {/* Right */}
      <View
        style={{
          width: 70,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        {showAddBtn && (
          <TouchableOpacity onPress={onAddPress}>
            <Image
              source={Images.ADDBTN}
              style={{ width: 35, height: 26, marginRight: 12 }}
            />
          </TouchableOpacity>
        )}
        {showZap && (
          <Image source={Images.ZAP} style={{ width: 35, height: 24 }} />
        )}
      </View>
    </View>
  );
};

export default HomeHeader;
