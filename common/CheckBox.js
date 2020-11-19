import React, {useState, useEffect} from "react";
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

const CheckBox = ({value = false,children, onValueChange}) => {
    const [checked, setChecked] = useState(value)

    useEffect(() => {
        console.log("Value changed "+checked);
        //onValueChange(checked)
    }, [checked])

    return (
        <View style= {styles.container}>
            <View style={styles.checkbox}></View>
            <Text>Hii</Text>
            <TouchableOpacity
            style ={styles.checkbox}
            onPress={()=>{
                setChecked(!checked)
            }}
            >

            </TouchableOpacity>
        <Text>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : { 
        backgroundColor:'white',   
        height: 30,
        flexDirection:'row',
        width: 200
        
      },
      checkbox:{
        height:20,
        width:20,
        borderColor:'gray',
        backgroundColor:'blue',
        borderRadius:10,
        borderWidth:2,        
      },
      textStyle:{
        marginHorizontal: 10
    }
})

export {CheckBox}