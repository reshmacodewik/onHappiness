import { StyleSheet } from 'react-native';
import { moderateScale, moderateScaleHeight } from '../utils/scale';
import { COLORS } from '../theme';

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: COLORS.black,
  },

  centerWrap: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(24),
  },
  row: {
    flexDirection: 'row',
  },
  welcome: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: moderateScale(13),
    letterSpacing: 2,
    marginBottom: moderateScale(8),
  },

  logoText: {
    color: COLORS.white,
    fontSize: moderateScale(36),
    fontWeight: '700',
    marginBottom: moderateScale(10),
  },

  tagline: {
    color: COLORS.white,
    fontSize: moderateScale(15),
    lineHeight: moderateScale(22),
    marginBottom: moderateScaleHeight(32),
  },

  forgotWrap: {
    alignItems: 'flex-end',
    marginBottom: moderateScaleHeight(28),
  },
  label: {
    color: COLORS.white,
    fontSize: moderateScale(14),
    marginBottom: 8,
    marginLeft: 4,
  },

  forgotText: {
    color: COLORS.white,
    fontSize: moderateScale(13),
  },

  loginBtn: {
    backgroundColor: COLORS.white,
    height: moderateScale(52),
    borderRadius: moderateScale(26),
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },

  loginText: {
    color: COLORS.black,
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.white,
  },

  orText: {
    color: COLORS.white,
    marginHorizontal: 12,
    fontSize: moderateScale(16),
  },
  footerText: {
    textAlign: 'center',
    color: COLORS.white,
    fontSize: moderateScale(14),
    marginTop: 10,
  },

  createAccount: {
    color: COLORS.white,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

export default styles;
