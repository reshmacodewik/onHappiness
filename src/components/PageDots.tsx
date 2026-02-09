import React from 'react';
import { View } from 'react-native';
import PageDotsStyles from './style/PageDots.styles';


type Props = {
  total: number;
  active: number;
};

const PageDots: React.FC<Props> = ({ total, active }) => {
  return (
    <View style={PageDotsStyles.wrap}>
      {Array.from({ length: total }).map((_, i) => (
        <View
          key={i}
          style={[PageDotsStyles.dot, active === i && PageDotsStyles.activeDot]}
        />
      ))}
    </View>
  );
};

export default PageDots;
