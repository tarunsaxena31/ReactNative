import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = ({title, style}) => {
    return (
        <View style={styles.header,style}>
            <Text style={StyleSheet.textStyle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    header:{
      height:40,
      backgroundColor:'yellow',
    },
    textStyle:{
        fontWeight:'bold'
    }
  })

export default Header