import { StyleSheet, Dimensions } from 'react-native';
import { moderateScale, moderateScaleHeight } from '../utils/scale';
import { COLORS } from '../theme';

const { width } = Dimensions.get('window');
const CIRCLE_SIZE = width * 0.85;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,

    paddingTop: moderateScaleHeight(60),
  },
  carouselWrapper: {
    height: CIRCLE_SIZE,
    justifyContent: 'flex-start', // 🔥 important
    marginBottom: 40,
  },

  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    marginBottom: 20,

  },

  circleImage: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
  },

  circleText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: moderateScale(15),
    lineHeight: moderateScale(22),
  },

  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  
    marginBottom:200
  },

  dot: {
    width: moderateScale(6),
    height: moderateScale(6),
    borderRadius: moderateScale(3),
    backgroundColor: COLORS.white,
    marginHorizontal: moderateScale(4),
  },

  name: {
    color: COLORS.white,
    fontSize: moderateScale(18),
    marginTop: moderateScaleHeight(20),
    fontWeight: '600',
  },

  location: {
    color: '#aaa',
    marginTop: moderateScaleHeight(5),
    fontSize: moderateScale(13),
  },
  usersScroll: {
    width: '100%',
    marginTop: moderateScaleHeight(10),
    marginBottom: moderateScaleHeight(10),
  },

  userItem: {
    marginRight: moderateScale(15),
    alignItems: 'center',
  },

  userImage: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(35),
    borderWidth: 2,
    borderColor: COLORS.white,
  },
});
