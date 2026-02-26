import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'flex-end',
  },

  backdrop: {
    position: 'absolute',
    width: width,
    height: '100%',
  },

  drawer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: width * 0.87, // ⭐ correct size
    backgroundColor: '#000',
    paddingTop: 60,
    paddingHorizontal: 24,
  },

  close: {
    color: '#fff',
    fontSize: 28,
    marginBottom: 20,
  },
 sectionIN: {
    color: 'rgba(96, 95, 95, 0.93)',
    fontSize: 20,
    marginTop: 0,
    marginBottom: 8,
    fontFamily: 'OpenSans_Condensed-Bold',
  },
  section: {
    color: 'rgba(96, 95, 95, 0.93)',
    fontSize: 20,
    marginTop: 8,
    marginBottom: 8,
    fontFamily: 'OpenSans_Condensed-Bold',
  },
  questionIcon: {
    width: 20,
  },
    questionIconheart: {
    width: 23,
    height:20
  },
    questionIcons: {
    width: 23,
    height:28
  },
  divider: {
    height: 2,
    width: '80%',
    marginBottom: 14,
    marginTop: 20,
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },

  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
    marginRight: 16,
  },

  menuText: {
    color: '#EAEAEA',
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    letterSpacing: 0,
    fontWeight: 'bold',
  },
});
