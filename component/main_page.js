import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Mainpage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style = {styles.topHeader}>
            <Image 
            style = {{margin: 15, marginRight:100}}
            source={require("./icon/danshow_logo.png")}></Image>
            <Icon name="funnel-outline" size={30} style={{padding:10}}></Icon>
            <Icon name="search-outline" size={30}style={{padding:10}}></Icon>
            <Icon name="notifications-outline" size={30}style={{padding:10}}></Icon>
        </View>
        <View style = {styles.contents}>
            <Text style = {{padding:10, fontSize:15, fontWeight:'bold'}}>Cover Channel</Text>
            <Image 
            source={require("./icon/bts_screen.png")}
            style={{resizeMode:'cover', width:400, marginBottom:10}}></Image>
            <View style = {styles.contentInfo}>
                <Image source={require("./icon/person1.png")}></Image>
                <View style={{marginLeft:10}}>
                    <Text style={{fontWeight:'bold', fontSize:15}}>BTS-Dynamite cover</Text>
                    <Text style={{fontSize:12, color:'#C4C4C4'}}>Views: 14k  Difficulty: 5  Genre: k-pop</Text>
                </View>
            </View>
        </View>
        <View style = {styles.contents}>
            <Text style = {{padding:10, paddingLeft:10, fontSize:15, fontWeight:'bold'}}>Lecture Channel</Text>
            <Image 
            source={require("./icon/brave_screen.png")}
            style={{resizeMode:'cover', width:400, marginBottom:10}}></Image>
                        <View style = {styles.contentInfo}>
                <Image source={require("./icon/person2.png")}></Image>
                <View style={{marginLeft:10}}>
                    <Text style={{fontWeight:'bold', fontSize:15}}>BraveGirls-Rollin Lecture Video</Text>
                    <Text style={{fontSize:12, color:'#C4C4C4'}}>Views: 20k  Difficulty: 4  Genre: k-pop</Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topHeader: {
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomColor: '#9B9A9A',
    borderBottomWidth: 2,
    height:54,
  },
  contents: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1.5,
  },
  contentInfo: {
      flexDirection: 'row',
      marginLeft: 20,
      marginBottom: 15,
  }
});

export default Mainpage;