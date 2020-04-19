import { StyleSheet } from 'react-native';
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  headerText: {
    color: '#737380',
    fontSize: 15
  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  title: {
    color: '#13131a',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 48
  },

  description: {
    color: '#737380',
    fontSize: 16,
    lineHeight: 24
  }
});
