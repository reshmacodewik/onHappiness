import { StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/scale';

export default StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    marginBottom: moderateScale(16),
  },
  dot: {
    width: moderateScale(6),
    height: moderateScale(6),
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginRight: moderateScale(6),
  },
  activeDot: {
    width: moderateScale(20),
    backgroundColor: '#fff',
  },
});
