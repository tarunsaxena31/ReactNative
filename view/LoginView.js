import React, { PureComponent } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class LoginView extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <View style={StyleSheet.main}>
                {/* <Header style={StyleSheet.Header}></Header>
                <View style={StyleSheet.container}>

                </View> */}
                <Text>Component Text</Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    main:{
        flex:1
    },
    header:{
        flex:1,
        backgroundColor:'yellow',
      },
    container : {          
      flex:5,
      backgroundColor: 'blue',      
    },
    loginContainer:{
        backgroundColor:'white',
        flex:1,
        margin:'10%',
        borderRadius:10
    }
    
  })


//export default LoginView