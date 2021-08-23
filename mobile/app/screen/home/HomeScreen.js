import React, {useEffect, useState , Fragment} from "react";
import {Text,View,Image,FlatList,StyleSheet} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ScreenSetup from "../../utilityComponent/ScreenSetup";
import {btnStyle, cardStyle, headerStyle, rowStyle, tvMedium, ultraWBtn} from "../../globalStyle/GlobalStyle";
import {useDispatch, useSelector} from "react-redux";
import {getUsersAnswerAction, setCanInsertAction} from "../../stateManager/action/UsersAnswerAction";
import {TouchableOpacity} from "react-native";
import registerForPushNotifications from "../../utilityComponent/registerForPushNotifications ";
import {TouchableWithoutFeedback} from "react-native";

const HomeScreen = ({navigation})=>{
    const [isHomePage,setIsHomePage] = useState(false)
    const [user,setUser] = useState({})
    const usersAnswer = useSelector(state => state.usersAnswers.usersAnswers)
    const canInsert = useSelector(state => state.canInsert.canInsert)
    const dispatch = useDispatch()
    useEffect(()=>{
        //registerForPushNotifications()
        isLogin()
    },[])
    const getUsersAnswerLogic = async ()=>{
        await dispatch(getUsersAnswerAction({pageId:1,eachPerPage:20}))
    }
    const getCanInsert = async ()=>{
        await dispatch(setCanInsertAction())
    }
    const isLogin = async ()=>{
        let data = await AsyncStorage.getItem("user")
        setUser(JSON.parse(data))
        if(!data)
            navigation.reset({
                index:0,
                routes:[{name:"Login"}]
            })
        else {
            setIsHomePage(true)
            getUsersAnswerLogic()
            getCanInsert()
        }

    }
    return(
        <Fragment>
            {isHomePage ? (
                <ScreenSetup>

                    <View style={headerStyle}>
                        <View style={rowStyle}>
                            <Image style={{width:40,height:65,margin:10}} source={require("../../../assets/logo.png") }/>
                            <View>
                                <View style={[rowStyle]}>
                                    <Text style={[tvMedium,{color:"black",marginTop:10}]}>player : </Text>
                                    <Text style={[tvMedium,{color:"black",marginTop:10}]}>{user.name} {user.lastName}</Text>
                                </View>
                                <View style={[rowStyle]}>
                                    <Text style={[tvMedium,{color:"black"}]}>username : </Text>
                                    <Text style={[tvMedium,{color:"black"}]}>{user.userName}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                        {canInsert?(
                            <TouchableOpacity onPress={()=>{
                                navigation.navigate("InsertUsersAnswer")
                            }}>
                                <Text style={[btnStyle,tvMedium,{marginHorizontal:20,textAlign:"center"}]}>Add new medical evaluation</Text>
                            </TouchableOpacity>
                        ):(
                            <Text style={[btnStyle,tvMedium,{marginHorizontal:20,textAlign:"center",backgroundColor:"black"}]}>submitted</Text>
                        )}

                    <View style={{flex:1}}>
                        <View style={[rowStyle,{alignItems: "center",flex:0.15,marginTop:-20}]}>
                            <View style={{marginTop: 20, flex: 0.5 , backgroundColor:"black",height:1,opacity: 0.3}}/>
                            <Text style={[tvMedium,{textAlign:"center",marginTop:20,flex:1}]}>Last medical evaluations</Text>
                            <View style={{marginTop: 20, flex: 0.5 , backgroundColor:"black",height:1,opacity: 0.3}}/>
                        </View>
                        <FlatList
                            keyExtractor={item => item._id}
                            style={{flex:1}}
                            data={usersAnswer} renderItem={({item})=>(
                            <View style={{width: "100%"}}>
                                <View style={[cardStyle,styles.customCard]}>
                                    <TouchableWithoutFeedback onPress={()=>{
                                        navigation.navigate("SingleUsersAnswer",{id:item._id})
                                    }}>
                                        <Text style={[tvMedium,styles.textCard]}>{item.createDate}</Text>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        )}
                        />
                    </View>
                </ScreenSetup>
            ):null}

        </Fragment>
    )
}
const styles = StyleSheet.create({
    customCard:{
        width:"90%",
        margin:5,
        paddingVertical:10,
        alignSelf:"center"
    },
    textCard:{
        textAlign:"center"
    }
})

export default HomeScreen
