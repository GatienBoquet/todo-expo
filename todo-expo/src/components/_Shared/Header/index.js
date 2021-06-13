import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const months = ["Janv", "Fevr", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];


export default function Header(){


    const date = new Date()

    return(
    <View style={Styles.container}>
        <Text style={Styles.title}>{days[date.getDay()] + ", "}
            <Text style={Styles.reste}>{date.getDate() + " " + months[date.getMonth()]}</Text>
        </Text>
        
    </View>  
    )
}

const Styles = StyleSheet.create({
    container:{
        marginTop: 20, 
        marginBottom: 20
    },
    title: {
        fontSize: 25,
        fontWeight: "bold"
    },
    reste: {
        fontWeight: "normal"
    }
})