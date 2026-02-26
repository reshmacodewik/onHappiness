import { StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/scale';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(30),
  },

  linearGradient: {
    height: 350,
    width: '100%',
    borderRadius: 12,
    marginTop: 30,
  },
  linearGradientt: {
    height: 60,
    width: '55%',
    borderRadius: 30,
  },

  card: {
    backgroundColor: 'rgba(3, 1, 1, 0.6)',
    borderRadius: moderateScale(20),
    padding: moderateScale(20),
    width: 300,
    height: 695,
    borderWidth: 1,
    borderColor: 'rgba(246, 244, 244, 1)',
  },

  closeBtn: {
    position: 'absolute',
    right: 15,
    top: 15,
    zIndex: 10,
  },

  closeText: {
    color: '#fff',
    fontSize: moderateScale(18),
  },

  rsvp: {
    color: '#fff',
    textAlign: 'center',
      fontFamily:'Montserrat-Regular',
       fontSize: moderateScale(16),
  },

  title: {
    color: '#fff',
    fontSize: moderateScale(24),
    textAlign: 'center',
    marginTop: moderateScale(5),
    fontFamily:'Montserrat-SemiBold'
  
  },
  leftdivider: {
    borderLeftWidth: 1,
    borderColor: 'rgba(115, 234, 237, 1)',
  },
  rightdivider: {
    borderRightWidth: 1,
    borderColor: 'rgba(115, 234, 237, 1)',
  },
  seatBadge: {
    alignSelf: 'center',
    marginTop: moderateScale(10),
    backgroundColor: '#c7f7f5',
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(6),
    borderRadius: moderateScale(20),
    borderLeftWidth: 1,
    borderColor: 'rgba(115, 234, 237, 1)',
  },

  seatText: {
    color: '#000',
     fontFamily:'Montserrat-Medium',
    fontSize:moderateScale(12)
  },
  Hostmaincard: {
    flex: 1,
    margin: 2,
    height: 297,
    backgroundColor: 'rgba(96, 95, 95, 0.99)',
    borderRadius: 12,
  },

  hostCard: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    marginTop: moderateScale(20),
    marginHorizontal: moderateScale(15),
    flexDirection: 'row',

    alignItems: 'center',
  },
  divider: {
    marginTop: moderateScale(10),
    marginHorizontal: moderateScale(30),
    borderTopWidth: 1,
    borderColor: 'rgba(179, 179, 179, 1)',
  },
  hostImage: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    marginRight: moderateScale(10),
  },

  hostedBy: {
    color: '#555',
    fontSize: moderateScale(12),
  },

  hostName: {
    fontWeight: '600',
  },

  label: {
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    marginTop: moderateScale(18),
    letterSpacing: 2,
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    textDecorationLine: 'underline',
  },

  value: {
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    marginTop: moderateScale(5),
    lineHeight: moderateScale(20),
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
  },

  note: {
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    fontSize: moderateScale(12),
    marginTop: moderateScale(6),
    fontFamily: 'Montserrat-Regular',
  },

  attending: {
    color: 'rgba(246, 244, 244, 1)',
    textAlign: 'center',
    marginTop: moderateScale(15),
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
  },

  avatarRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: moderateScale(10),
    gap: 20,
  },

  avatar: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(30),
  },

  joinBtn: {
    marginTop: moderateScale(10),
    borderRadius: moderateScale(30),
    backgroundColor: 'rgba(96, 95, 95, 0.99)',
    flex: 1,
    margin: 2,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  joinBorder: {
    height: 52,
    width: '80%',
    borderRadius: 30,
    marginTop: moderateScale(5),
    marginHorizontal: moderateScale(18),
  },

  joinInner: {
    height: 48,
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: 'rgba(96, 95, 95, 0.99)',
    marginHorizontal: moderateScale(2),
    flex: 1,
    margin: 2,
    marginTop: moderateScale(2),
    marginBottom: moderateScale(2),
  },

  joinText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
