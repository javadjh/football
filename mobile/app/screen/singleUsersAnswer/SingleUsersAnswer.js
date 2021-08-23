import React, {Fragment, useEffect} from "react";
import BackBar from "../../utilityComponent/BackBar";
import ScreenSetup from "../../utilityComponent/ScreenSetup";
import {View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {singleUsersAnswerAction} from "../../stateManager/action/UsersAnswerAction";
import {FlatList} from "react-native";
import {Text} from "react-native";
import {cardStyle, rowStyle, tvMedium} from "../../globalStyle/GlobalStyle";

const SingleUsersAnswer = ({navigation,route})=>{
    const dispatch = useDispatch()
    const singleUsersAnswer = useSelector(state => state.singleUsersAnswer)

    useEffect(()=>{
        getSingle()
    },[])
    const getSingle = async ()=>{
        await dispatch(singleUsersAnswerAction(route.params.id))
    }
    return(
        <ScreenSetup>
            <View style={{flex:1}}>
                <BackBar navigation={navigation} title={"detail"}/>

                <FlatList
                    style={{marginTop:20}}
                    keyExtractor={item => item._id}
                    data={singleUsersAnswer.answers}
                    renderItem={({item})=>(
                        <View style={[cardStyle,rowStyle,{marginHorizontal:10,padding:10,marginVertical:5,backgroundColor: `${item.color}`}]}>
                            <Text style={[tvMedium,{color:"white",backgroundColor:"#303030",padding:5,borderRadius:10}]}>{item.askTitle} : {item.answerTitle}</Text>
                        </View>
                    )}
                />
            </View>
        </ScreenSetup>
    )
}

export default SingleUsersAnswer
