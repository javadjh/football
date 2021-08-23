import React, {Fragment, useEffect, useState} from "react";
import {Text,View,FlatList,StyleSheet} from "react-native";
import ScreenSetup from "../../utilityComponent/ScreenSetup";
import {useDispatch, useSelector} from "react-redux";
import {getAsksAction} from "../../stateManager/action/AsksAction";
import {cardStyle, rowStyle, tvMedium, tvStyleTile} from "../../globalStyle/GlobalStyle";
import {TouchableWithoutFeedback} from "react-native";
import BackBar from "../../utilityComponent/BackBar";
import {insertUsersAnswersService} from "../../APIConfig/UsersAnswerService";
import {getUsersAnswerAction, setCanInsertAction} from "../../stateManager/action/UsersAnswerAction";


const InsertUsersAnswerScreen = ({navigation})=>{
    const dispatch = useDispatch()
    const asks = useSelector(state => state.asks)
    const [answers,setAnswers] = useState([])
    const [test,setTest] = useState('')
    console.log("ddddddddddddddddddddd")


    useEffect(()=>{
        getAsks()
    },[])

    const getAsks = async ()=>{
        await dispatch(getAsksAction())
    }


    const addAnswers = (newValue,item,index1,item1)=>{
        let getAnswers = [...answers]
        let index = getAnswers.findIndex(g=>g.askId===item._id)
        setTest(newValue)
        if(index===-1){
            getAnswers.push({
                askId : item._id,
                answerTitle : newValue,
                askTitle : item.title,
                answer : index1+1,
                color : item1.color
            })
        }else{
            getAnswers[index].askId = item._id
            getAnswers[index].answerTitle = newValue
            getAnswers[index].askTitle = item.title
            getAnswers[index].answer = index1 + 1
            getAnswers[index].color = item1.color

        }
        setAnswers(getAnswers)

    }

    const onInsertListener = async ()=>{
        const {data,status} = await insertUsersAnswersService({answers})
        if(status===200){
            await dispatch(getUsersAnswerAction({pageId:1,eachPerPage:20}))
            await dispatch(setCanInsertAction())
            navigation.goBack()
        }
    }

    return(
        <ScreenSetup>
            <View style={{flex:1}}>
                <BackBar title={"Add new"} navigation={navigation}/>
                <FlatList
                 keyExtractor={item => item._id}
                 data={asks} renderItem={({item})=>(
                     <Fragment>
                         <View style={[cardStyle,{margin:10,padding:15}]}>
                            <Text style={[tvStyleTile,{marginBottom:10}]}>{item.title}</Text>
                                 <FlatList
                                     keyExtractor={item => item._id}
                                     data={item.answers} renderItem={({item:item1 , index})=>(
                                     <View style={[rowStyle,{alignItems: "center"}]}>
                                         <TouchableWithoutFeedback onPress={()=>{
                                             addAnswers(`${item1.title} (${index+1})`,item,index,item1)
                                         }}>
                                             <View style={[tvMedium,styles.answer,rowStyle,{backgroundColor:`${item1.color}`}]}>
                                                <Text style={{color:"white"}} >{item1.title}</Text>
                                                <Text style={{color:"white"}}>{index+1}</Text>
                                             </View>
                                         </TouchableWithoutFeedback>

                                     </View>
                                 )}/>
                             <Text style={[tvMedium,{marginTop:10,}]}>{
                                 answers.findIndex(g=>g.askId===item._id)===-1?"No answer":answers[answers.findIndex(g=>g.askId===item._id)].answerTitle
                             }</Text>
                         </View>
                     </Fragment>
                )}/>
                <TouchableWithoutFeedback onPress={()=>{
                    onInsertListener()
                }}>
                    <Text style={[tvStyleTile,{textAlign:"center",backgroundColor:"green",padding:10,color:"white"}]}>Add new medical evaluation ({answers.length})</Text>
                </TouchableWithoutFeedback>
            </View>
        </ScreenSetup>
    )
}

const styles = StyleSheet.create({
    answer:{

        width:"100%",
        marginTop:5,
        borderRadius:10,
        color:"white",
        padding:10,
        justifyContent:"space-between"
    }
})
export default InsertUsersAnswerScreen
