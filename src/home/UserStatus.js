import React from 'react';
import { View, StyleSheet, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Avatar from './Avatar';
const UserStatus = () => {
  return (






    <View style={styles.container} >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 11 }}>



        <TouchableOpacity style={styles.sala}>
          <MaterialCommunityIcons
            name='video-plus'
            size={26}
            color='#E141FC'
          />
          <Text style={styles.Textsala}>Crear Sala</Text>
        </TouchableOpacity >

        <View style={styles.usuario}>
          <Avatar

            source={require('../img/perfil.jpg')}
          />
          <Text style={styles.estado}></Text>
        </View>

        <View style={styles.usuario}>
          <Avatar

            source={require('../img/user1.jpg')}
          />
          <Text style={styles.estado}></Text>
        </View>
        <View style={styles.usuario}>
          <Avatar

            source={require('../img/user6.jpg')}
          />
        </View>
        <View style={styles.usuario}>
          <Avatar

            source={require('../img/user7.jpg')}
          />
        </View>

        <View style={styles.usuario}>
          <Avatar

            source={require('../img/user8.jpg')}
          />
          <Text style={styles.estado}></Text>
        </View>
        <View style={styles.usuario}>
          <Avatar

            source={require('../img/user10.jpg')}
          />
        </View>
      </ScrollView>


    </View>
  );
};

const styles = StyleSheet.create({



  container: {
    width: '100%',
    marginVertical: 40,
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffffff',

  },

  sala: {
    height: 50,
    width: 120,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: '#82b1ff',
    borderWidth: 1,
    padding: 0,
    paddingLeft: 10,
    marginRight: 10
  },
  Textsala: {

    color: '#1777f2',
    fontSize: 13,
    paddingLeft: 10
  },
  usuario: {
    marginRight: 13,
    marginVertical: 10
  },
  estado: {
    height: 15,
    width: 15,
    bottom: 9,
    right: -15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#4bcb1f',
    borderColor: '#ffffff',
    borderWidth: 2,
    padding: 0,
    paddingLeft: 10,
    marginRight: 10
  },

});




export default UserStatus;