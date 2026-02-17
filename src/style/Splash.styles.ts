import { StyleSheet } from 'react-native';
import { moderateScale, moderateScaleHeight } from '../utils/scale';
import { COLORS } from '../theme';

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
     width: moderateScale(280),
    height: moderateScale(60),
    resizeMode: 'contain',
  },
  centerWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(24),
  },

  welcome: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: moderateScale(13),
    letterSpacing: 2,
    marginBottom: moderateScale(8),
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
});

export default styles;
