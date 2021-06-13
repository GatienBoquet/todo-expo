import React from 'react'
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native'

const TaskTitle = ({id, title, completed, onChangeStatus, onDelete}) => {
    return(
        <TouchableOpacity onPress= {() => onChangeStatus(id)}>
            <View style={styles.container} >
                <View style={styles.subContainer}>
                    <Image
                        style={styles.icon}
                        source={completed ? require('../../../assets/outline_check.png'): require('../../../assets/outline_unchecked.png')}
                    />
                    <Text style={[styles.texte, {color: completed ? 'lightgrey': 'black', fontWeight: completed ? 'normal' :'bold'}]}>{title}</Text>
                </View>
                <TouchableOpacity onPress = {() => onDelete(id)}>            
                    <Image
                        style={styles.icon}
                        source={require('../../../assets/outline_delete.png')}
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
        
    },
    subContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    texte:{
        marginLeft: 30,
        color: 'grey',
        fontSize: 20
    },
    icon: {
        width: 30,
        height: 30
    }
})



export default TaskTitle;
