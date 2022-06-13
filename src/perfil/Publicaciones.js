import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Avatar from '../home/Avatar';
const Publicaciones = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerrow}>


        <View style={styles.botoneseditaragregar} >

          <Text style={styles.detallepubli}> Publicaciones</Text>
        </View>
        <TouchableOpacity style={styles.btninfo} >


          <Entypo
            name='share'
            size={15}
            color='#222121'
          />
          <Text > </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btninfo} >


          <Entypo
            name='cog'
            size={15}
            color='#222121'
          />
          <Text > </Text>
        </TouchableOpacity>

      </View>






      <View style={styles.container}>
        <View style={styles.containerrow}>
          <Avatar

            source={require('../img/perfil.jpg')}
          />
          <TextInput style={styles.input}
            placeholder='¿Qué estás pensando?' />


        </View>


        <View style={styles.containerrow2}>




          <TouchableOpacity style={styles.menu}>

            <Ionicons name='ios-videocam' size={22} color='#F44337' />
            <Text style={styles.textobotones}> En vivo</Text>
          </TouchableOpacity>



          <TouchableOpacity style={styles.menu}>
            <MaterialIcons
              name='photo-size-select-actual'
              size={20}

              color='#4CAF50'
            />
            <Text style={styles.textobotones}> Foto</Text>
          </TouchableOpacity>



          <TouchableOpacity style={styles.btn}>

            <Entypo
              name='flag'
              size={22}
              color='gray'
            />
            <Text style={styles.textobotones}> Acontecimineto importante</Text>
          </TouchableOpacity>

        </View>





      </View>


































    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 200,
    backgroundColor: '#fff'
  },
  color: {
    color: '#fff'
  },
  containerrow: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    padding: 4,
    backgroundColor: '#fff',
    paddingLeft: 11,
    alignItems: 'center'

  },
  btninfo: {
    width: 40,
    height: 38,
    margin: 5,
    marginRight: 14,
    paddingLeft: 11,
    alignItems: 'center',
    padding: 11,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#f5f4f4'
  },

  detallepubli: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',

  },


  botoneseditaragregar: {
    flex: 1,
    height: 36,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',


  },
  container2: {
    width: '100%',
    height: 92
  },

  containerrow2: {
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

  btn: {
    flex: 1,
    height: 36,
    margin: 3,
    borderRadius: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  menu: {
    flex: 1,
    height: 36,
    margin: 3,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  textobotones: {

    fontSize: 13,
    fontWeight: 'bold',
    color: 'gray',
    alignItems: 'center',
  },

});




export default Publicaciones;