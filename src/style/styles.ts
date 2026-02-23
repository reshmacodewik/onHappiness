import { StyleSheet } from 'react-native';
import { moderateScale } from '../utils/scale';

export default StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#000',

  },

  container: {
    flex: 1,

  },
  innercontainer: {
    paddingHorizontal: moderateScale(20),
  
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  header: {
    color: '#fff',
    fontSize: moderateScale(24),
    fontFamily: 'OpenSans_Condensed-Bold',
    fontWeight: '700',
  },

  subtitle: {
    color: 'rgba(118, 118, 118, 1)',
    marginTop: -10,
    marginBottom: 20,
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Regular',
  },

  badge: {
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderRadius: 20,
    width: 140,
    height: 60,
  },

  badgeText: {
    color: '#000',
    fontWeight: '600',
    paddingLeft: moderateScale(6),
    fontFamily: 'Poppins-Medium',
  },

  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  card: {
    flex: 1,
    backgroundColor: '#111',
    paddingVertical: 14,
    marginHorizontal: 4,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },

  cardActive: {
    borderColor: '#4EA3FF',
    shadowColor: '#4EA3FF',
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },

  cardText: {
    color: '#fff',
    fontSize: moderateScale(14),
  },
  linearGradient: {
    flex: 1,
    height: 50,
    borderRadius: 16,
    
  },

  activeInner: {
    borderRadius: 16,
    flex: 1,
    margin: 1,
    backgroundColor: '#131313',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cta: {
    marginTop: 25,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: '#fff',
    paddingVertical: 14,
    alignItems: 'center',
    width: '60%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 50,
  },

  ctaText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: moderateScale(16),
  },
});
