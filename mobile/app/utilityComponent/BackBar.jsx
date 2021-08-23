import React,{Fragment} from "react";
import {View,StyleSheet} from "react-native";
import {cardStyle, rowStyle, tvMedium} from "../globalStyle/GlobalStyle";
import { Ionicons } from '@expo/vector-icons';
import {Text} from "react-native";
const BackBar = ({title,navigation})=>{
    return(
        <Fragment>
            <View style={[cardStyle,styles.back]}>
                <View style={[rowStyle,{justifyContent:"space-between",paddingHorizontal:10}]}>
                    <Ionicons onPress={()=>{
                        navigation.goBack()
                    }} style={{height:"100%",marginTop:8,flex:1}} name="arrow-back" size={32} color="black" />
                    <Text style={[tvMedium,{justifyContent: "center",marginTop: 14,flex:1,textAlign:"center"}]}>{title}</Text>
                    <Text style={[tvMedium,{textAlign:"center",justifyContent: "center",marginTop: 8,flex:1}]}></Text>
                </View>
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    back:{
        height:50,
        backgroundColor:"white",
        marginHorizontal:10,
        marginTop:8,
        justifyContent:"space-between",

    },
})

export default BackBar
