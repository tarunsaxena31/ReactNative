import React, {Component} from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import { CheckBox } from './common/CheckBox';
import Header from './common/Header';
import LoginView from './view/LoginView';


class App extends Component {
constructor(){
  super()
  this.state = {
    title:"Title"
  }
}

componentDidMount(){
  this.setState({...this.state, title:"Hello"})
}

  render(){
    const {main, header} = styles
      return (
        <View style={main}>
          <Header title ={this.state.title}/>
          {/* <View style={header}></View> */}
          <Text>Hello World!!!</Text>
          <CheckBox value={true}
          onValueChanged={(value)=>{
            console.log("In Component" +value);
          }}
          >Title</CheckBox>
          {/* <CheckBox value={true}
          onValueChanged={(value)=>{
            console.log("In Component" +value);
          }}>Title</CheckBox> */}
          <View style={styles.container}></View>
          {/* <LoginView></LoginView> */}
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
    backgroundColor: 'red',
  },
  container : {    
    backgroundColor: 'blue',
    flex:1,
    margin:10,
  },
  header:{
    height:40,
    backgroundColor:'yellow',
  }
})

export default App

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
