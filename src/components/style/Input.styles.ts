import { StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/scale';
import { COLORS } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(14),
    height: moderateScale(52),
    marginBottom: moderateScale(16),
  },

  input: {
    flex: 1,
    marginLeft: moderateScale(10),
    fontSize: moderateScale(14),
    color: COLORS.black,
  },
});

export default styles;
