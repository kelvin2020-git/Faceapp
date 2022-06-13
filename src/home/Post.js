
import React, {useState,useEffect} from 'react';
import { View, StyleSheet, Text, ImageBackground, ScrollView, Image, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Avatar from './Avatar';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Publi =({post})=>{
  
  const [like, setlike] = useState(false)
  const [Like, setLikes] = useState([post.likes])
    const handlelike=()=>{
    if(like){
      setLikes(Like-1)
     
    }else{
      setLikes(Like+1)

    }
    setlike(!like)
  }





 
 
   useEffect(() => { 
  
     const obtenerStorage = async () => {
         try {
           const ci = await AsyncStorage.getItem(`${[post.id]}`)
           if(ci)
           setLikes(JSON.parse(ci))
           
         } catch (error) {
           console.log(error)
         }
     }
    obtenerStorage();
 
 }, [ ])
 
 useEffect(() => {
 
   AsyncStorage.setItem(`${[post.id]}`, JSON.stringify(Like));
 }, [Like])


  return (
    
    
    <View  style={styles.container} >
      <View style={styles.cabecera} >
        <View style={styles.fila} >
          <Avatar source={require('../img/perfil.jpg')} />
          <View style={{ paddingLeft: 10 }}>
            <View >
              <Text style={styles.textousuario}>{post.nombre} </Text>
             
            </View>
            <View style={styles.fila}>
            
              <View ><Text style={styles.fecha}>{post.fecha} </Text></View>
              <Entypo
                name='dot-single'
                size={12}
                color='#747476'
              />
              <Entypo
                name='globe'
                size={14}
                color='#747476'
              />
            </View>
          </View>


        </View>

        <Entypo
          name='dots-three-horizontal'
          size={15}
          color='#222121'
        />

      </View>

      <View style={styles.textocomentario}>
        <Text >{post.contenido}  </Text>

      </View>


      <ImageBackground style={styles.foto} source={require('../img/historia1.jpg')} />
    


      <View style={styles.pie} >


        <View style={styles.pielikes} >


          <View style={styles.fila} >

            <View style={styles.iconlikes} >
              <AntDesign name='like1' size={12} color='#FFFFFF' />
            </View>
            <Text style={styles.cantidad}>{Like} </Text>
          </View>

          <Text style={styles.cantidad}>{post.comentario} comentario</Text>

        </View>


        <View style={styles.menubotones} >
         

          <TouchableOpacity style={styles.botones} onPress={handlelike} >
          <View style={styles.iconosbotones} >
          {like?<AntDesign
                name='like2'
                size={20}
                backgroundColor='blue'
                color='blue'
              />: <AntDesign
              name='like2'
              size={20}

              color='black'
            />
            }
            </View>
            <Text style={styles.textobotones} color='blue'> Me gusta</Text>
           
         
           
          </TouchableOpacity>

          <TouchableOpacity style={styles.botones} >
            <View style={styles.iconosbotones} >
              <MaterialCommunityIcons
                name='comment-outline'
                size={20}
                color='#424040'
              />
            </View>
            <Text style={styles.textobotones}>Comentar</Text>
          </TouchableOpacity >

          <TouchableOpacity  style={styles.botones} >
            <View style={styles.iconosbotones} >
              <MaterialCommunityIcons
                name='share-outline'
                size={20}
                color='#424040'
              />
            </View>
            <Text style={styles.textobotones}>Compartir</Text>
          </TouchableOpacity >


        </View>


      </View>

      <View style={styles.separador}>
        <Text  ></Text>
      </View>
</View>

  );
}


















const Post = () => {


  const data = ([
    { id:1, nombre:"kelvin castillo",fecha:"hace un minuto",contenido:"esta es una prueba" ,likes:900, comentario:2},
    {id:2, nombre:"jose",fecha:"hace un minuto",contenido:"esta es una segunda prueba" ,likes:100, comentario:2},
    {id:3, nombre:"mario",fecha:"hace un minuto",contenido:"esta es una tercera prueba" ,likes:670, comentario:2},
  ])





return <View  >{data.map((post) =><Publi key={post.id}  post={post}/>)}</View>;

};

const styles = StyleSheet.create({

  separador: {
    backgroundColor: '#d7d4d4'
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',


  },

  cabecera: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,

    paddingLeft: 11,
    paddingRight: 10
  },
  fila: {
    alignItems: 'center',
    flexDirection: 'row'

  },
  textousuario: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222121',
  },
  fecha: {
    fontSize: 9,
    color: '#747476',
  },
  textocomentario: {
    fontSize: 12,
    lineHeight: 16,
    color: '#222121',
    paddingLeft: 11

  },
  foto: {
    width: '99%',
    height: 300,
    marginTop: 9,
    marginLeft: 3,
    right: 10,
    left: 1
  },

  pielikes: {
    padding: 9,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pie: {
    paddingLeft: 14

  },
  iconlikes: {
    height: 20,
    width: 20,
    backgroundColor: '#1878f3',
    marginRight: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,


  },
  cantidad: {
    fontSize: 12,
    color: '#424040'
  },

  menubotones: {
    padding: 9,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  botones: {
    flexDirection: 'row'
  },
  iconosbotones: {
    marginRight: 6
  },
  textobotones: {
    fontSize: 14,
    color: '#424040'
  },


});




export default Post;




// useEffect(() => {
//  const storeUser = async () => {
//   try {
//     await AsyncStorage.setItem("user", JSON.stringify(Like));
//   } catch (error) {
//     console.log(error);
//   }
// };
// storeUser()
// }, [Like])


//   useEffect(() => { 
 
//     const obtenerStorage = async () => {
//         try {
//           const ci = await AsyncStorage.getItem('publicacion')
//           if(ci)
//           setLikes(JSON.parse(ci))
          
//         } catch (error) {
//           console.log(error)
//         }
//     }
//    obtenerStorage();

// }, [ ])

// useEffect(() => {

//   AsyncStorage.setItem('pacientes', JSON.stringify(Like ));
// }, [Like])