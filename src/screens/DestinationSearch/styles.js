import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    backgroundColor: 'white',
  },
  textInput: {
    // marginTop: 70,
    fontSize: 20,
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 17,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  iconContainer: {
    backgroundColor: '#e1e1e1',
    padding: 13,
    borderRadius: 10,
    marginRight: 20,
  },
  locationText: {
    fontSize: 16,
  },
});

export default styles;
