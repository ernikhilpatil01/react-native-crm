import { StyleSheet } from 'react-native'

const stylesFn = () => {

  return StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
      fontSize: 40,
      textAlign: 'center',
    },
  });
}

export default stylesFn