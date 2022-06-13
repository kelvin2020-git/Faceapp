
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Fotoperfil from '../perfil/Fotoperfil';
import Botonesdetallesinfo  from '../perfil/Botonesdetallesinfo.js';
import Mihistoria from '../perfil/Mihistoria';
import Amigos from '../perfil/Amigos';
import Publicaciones from '../perfil/Publicaciones';
import Botonespublicaciones from '../perfil/Botonespublicaciones';
import Post from '../home/Post';

const Perfil = () => {
  
  return (
   
   
    <>
    
 
    <ScrollView>
    <View style={styles.container}>
    <Fotoperfil/>
    <Botonesdetallesinfo/>
    <Mihistoria/>
    <Amigos/>
   <Publicaciones/>
   <Botonespublicaciones/>
   <Post/>
    </View>
				</ScrollView>
      </>
   
   

  


    

 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#d7d4d4'
  },
});

export default Perfil;
