import React from "react";
import { Text, StyleSheet,View,TouchableOpacity,ImageBackground } from "react-native";

export const Fix = ({item,navigation, setScore}) =>
{
    return (
      <View>
      <ImageBackground style = {{flex: 1, backgroundColor: 'gray'}} source={ require('../img/ball.jpg') } >
        
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Info',{item,setScore})}>
        <View>     
         <View style = {style.box}>    
            <Text style={{textAlign:'left',fontSize: 30, color : 'white'}}>{item.team1}</Text>
            <Text style={{textAlign:'center', color:'red',fontSize: 30}}>Vs</Text>
            <Text style={{textAlign:'right',fontSize: 30, color : 'white'}}>{item.team2}</Text>
        </View>
        <View style = {style.koef}>
            <Text style ={{backgroundColor:'green', flex : 1,textAlign: 'center'}}>{item.x1}</Text>
            <Text style ={{backgroundColor:'orange', color: 'black', flex : 1,textAlign: 'center'}}>{item.x2}</Text>
            <Text style ={{backgroundColor:'green', flex : 1, textAlign: 'center'}}>{item.x3}</Text>
        </View> 
        </View>
        </TouchableOpacity>
        </View>
   
    </ImageBackground>
</View>
  )

}

const style = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
      },
    box : {
        opacity: 1,
    
    },
    teamsbox:{
       fontSize: 30
    },
    koef:{
        opacity: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})