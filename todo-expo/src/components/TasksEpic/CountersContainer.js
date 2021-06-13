import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Counter from '../_Shared/Counter'



function CounterContainer({nbTasks, nbTasksCompleted}){



    return(
        <View style={styles.container}>
            <Counter nb={nbTasks} title='Tâches créées'></Counter>
            <Counter nb={nbTasksCompleted} title='Tâches complétées'></Counter>
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
})

export default CounterContainer;