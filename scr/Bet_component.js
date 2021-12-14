import React from "react";
import { View,Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";

export const Bet_component = ({kek, navigation}) =>
{

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('info',kek)}>
        <View>     
         <View style = {style.box}>    
            <Text style={{textAlign:'left',fontSize: 30}}>{kek.team1}</Text>
            <Text style={{textAlign:'center', color:'red',fontSize: 30}}>Vs</Text>
            <Text style={{textAlign:'right',fontSize: 30}}>{kek.team2}</Text>
        </View>
        <View style = {style.koef}>
            <Text style ={{backgroundColor:'red', flex : 1,textAlign: 'center'}}>{kek.x1}</Text>
            <Text style ={{backgroundColor:'orange', color: 'black', flex : 1,textAlign: 'center'}}>{kek.x2}</Text>
        </View> 
        </View>
        </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
      },
    box : {
      backgroundColor: 'gray'
    },
    teamsbox:{
       fontSize: 30
    },
    koef:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})