import React, {Component} from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import { CheckBox } from './common/CheckBox';
import Header from './common/Header';
import LoginView from './view/LoginView';


class App extends Component {
constructor(){
  super()
  
}

componentDidMount(){
  
}

componentDidUpdate(){
  
}

  render(){
    const {main} = styles
      return (
        <View style={main}>
          
        </View>
      )
  }
}

const arrowFunction = () => {
    return(
      <View style={styles.container}>
      
    </View>
    )
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor: '#AAA',
  },
  
})

export default App