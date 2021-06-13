import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


function Counter({nb, title}){
    return(
        <View>
            <Text style={styles.nb}>{nb}</Text>
            <Text style={styles.grey}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25
    },
    nb:{
        fontWeight: 'bold',
        fontSize: 25
    },
    grey:{
        color: 'grey'
    }

})

export default Counter; 