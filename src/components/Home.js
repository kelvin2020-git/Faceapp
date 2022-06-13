import React,{useState} from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Post from '../home/Post';
import Story from '../home/Story';
import ToolBar from '../home/ToolBar';
import UserStatus from '../home/UserStatus';


const Profile = () => {
 


  return (
      <>
    
 
    <ScrollView>
    <View style={styles.container}>
           <ToolBar/>
           <UserStatus/>
           <Story/>
           <Post />
    </View>
				</ScrollView>
      </>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#d7d4d4'
    }
   
});

export default Profile;