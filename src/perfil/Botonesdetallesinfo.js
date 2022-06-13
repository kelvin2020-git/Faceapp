import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Botonesdetallesinfo = () => {
  return (
    <View style={styles.container}>

      <View style={styles.containerrow}>


        <TouchableOpacity backgroundColor="blue" style={styles.botoneseditaragregar1}>

          <AntDesign name='plus' size={20} color='white'
          />


          <Text style={styles.color}> Agregar historia</Text>



        </TouchableOpacity>



        <TouchableOpacity style={styles.botoneseditaragregar} backgroundColor="#f5f4f4">
          <Entypo name='edit' size={17} color='black'
          />
          <Text > Editar perfil</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.btninfo} >


          <Entypo
            name='dots-three-horizontal'
            size={15}
            color='#222121'
          />
          <Text > </Text>
        </TouchableOpacity >

      </View>
















      <View >

        <View style={styles.inforow}
        ><Entypo
            name='graduation-cap'
            size={20}
            color='#222121'
          />
          <Text style={styles.textinfo}>Estudio en <Text style={styles.detalleinfo}>Universidad Nacional Autonoma de Honduras </Text>  </Text>

        </View>










        <View style={styles.inforow}><FontAwesome
          name='map-marker'
          size={20}
          color='#222121'
        />
          <Text style={styles.textinfo} >  De <Text style={styles.detalleinfo}>Tegucigalpa </Text> </Text>

        </View>

        <View style={styles.inforow}><Entypo
          name='heart'
          size={20}
          color='#222121'
        />
          <Text style={styles.textinfo} >Soltero</Text>
        </View>

        <View style={styles.inforow}><Entypo
          name='dots-three-horizontal'
          size={20}
          color='#222121'
        />
          <Text style={styles.textinfo} >ver tu informacion </Text>

        </View>


      </View>





    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 230,
    backgroundColor: '#ffffff'
  },
  color: {
    color: '#fff'
  },
  containerrow: {
    width: '100%',
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
    backgroundColor: '#f5f4f4'
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
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  botoneseditaragregar1: {
    flex: 1,
    height: 36,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
});




export default Botonesdetallesinfo;