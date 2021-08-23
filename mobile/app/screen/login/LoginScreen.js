import React, {Fragment, useEffect, useState} from "react"
import {Text, View , StyleSheet} from "react-native";
import ScreenSetup from "../../utilityComponent/ScreenSetup";
import {btnStyle, cardStyle, tiStyle, tvStyleTile} from "../../globalStyle/GlobalStyle";
import {Image} from "react-native";
import {TextInput} from "react-native";
import {ScrollView} from "react-native";
import {loginService} from "../../APIConfig/userService";
import {TouchableOpacity} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from "jwt-decode";
import {useDispatch} from "react-redux";
import {setTokenAction} from "../../stateManager/action/UsersAction";
import * as SecureStore from 'expo-secure-store';



const LoginScreen = ({navigation})=>{
    const dispatch = useDispatch()
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const loginAction = async ()=>{
        const {data,status} = await loginService({userName,password})
        if(status===200){
            try {
                const user = await jwtDecode(data.token)
                const userJson = JSON.stringify(user)
                await AsyncStorage.setItem('user', userJson)
                await AsyncStorage.setItem('token',data.token)
                await SecureStore.setItemAsync('secure_token', data.token);
                await dispatch(setTokenAction(data))
                navigation.reset({
                    index:0,
                    routes:[{name:"Home"}]
                })
            } catch (e) {
                console.log(e)
            }
        }
    }
    return(
        <ScreenSetup>
            <ScrollView  >
                <Text style={[tvStyleTile,{marginHorizontal:15}]}>Login page</Text>
                <Image style={styles.imageStyle} source={require("../../../assets/logo.png")}/>

                <View style={[cardStyle,{marginHorizontal:20,marginVertical:15}]}>
                    <Text style={{marginHorizontal:10,marginTop:10}}>Enter your username</Text>
                    <TextInput onChangeText={(text)=>setUserName(text)} style={[tiStyle,{margin:10}]} placeholder={"Username..."} />
                    <Text style={{marginHorizontal:10,marginTop:10}}>Enter your password</Text>
                    <TextInput onChangeText={(text)=>{
                        setPassword(text)
                    }} secureTextEntry={true} style={[tiStyle,{margin:10}]} placeholder={"Password..."}/>
                    <TouchableOpacity onPress={()=>loginAction()}>
                        <Text  style={[btnStyle,{alignSelf:"center"}]}>Login to your account</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ScreenSetup>
    )
}

const styles = StyleSheet.create({
    imageStyle :{
        width:90,
        height:147,
        alignContent:"center",
        alignSelf:"center",
        marginTop:20
    }
})

export default LoginScreen
