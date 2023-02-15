import { StyleSheet } from 'react-native'

const stylesFn = ({ disabled = false }) => {
  let backgroundColor
  let color

  if(disabled) {
    backgroundColor = 'grey'
    color = 'black'
  } else {
    backgroundColor = '#063970'
    color = 'white'
  }

  return StyleSheet.create({
    button: {
      width: 250,
      height: 40,
      borderRadius: 6,
      margin: 10,
      backgroundColor: backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: color,
      fontFamily: 'monospace',
    }
  })
};

export default stylesFn