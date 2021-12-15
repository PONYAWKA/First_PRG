import React, { useReducer, useState } from "react";
import { View,Text,FlatList, Alert, StyleSheet, TouchableOpacity} from "react-native";
import { Bet_component } from "./Bet_component";
import { Fix } from "./Fix";

export const main_page = ({navigation}) =>
{
    
        const [BetList, setBetList] = useState([
            {team1: 'Барселона', team2: 'Челси',
            teamImg1:'uri1', teamImg2:'uri2', 
            x1:'2.32', x2:'3.28', x3:'1.73',
            discr:'В 1255 году неизвестный писец Карл закончил копию Вульгаты от имени декана Гамбургского собора Бертольда. Это вытекает из нижнего индекса в стихотворной форме, который содержится во всех трех томах. Неизвестно, кто создал иллюстрации', 
            id: Math.random().toString(),
            date: '22.08.2048'
            },
            {team1: 'Динамо Минск', team2: 'ЦСК',
            teamImg1:'uri1', teamImg2:'uri2', 
            x1:'2.98', x2:'4', x3:'1.98',
            discr:'Для размещения здания Нового театра рассматривались различные участки на окружающем город променаде, при этом городская комиссия рекомендовала площадь нем. Königsplatz к югу от исторического центра города; и лишь благодаря настойчивой позиции Лангханса, стремившегося максимально эффектно разместить здание в структуре города, под застройку была выбрана южная оконечность так называемого Английского или Верхнего парка Дауте с искусственным холмом нем. Schneckenberg, который, однако, пришлось сравнять с землёй.', 
            id: Math.random().toString(),
            date: '12.12.2012'
            },
            {team1: 'Реал Сосейдат', team2: 'Ювентус',
            teamImg1:'uri1', teamImg2:'uri2', 
            x1:'3.95', x2:'4.34', x3:'1.65',
            discr:'Такова — река в Томском районе Томской области России. Устье реки находится в 29 км по левому берегу реки Басандайка, возле деревни Вороново. Длина реки составляет 10 км Река протекает через деревню Белоусово, где принимает безымянный приток, на котором сооружены две дамбы. Через верхнюю по течению дамбу проходит асфальтированная дорога 69-Н9. Пруд, образованный нижней дамбой, используется для купания и хозяйственных целей', 
            id: Math.random().toString(),
            date: '10.11.2043'
            },
            {team1: 'Айнтрахт', team2: 'Норвич',
            teamImg1:'uri1', teamImg2:'uri2', 
            x1:'1.78', x2:'2.35', x3:'1.89',
            discr:'Родился 1 сентября[2] в Вышнем Волочке Калининской области. Живёт в деревне Простоквашино. По его собственным словам, в школьные годы курил на переменах и окончил школу с «тройками». Работает в простоквашинском почтовом отделении. На момент первого появления в повести описан как мужчина «лет пятидесяти с хвостиком». Обладает довольно вредным и занудным характером, корыстолюбивый, умный и хитрый: «характер нордический, в связях, порочащих его, замечен не был». Склонен к формализму, любопытен и не одобряет инициатив Дяди Фёдора и его друзей, но вместе с тем достаточно добрый и по-деревенски наивный, любит рассказывать истории и участвует в жизни простоквашинцев. Дружен с Дядей Фёдором, Шариком и Матроскиным. Имеет сестру Акулину (в книгах не появляется) и пса Каштана.', 
            id: Math.random().toString(),
            date: '11.11.2023'
            }, 
            {team1: 'Россия', team2: 'США',
            teamImg1:'uri1', teamImg2:'uri2', 
            x1:'100', x2:'452', x3:'133',
            discr:'42', 
            id: Math.random().toString(),
            date: '08.01.2054'
            },
        ])

        const [callBack,setcallBack] = useState({score : ' ',lov_name : ' ',full_name: ' ',match_data : ' '})
        const [isBetShow, setisBetShow] = useState(false)
        const showBet = () =>
        {
            if(isBetShow)
            {
                setTimeout(() => {
                    setisBetShow(false)
                }, 5000);
                return(
                    <TouchableOpacity onPress={() => setisBetShow(false)}>
                <View>
                        <View style = {{backgroundColor : 'green'}}>
                        <View>
                            <Text style = {style.BetText}>Ставка на {callBack.lov_name} в игре "{callBack.full_name}" Успешна</Text>
                            <Text style = {style.BetText}>Дата провидения игры: {callBack.match_data}</Text>
                            <Text style = {style.BetText}>Ожидаемый выигрыш: {callBack.score.toFixed(2)}$</Text>
                            
                        </View>


                        </View>
                </View>
                </TouchableOpacity>
            )}else{
             
            }
        
            
        }
        const setScore = ({score,name,full_name,match_data}) =>
        {
            setcallBack({score, lov_name: name,full_name,match_data})
            setisBetShow(true)
            //Alert.alert(props.teamName.toString(), "Ваш возможный выигрыш " + parseInt(props.score) + " рублей")
        }
    
    return (
        <View>
          <View>
              {showBet()}
          </View>
                <FlatList
                data = {BetList}
                renderItem={({item}) => (<Fix item={item} navigation={navigation} setScore = {setScore}/>)}
                />
           
        </View>
    )
}

const style = StyleSheet.create({
    BetText: {
        textAlign: 'center'
    }
})