import React, {useState} from "react";
import { View,
   Text, 
   StyleSheet,
   TextInput,
   ImageBackground,
    Alert,
    ScrollView,
  Picker} from "react-native";
  

export const info_page = ({route,navigation}) =>
{
    const [betValue,setbet] = useState('');
    const [BetX, setBetX] = useState({x: route.params.item.x1, name: route.params.item.team1})
    let obj
    const make_bet = () =>
    {    
     
        if((BetX.x * parseFloat(betValue)) === NaN)
          {
            Alert.alert('Ставка не принята')
            return 0;
          }      
        if (betValue.trim())
      {
          const cs =  parseFloat(BetX.x) * parseFloat(betValue)
        console.log(BetX.x);
        route.params.setScore({
          score : cs,
          name : BetX.name,
          full_name : route.params.item.team1 + ' Против ' + route.params.item.team2,
          match_data : route.params.item.date})
       navigation.goBack()
      }else
       

        Alert.alert("Не оставляйте поля пустыми!")
      
      }
    return (
        
 <View style = {{flex: 1}}>
    <ScrollView style = {{flex: 1}}>
   <ImageBackground style = {{flex: 1}} source={ require('../img/ball.jpg') } >
        <View style = {style.box}>    
            <Text style={{textAlign:'left',fontSize: 30,color : 'white'} }>{route.params.item.team1}</Text>
            <Text style={{textAlign:'center', color:'red',fontSize: 30}}>Vs</Text>
            <Text style={{textAlign:'right',fontSize: 30,color : 'white'}}>{route.params.item.team2}</Text>
        </View> 
        </ImageBackground>
     
         <Text style ={style.dics}>
            {route.params.item.discr}
         </Text>
       </ScrollView>

         <Text style = {{textAlign: 'center', paddingTop : 10, fontSize : 15}}>Дата матча</Text> 
         <Text style = {{textAlign: 'center', color : 'red', fontSize: 20}}>{route.params.item.date}</Text>
         <View style = {{justifyContent: 'flex-end', fontSize: 20, flexDirection: 'column' }}>
         
         <Picker
         value = {BetX}
         onValueChange={(itemValue, itemIndex) => {setBetX(itemValue)}}
         >
            <Picker.Item 
            label={route.params.item.team1 + "    Коэф:" + route.params.item.x1}  
            value = {{x: route.params.item.x1, name: route.params.item.team1}}
            />
            <Picker.Item 
            label={"Ничья    Коэф:" + route.params.item.x2} 
            value = {{x:route.params.item.x2, name: 'Ничья'}}
            />
            <Picker.Item 
            label={route.params.item.team2 + "    Коэф:" + route.params.item.x3}
            value =  {{x: route.params.item.x3, name: route.params.item.team2}}
             />
         </Picker>
                  
       {/* <View style = {style.koef}>
            <Text onPress={() =>  make_bet({x :route.params.item.x1, name : route.params.item.team1})}  style ={{backgroundColor:'green', flex : 1,textAlign: 'center', fontSize: 20,}}>{route.params.item.x1}</Text>
            <Text onPress={() => make_bet({x :route.params.item.x2, name : 'Ничью'})} style ={{backgroundColor:'orange', color: 'black', flex : 1,textAlign: 'center',fontSize: 20}}>{route.params.item.x2}</Text>
            <Text onPress={() => make_bet({x :route.params.item.x2, name : route.params.item.team2})} style ={{backgroundColor:'green', flex : 1, textAlign: 'center',fontSize: 20}}>{route.params.item.x3}</Text>
        </View>  */}
    </View>

         <TextInput 
         placeholder="Ведите сумму ставки"
         keyboardType="number-pad"
         style = {{fontSize: 18}}
         onChangeText={setbet}
         value={betValue}
         />
    <Text
     style = {{textAlign : 'center', backgroundColor: 'gold', fontSize: 20}}
     onPress={() => make_bet()}
     >
      Поставить
    </Text>
    

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
        justifyContent: "center",
        height: 500
      },
    box : {
      flex : 1
    },
    teamsbox:{
       fontSize: 30
    },
    koef:{
        flexDirection: 'row',
        height : 30,
    }
})