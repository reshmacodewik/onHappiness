import { StyleSheet } from 'react-native';
import { COLORS } from '../theme';
import { moderateScale } from '../utils/scale';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(24),
  },

  icon: {
    width: moderateScale(180),
    height: moderateScale(180),
    resizeMode: 'contain',
    marginBottom: moderateScale(-15),
  },

  title: {
    color: COLORS.white,
    fontSize: moderateScale(26),
    fontWeight: '700',
    marginBottom: moderateScale(10),
  },

  subtitle: {
    color: COLORS.white,
    fontSize: moderateScale(13),
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default styles;
