import { StyleSheet } from 'react-native';
import { moderateScale, moderateScaleHeight } from '../utils/scale';
import { COLORS } from '../theme';

export default StyleSheet.create({
  bg: {
    flex: 1,
  },

  centerWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(24),
  },

  welcome: {
    color: COLORS.white,
    fontSize: moderateScale(21),
    marginBottom: moderateScale(8),
    lineHeight: moderateScale(20),
  },
  logo: {
    width: moderateScale(50),
    height: moderateScale(50),
    resizeMode: 'contain',
  },
  logoText: {
    color: COLORS.white,
    fontSize: moderateScale(46),
    fontWeight: '700',
    marginBottom: moderateScale(10),
    lineHeight: moderateScale(31),
 
  },

  logoEmoji: {
    fontSize: moderateScale(28),
  },

  tagline: {
    color: COLORS.white,
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    marginBottom: moderateScaleHeight(40),
  },

  buttonWrap: {
    width: '100%',
    alignItems: 'center',
    gap:14
  },
});
