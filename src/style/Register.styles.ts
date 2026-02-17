import { StyleSheet } from 'react-native';
import { moderateScale, moderateScaleHeight } from '../utils/scale';
import { COLORS } from '../theme';

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateScaleHeight(110),
    paddingBottom: moderateScaleHeight(60),
  },
  contentWrap: {
    minHeight: '100%',
    justifyContent: 'space-between', // 🔥 KEY LINE
  },
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateScaleHeight(120), // 👈 FIXED TOP SPACE
    paddingBottom: moderateScaleHeight(40),
  },

  title: {
    color: COLORS.white,
    fontSize: moderateScale(36),
    fontWeight: '700',
    marginBottom: moderateScale(10),
  },

  subtitle: {
    color: COLORS.white,
    fontSize: moderateScale(14),
    marginBottom: moderateScaleHeight(28),
  },

  label: {
    color: COLORS.white,
    fontSize: moderateScale(13),
    marginBottom: moderateScale(10),
  },

  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScale(20),
  },

  checkbox: {
    width: moderateScale(18),
    height: moderateScale(18),
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.white,
    marginRight: moderateScale(10),
  },

  checked: {
    backgroundColor: COLORS.white,
  },

  checkboxText: {
    color: COLORS.white,
    fontSize: moderateScale(12),
  },

  nextBtn: {
    alignSelf: 'flex-end',
    backgroundColor: COLORS.white,
    paddingHorizontal: moderateScale(26),
    paddingVertical: moderateScale(15),
    borderRadius: 30,
    marginTop: moderateScaleHeight(24),
  },

  nextText: {
    color: COLORS.black,
    fontSize: moderateScale(14),
    fontWeight: '600',
  },

  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScaleHeight(30),
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },

  or: {
    color: COLORS.white,
    marginHorizontal: moderateScale(12),
    fontSize: moderateScale(12),
  },

  footer: {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.7)',
    fontSize: moderateScale(13),
  },

  link: {
    color: COLORS.white,
    fontWeight: '600',
  },
  createAccount: {
    color: COLORS.white,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  socialDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScaleHeight(30),
  },

  socialLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },

  socialPill: {
    paddingHorizontal: moderateScale(18),
    paddingVertical: moderateScale(8),
    backgroundColor: COLORS.white,
    borderRadius: 20,
    marginHorizontal: moderateScale(10),
  },

  socialPillText: {
    color: COLORS.black,
    fontSize: moderateScale(12),
    fontWeight: '600',
  },

  socialRow: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    marginBottom: moderateScaleHeight(24),
  },

  socialGradientBorder: {
    padding: 1, // border thickness
    borderRadius: 14,
    backgroundColor: 'white',
  },

  socialBox: {
    paddingVertical: moderateScale(14),
    paddingHorizontal: moderateScale(18),
    borderRadius: 12,
    backgroundColor: '#0A0A0A', // ✅ solid (NO rgba, NO red)
    justifyContent: 'center',
    alignItems: 'center',
  },

  socialImage: {
    width: moderateScale(22),
    height: moderateScale(22),
    resizeMode: 'contain',
  },

  videoCard: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    padding: moderateScale(20),
    alignItems: 'center',
    marginBottom: moderateScaleHeight(30),
    backgroundColor: '#00000000',
  },

  videoIconWrap: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: 35,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: moderateScale(14),
  },

  videoIcon: {
    width: moderateScale(28),
    height: moderateScale(28),
    resizeMode: 'contain',
  },

  videoTitle: {
    color: COLORS.white,
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginBottom: 6,
  },

  videoDesc: {
    color: COLORS.white,
    fontSize: moderateScale(12),
    textAlign: 'center',
    marginBottom: moderateScale(16),
    marginHorizontal: moderateScale(20),
  },

  gradientBorder: {
    height: 44,
    justifyContent: 'center',
    marginRight: 12,
    borderRadius: 30,
    overflow: 'hidden',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    marginTop: 15,
  },
  gradientBordercamera: {
    justifyContent: 'center',
    marginRight: 12,
    borderRadius: 30,
    overflow: 'hidden',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    marginTop: 15,
  },
  button: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 40,
    margin: 1.5,
    borderRadius: 30,
    overflow: 'hidden',
  },

  innerButton: {
    backgroundColor: '#000', // same as card
    borderRadius: 28, // slightly smaller than outer
    paddingVertical: 12,
    paddingHorizontal: 30,
  },

  uploadText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
  },

  linearGradient: {
    height: 150,
    width: 200,
    borderRadius: 20, // <-- Outer Border Radius
  },
  innerContainer: {
    borderRadius: 15, // <-- Inner Border Radius
    flex: 1,
    margin: 5, // <-- Border Width
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#cc2b5e',
    backgroundColor: 'transparent',
  },
  sectionTitle: {
    color: COLORS.white,
    fontSize: moderateScale(14),
    marginBottom: moderateScale(12),
  },
  ButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    tintColor: '#fff',
    color: '#ffff',
  },
  countryRow: {
    flexDirection: 'row',

    justifyContent: 'center',
    gap: moderateScale(6),
    marginBottom: moderateScaleHeight(24),
  },

  countryBox: {
    width: moderateScale(90),
    height: moderateScale(80),
    paddingVertical: moderateScale(14),
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
  },

  countryImage: {
    width: moderateScale(36),
    height: moderateScale(36),
    resizeMode: 'contain',
    marginBottom: moderateScale(0),
  },

  countryText: {
    color: COLORS.white,
    fontSize: moderateScale(12),
    textAlign: 'center',
  },
  uploadDocBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderRadius: 14,
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(14),
    marginBottom: moderateScale(12),
  },

  uploadDocText: {
    color: '#999',
    fontSize: moderateScale(13),
  },

  uploadIcon: {
    width: moderateScale(18),
    height: moderateScale(18),
    resizeMode: 'contain',
  },

  uploadedFile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#C7E6FB',
    borderRadius: 14,
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(14),
    marginBottom: moderateScaleHeight(24),
  },

  uploadedText: {
    color: COLORS.black,
    fontSize: moderateScale(13),
    fontWeight: '500',
  },

  deleteIcon: {
    width: moderateScale(18),
    height: moderateScale(18),
    tintColor: 'red',
  },

  planCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: moderateScaleHeight(16),
    backgroundColor: '#0E0E0E',
    width: '100%',
  },

  uploadBorder: {
    borderRadius: 25,
    padding: 1, // thickness of border
    alignSelf: 'center',
  },

  uploadInner: {
    backgroundColor: '#000', // same as your card background
    borderRadius: 23,
    paddingVertical: 12,
    paddingHorizontal: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },

  planCardActive: {
    backgroundColor: '#111',
    borderRadius: 14,
  },

  planHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.white,
  },

  planTitle: {
    flex: 1,
    color: COLORS.white,
    fontSize: moderateScale(16),
    fontWeight: '600',
  },

  planPrice: {
    color: COLORS.white,
    fontSize: moderateScale(16),
    fontWeight: '700',
  },

  planDesc: {
    marginTop: moderateScaleHeight(10),
    color: COLORS.white,
    fontSize: moderateScale(13),
    lineHeight: 18,
  },

  skipBtn: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 30,
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(28),
  },

  skipText: {
    color: COLORS.white,
    fontSize: moderateScale(14),
    fontWeight: '600',
  },
});

export default styles;
