import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button, Input, Image } from "react-native-elements";
import { KeyboardAvoidingView } from 'react-native';
import { StatusBar} from "expo-status-bar";
import { useState } from 'react';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const signIn = () => {




    }







    return (
        <KeyboardAvoidingView behavior="padding" enabled style={styles.fullScreen}>
            <StatusBar style="light" />
            
            <Image source={{ 
                
                uri: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png",

            
            
            
            
            }}

            style={{ width: 200, height: 200}}
            
            
            
            />


            <View style={styles.inputContainer}>



                <Input style={styles.inputContainer1} placeholder="Email" autoFocus type="Email" value={email} onChangeText={(text) => setEmail(text)}/>
                
                <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={(text) => setPassword(text)}/>





            </View>


            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button containerStyle={styles.button} type="outline"title="Register"/>
            <View style={{ height: 200}} />




        </KeyboardAvoidingView>
    )
}

export default LoginScreen



const styles = StyleSheet.create({

    fullScreen: { 
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: '#eef8fb',



    },









    inputContainer: {
        width: 400,
        paddingBottom: 100,
        




    },

    // inputContainer1: {
    //     paddingBottom: 100
    // },


    button: {
        
        width: 200,
        marginTop: 10,
        // backgroundColor: '#0000FF',
        


    },




})
