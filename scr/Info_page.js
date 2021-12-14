import React, {useState} from "react";
import { View, Text, StyleSheet,TextInput,ImageBackground, Alert} from "react-native";

export const info_page = ({route,navigation}) =>
{
    const [betValue,setbet] = useState('');


    const make_bet = (koe) =>
    {

      if((koe * parseFloat(betValue)) === NaN)
{
  Alert.alert('Ставка не принята')
  return 0;
}      
        if (betValue.trim())
      {

        route.params.setScore(koe * parseFloat(betValue))
        
       navigation.goBack()
       console.log(koe, typeof betValue );
      }else
       

        Alert.alert("Не оставляйте поля пустыми!")
      
      }
    return (
        
 <View style = {{flex: 1}}>
   <ImageBackground style = {{flex: 1}} source={ require('../img/ball.jpg') } >
        <View style = {style.box}>    
            <Text style={{textAlign:'left',fontSize: 30,color : 'white'}}>{route.params.item.team1}</Text>
            <Text style={{textAlign:'center', color:'red',fontSize: 30}}>Vs</Text>
            <Text style={{textAlign:'right',fontSize: 30,color : 'white'}}>{route.params.item.team2}</Text>
        </View> 
        </ImageBackground>
         <Text style ={style.dics}>
            {route.params.item.discr}
         </Text>
         <TextInput 
         placeholder="Ведите сумму ставки"
         keyboardType="number-pad"
         onChangeText={setbet}
         value={betValue}
         />

    <View style = {{justifyContent: 'flex-end', fontSize: 20, flexDirection: 'column' }}>
       <View style = {style.koef}>
            <Text onPress={() => make_bet(route.params.item.x1)} style ={{backgroundColor:'green', flex : 1,textAlign: 'center', fontSize: 20,}}>{route.params.item.x1}</Text>
            <Text onPress={() => make_bet(route.params.item.x2)} style ={{backgroundColor:'orange', color: 'black', flex : 1,textAlign: 'center',fontSize: 20}}>{route.params.item.x2}</Text>
            <Text onPress={() => make_bet(route.params.item.x3)} style ={{backgroundColor:'green', flex : 1, textAlign: 'center',fontSize: 20}}>{route.params.item.x3}</Text>
        </View> 
    </View>

</View>

    )
}
const style = StyleSheet.create({
    dics: {
      textAlign: 'center',  
      fontSize: 15
    },
    bet : {
      paddingStart: 10,

    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
    box : {
    
    },
    teamsbox:{
       fontSize: 30
    },
    koef:{
        flexDirection: 'row',
        height : 30,
    }
})