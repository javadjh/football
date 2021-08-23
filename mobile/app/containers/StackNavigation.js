import React , { Fragment } from "react"
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "../screen/login/LoginScreen";
import HomeScreen from "../screen/home/HomeScreen";
import InsertUsersAnswerScreen from "../screen/usersAnswer/InsertUsersAnswerScreen";
import SingleUsersAnswer from "../screen/singleUsersAnswer/SingleUsersAnswer";
const Stack = createStackNavigator()
const StackNavigation = ()=>{
    return(
        <Fragment>
            <Stack.Navigator initialRouteName={"Home"} screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="InsertUsersAnswer" component={InsertUsersAnswerScreen} />
                <Stack.Screen name="SingleUsersAnswer" component={SingleUsersAnswer} />
            </Stack.Navigator>
        </Fragment>
    )
}
export default StackNavigation
