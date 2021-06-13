import { setStatusBarBackgroundColor } from 'expo-status-bar'
import React from 'react'
import { Text, StyleSheet, TouchableOpacity, Vibration, View } from 'react-native'
import { FAB } from 'react-native-paper';

const FloatingButton = ({toggleForm, isFormOpened}) => {
    return(
/*     <TouchableOpacity onPress={toggleForm} style={styles.container}>
        
{/*         {isFormOpened ? (
        <Text style={styles.title}>X</Text> ) : (<Text style={styles.title}>+</Text>
        )} }*/ 
        <View>
          <FAB
    style={styles.fab}
    color='white'
    icon="plus"
    onPress={toggleForm}
  />
  </View>
    // </TouchableOpacity>
    
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        position: 'relative',
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: '#2ecc71',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        fontSize: 35,
    },
    fab: {
        backgroundColor: '#2ecc71',
        position: 'absolute',
        margin: 15,
        right: -15,
        bottom: 0,
    },
})

export default FloatingButton;