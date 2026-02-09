import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';
import { moderateScale } from '../../utils/scale';

const GlassButtonStyles = StyleSheet.create({
  container: {
    minHeight: 50,
    width: moderateScale(250),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.45)',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,

    // Android
    elevation: 8,
  },

  text: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
    letterSpacing: 0.4,
  },
});

export default GlassButtonStyles;
