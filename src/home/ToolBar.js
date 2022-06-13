import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Avatar from './Avatar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ToolBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerrow}>
        <Avatar

          source={require('../img/perfil.jpg')}
        />
        <TextInput style={styles.input}
          placeholder='¿Qué estás pensando?' />
        <MaterialIcons
          name='photo-size-select-actual'
          size={20}

          color='#4CAF50'
        />

      </View>


      <View style={styles.containerrow}>


        <TouchableOpacity style={styles.menu}>

          <MaterialIcons
            name='movie'
            size={22}
            color='#E141FC'
          />
          <Text > video</Text>
        </TouchableOpacity >



        <TouchableOpacity style={styles.menu}>

          <MaterialCommunityIcons
            name='video-plus'
            size={22}
            color='#E141FC'
          />
          <Text > Sala</Text>
        </TouchableOpacity >


        <TouchableOpacity style={styles.menu}>
          <MaterialIcons
            name='groups'
            size={20}
            color='#4CAF50'
          />
          <Text > Grupo</Text>
        </TouchableOpacity >

        <TouchableOpacity style={styles.menu}>

          <Ionicons name='ios-videocam' size={22} color='#F44337' />
          <Text > En vivo</Text>
        </TouchableOpacity >

      </View>





    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 92
  },

  containerrow: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 4,
    paddingLeft: 11,
    alignItems: 'center'

  },
  input: {
    width: 250,
    height: 40,
    margin: 17,
    paddingLeft: 11,
    padding: 11,
    borderRadius: 10,
    borderColor: '#c1bdbd',
    borderWidth: 1,

  },
  menu: {
    flex: 1,
    height: 36,
    margin: 3,
    borderRadius: 10,
    borderColor: '#c1bdbd',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },

});




export default ToolBar;