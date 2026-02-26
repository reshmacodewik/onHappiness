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
    alignItems: 'center',
  },
  leaderTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    marginLeft: 20,
    alignSelf: 'flex-start',
    fontFamily: 'OpenSans_Condensed-Bold',
  },
  leadersContainer: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  pillsContainer: {
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20),
    marginTop: moderateScaleHeight(12),
    marginBottom: moderateScaleHeight(20),
  },
  pillActive: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#1690E6',
    marginRight: 10,
  },

  pillActiveText: {
    color: '#fff',
    fontWeight: '500',
  },
  pill: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#555',
    marginRight: 10,
  },

  pillText: {
    color: '#aaa',
  },
  carouselWrapper: {
    height: CIRCLE_SIZE,
    justifyContent: 'center', // ⭐ center circle
    alignItems: 'center',
    marginBottom: moderateScaleHeight(10),
  },

  circle: {
    width: 360,
    height: 360,
    borderRadius: 200,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },

  circleImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  eventCard: {
    flex: 1,
    margin: 4,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 14,
    alignItems: 'center',

  },

  eventTitle: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Montserrat-Bold',
  },

  eventName: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 1)',
    marginTop: 2,
    fontFamily: 'Montserrat-Bold',
  },

  eventTime: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.59)',
    fontFamily: 'Montserrat-SemiBold',
    marginVertical: 6,
  },

  rsvpBtn: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 28,
    borderRadius: 8,
    marginTop: 4,
    borderWidth: 1,
    borderColor: 'rgba(124, 251, 236, 1)',
  },

  rsvpText: {
    fontWeight: '600',
    color: '#000',
  },
  circleBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 999,
  },
  circleText: {
    color: '#fff',
    fontSize: moderateScale(15),
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 24,
    fontWeight: '500',
  },

  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: moderateScaleHeight(20),
    marginBottom: moderateScaleHeight(15),
  },

  dot: {
    width: moderateScale(6),
    height: moderateScale(6),
    borderRadius: moderateScale(3),
    backgroundColor: COLORS.white,
    marginHorizontal: moderateScale(4),
    opacity: 0.4,
  },

  name: {
    color: COLORS.white,
    fontSize: moderateScale(18),
    marginTop: moderateScaleHeight(10),
    textAlign: 'center',
    fontWeight: '600',
  },

  location: {
    color: '#aaa',
    marginTop: moderateScaleHeight(4),
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
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 10,
  },

  countryItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },

  flag: {
    width: 48,
    height: 28,
  },

  countryText: {
    color: '#fff',
    fontSize: 11,
    marginTop: 4,
  },

  followBtn: {
    borderWidth: 1.5,
    borderColor: '#00E5FF',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 8,
  },

  followText: {
    color: '#fff',
    fontWeight: '600',
  },

  actionsRow: {
    flexDirection: 'row',
    gap: 25,
    justifyContent: 'center',
    width: '80%',
    marginTop: 20,
  },

  actionItem: {
    alignItems: 'center',
  },

  actionIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  actionText: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 4,
  },

  linearGradient: {
    height: 'auto',
    width: '92%',
    borderRadius: 20,
    marginTop: 30,
  },
  linearGradientt: {
    height: '40%',
     width: '75%',
    borderRadius: 15,
  },
  infoCardInner: {
    borderRadius: 20,
    flex: 1,
    margin: 1,
    backgroundColor: '#131313',
    padding: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    marginTop: 10,
    fontFamily: 'Montserrat-Semibold',
  },

  tagRow: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },

  tag: {
    backgroundColor: '#222',
    color: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 18,
  },

  countryRow: {
    flexDirection: 'row',
    marginTop: 10,
  },

  flagSmall: {
    width: 40,
    height: 26,
    marginRight: 10,
    marginBottom: 18,
  },

  infoText: {
    color: '#ccc',
    marginTop: 4,
    marginBottom: 18,
    fontStyle: 'italic',
    fontSize: 20,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  statBox: {
    backgroundColor: '#1a1a1a',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    width: '30%',
  },

  statIcon: {
    width: 28,
    height: 28,
  },
  statIconMind: {
    width: 32,
    height: 28,
  },
  statLabel: {
    color: '#aaa',
    fontSize: 11,
    marginTop: 4,
  },
  statLabels: {
    color: '#aaa',
    fontSize: 10,
    marginTop: 4,
  },
  statValue: {
    color: '#fff',
    fontWeight: '700',
    marginTop: 2,
  },
  daysWrapper: {
    marginTop: 10,
    marginBottom: 10,
  },

  daysContainer: {
    marginBottom: 20,
  },

  dayItem: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
  },

  dayText: {
    fontSize: 16,
    color: '#aaa',
    fontWeight: '600',
  },

  activeDayItem: {
    backgroundColor: '#0A84FF', // blue highlight
  },

  activeDayText: {
    color: '#fff',
  },
});
