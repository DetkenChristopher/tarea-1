import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Screen2 = () => {
  return (
    <View style={styles.container}>
<View style={styles.boxpurple}></View>
<View style={styles.boxOrange}></View>
<View style={styles.boxGreen}></View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        width:400,
        height:500,
        backgroundColor:'darkblue',
        marginTop:50,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute'
    },
    boxpurple:{
        //flex:1,
        width:100,
        height:100,
        backgroundColor:'blue',
        borderWidth:10,
        borderColor:'white',
       position:'relative',
       top:0,
       right:0


    },
    boxOrange:{
        width:100,
        height:100,
        backgroundColor:'orange',
        borderWidth:100,
        borderColor:'white',
       alignSelf:'flex-end',
       //position:'absolute'
        //top:130

    },
    boxGreen:{
        width:100,
        height:100,
        backgroundColor:'lightblue',
        borderWidth:10,
        borderColor:'white',
       position:'relative',
       top:0,
       right:0
       

    }
    })

