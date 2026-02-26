import { StyleSheet } from 'react-native';
import { moderateScale } from '../utils/scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: moderateScale(20),
  },
  Scrollcontainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  title: {
    color: '#fff',
    fontSize: moderateScale(20),
    marginTop: moderateScale(10),

    fontFamily: 'OpenSans_Condensed-Bold',
  },

  subtitle: {
    color: '#aaa',
    marginBottom: moderateScale(20),
    fontSize: moderateScale(16),
    fontFamily: 'OpenSans_Condensed-Light',
  },

  inputCard: {
    backgroundColor: '#e6e6e6',
    borderRadius: moderateScale(14),
    padding: moderateScale(18),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: moderateScale(15),
  },

  inputLabel: {
    fontSize: moderateScale(15),
    color: '#000',
  },

  inputValue: {
    fontSize: moderateScale(15),
    color: '#555',
  },

  sectionTitle: {
    color: '#fff',
    fontSize: moderateScale(20),
    marginTop: moderateScale(20),
    marginBottom: moderateScale(10),
  },

  inviteRow: {
    flexDirection: 'row',
    marginBottom: moderateScale(20),
  },

  avatar: {
    width: 74,
    height: 74,
    borderRadius: 42,
    marginRight: 25,
    borderWidth: 2,
    borderColor: '#1690E6',
  },

  inviteBtn: {
    borderWidth: 1.5,
    borderColor: '#1690E6',
    borderRadius: 30,
    paddingVertical: moderateScale(14),
    alignItems: 'center',
    marginHorizontal: moderateScale(80),
    marginTop: moderateScale(40),
  },

  inviteText: {
    color: '#fff',
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  inputText: {
    flex: 1,
    textAlign: 'right',
    color: '#000',
    fontSize: 15,
  },

  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  switch: { borderWidth: 1, borderColor: '#fff', borderRadius: 20 },

  switchLabel: {
    color: '#fff',
    fontSize: 16,
  },

  inviteScroll: {
    paddingVertical: 10,
  },
  toggleContainer: {
    width: 65,
    height: 36,
    borderRadius: 20,
    backgroundColor: '#444',
    justifyContent: 'center',
    paddingHorizontal: 6,
    
  },

  toggleActive: {
    backgroundColor: '#1690E6',
  },

  toggleCircle: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#fff',
    left: 2,
  },

  toggleCircleActive: {
    left: 33,
  },

  toggleText: {
    color: '#fff',
    left: 28,
    fontSize: 16,
    fontWeight: '600',
  },
});
