import React,{Component} from 'react'
import { AppRegistry, Image, StyleSheet, Text, View ,
ActivityIndicatorIOS
} from 'react-native'



class RN extends Component{
  render()
  {


   
      return (
           <View style={styles.container} className='danding'>
          
              <Text style={styles.instructions}>
                To get started, edit index.ios.js
              </Text>
              <Text style={styles.instructions}>
                Press Cmd+R to reload,{'\n'}
                Cmd+D or shake for dev menu
              </Text>
      </View>
      )
  }
}



// Styles
const styles = StyleSheet.create({
  container: {
    flex:1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

module.exports=RN;