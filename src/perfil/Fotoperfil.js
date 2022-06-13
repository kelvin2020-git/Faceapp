import React from 'react';
import { View, StyleSheet, Text, ImageBackground, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Fotoperfil = () => {
  return (


    <>

      <ScrollView>

        <View style={styles.container}>
          <View style={styles.portada} >
            <View style={styles.textoportada} >
              <View>
                <MaterialIcons
                  name='photo-camera'
                  size={22}
                  color='gray'
                />
              </View>

              <Text style={styles.estiloletraportada}>Agregar foto de portada</Text>
            </View>
          </View>


          <View style={styles.perfil}>
            <View  >
              <ImageBackground style={styles.foto} source={require('../img/perfil.jpg')} />
              <View style={styles.fotoagregar}>
                <MaterialIcons
                  name='photo-camera'
                  size={22}
                  color='gray'
                />

              </View>
            </View>

          </View>




          <View style={styles.center}>
            <Text style={styles.Texto} >Kelvin Castillo</Text>

          </View>

        </View>





      </ScrollView>


    </>




  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  portada: {
    marginTop: 2,
    height: 200,
    marginTop: 14,
    marginLeft: 14,
    marginRight: 14,
    backgroundColor: '#f5f4f4',
    marginBottom: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  textoportada: {
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -40
  },
  estiloletraportada: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10

  },

  perfil: {
    height: 150,
    top: 130,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },

  foto: {
    height: 190,
    width: 190,
    overflow: 'hidden',
    borderRadius: 100,
    borderColor: '#ffffff',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center'

  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Texto: {
    fontSize: 30,
    fontWeight: '400',
    color: 'black'

  },
  fotoagregar: {
    height: 40,
    width: 40,
    bottom: 50,
    right: -130,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#e9e4e4',
    padding: 0,
    paddingLeft: 10,
    marginRight: 10
  },

});




export default Fotoperfil;