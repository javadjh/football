import React from "react";
import {View,StyleSheet} from "react-native";
import Constans from "expo-constants";
const ScreenSetup = ({children,otherStyle})=>{
    return(
        <View style={[styles.screenView,otherStyle]}>
            {children}
            <View>
                <View style={{backgroundColor:"green",width: "100%",height: 6}}/>
                <View style={{backgroundColor:"white",width: "100%",height: 6}}/>
                <View style={{backgroundColor:"red",width: "100%",height: 6}}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    screenView:{
        flex:1,
        marginTop:Constans.statusBarHeight
    },

})

export default ScreenSetup
