import { StyleSheet } from 'react-native';
import { moderateScale } from '../utils/scale';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
        marginTop: moderateScale(60),
  },

  title: {
    color: '#fff',
    fontSize: moderateScale(20),
    marginTop: moderateScale(50),
    fontFamily: 'OpenSans_SemiCondensed-Bold',
    textAlign: 'center',
  },

  circleWrapper: {
    marginTop: moderateScale(30),
    width: moderateScale(280),
    height: moderateScale(280),
    borderRadius: moderateScale(150),
    borderWidth: 3,
    borderColor: '#fff',
    overflow: 'hidden',
  },

  circleImage: {
    width: '100%',
    height: '100%',
  },

  uploadBtn: {
    marginTop: moderateScale(25),
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(35),
    borderRadius: moderateScale(25),
  },

  uploadText: {
    color: '#fff',
    fontSize: moderateScale(16),
  },

  optionsRow: {
    flexDirection: 'row',
    marginTop: moderateScale(40),
    justifyContent: 'space-between',
    width: '85%',
  },

  optionCard: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(12),
    backgroundColor: '#1c1c1e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  optionIcon: {
    width: moderateScale(26),
    height: moderateScale(26),
    marginBottom: moderateScale(8),
    resizeMode: 'contain',
  },

  optionText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(18),
  
  },
});