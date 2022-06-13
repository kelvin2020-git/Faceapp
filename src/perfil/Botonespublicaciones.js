import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Botonespublicaciones = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerrow}>



        <TouchableOpacity style={styles.botoneseditaragregar} backgroundColor="#d7d4d4">

          <MaterialIcons name='collections' size={20} color='black'
          />


          <Text > Foto</Text>



        </TouchableOpacity>




        <TouchableOpacity style={styles.botoneseditaragregar} backgroundColor="#d7d4d4">
          <Entypo name='user' size={17} color='black'
          />
          <Text > Avatares</Text>
        </TouchableOpacity>






        <TouchableOpacity style={styles.botoneseditaragregar} >
          <Entypo name='beamed-note' size={17} color='black'
          />
          <Text > Musica</Text>
        </TouchableOpacity>



      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 70,
    marginVertical: 15,
    backgroundColor: '#ffffff'
  },
  color: {
    color: '#fff'
  },
  containerrow: {
    width: '80%',
    height: 60,
    flexDirection: 'row',
    padding: 4,
    paddingLeft: 11,
    alignItems: 'center'

  },
  btninfo: {
    width: 45,
    height: 38,
    margin: 14,
    paddingLeft: 11,
    alignItems: 'center',
    padding: 11,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#d7d4d4'
  },

  inforow: {
    width: '100%',
    flexDirection: 'row',
    margin: 3
  },
  textinfo: {
    fontSize: 18,
    marginLeft: 10
  },
  detalleinfo: {

    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',

  },
  botoneseditaragregar: {
    flex: 1,
    height: 36,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#d7d4d4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },

});




export default Botonespublicaciones;