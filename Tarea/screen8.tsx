import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Screen8 = () => {
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
        height:600,
        backgroundColor:'darkblue',
        marginTop:50,
        justifyContent:'center',
        alignItems:'flex-start',
        position:'absolute'
    },
    boxpurple:{
        //flex:1,
        width:400,
        height:150,
        backgroundColor:'blue',
        borderWidth:10,
        borderColor:'white',
       position:'absolute',
       alignSelf:'flex-start',
      top:1,
       left:0


    },
    boxOrange:{
        width:400,
        height:300,
        backgroundColor:'orange',
        borderWidth:10,
        borderColor:'white',
        //flex:1,
       alignSelf:'center',
       position:'absolute',
        //top:130
        //top:1

    },
    boxGreen:{
        width:400,
        height:300,
        backgroundColor:'lightblue',
        borderWidth:10,
        borderColor:'white',
       position:'absolute',
       alignSelf:'flex-end',
       //marginBottom:'auto',
       bottom:0,
       right:0,
       //top:1
       

    }
    })

