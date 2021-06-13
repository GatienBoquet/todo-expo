import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';



class Square extends React.Component{

  render(){
    return(
    <View style={[{backgroundColor: this.props.color},styles.container]}/>
    )
  }
}


const styles = StyleSheet.create({
container:{
    height: 50, width: 50}
});


export default Square