import React from 'react'
import {TextInput, StyleSheet} from 'react-native'

const Input = props => {
return <TextInput {...props} style={{...styles.input, ...props.style}} />
}

const styles = StyleSheet.create({
input: {
    height: 30,
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5
}
})

export default Input