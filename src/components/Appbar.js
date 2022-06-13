import React from 'react';
import { View, StyleSheet, Text,Button,TouchableOpacity  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';





const Appbar = () => {

  
	return (
		
        <View style={styles.container}>
        <Text style={styles.titulo}>facebook</Text>
        <View  style={styles.separador}>
			
        <Text style={styles.iconos}>
            <Ionicons name='search' size={30} color='black' />

            </Text>
            
            <Text style={styles.iconos}>
            <MaterialCommunityIcons name='facebook-messenger' size={30}  color='gray'/>

            </Text>
            
				
			</View>
       </View>
		
		
	)
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#ffffff',
        width: '100%',
        height: 58,
        padding: 4,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    titulo:{
        fontSize: 30,
        color:'#3a86e9',
	    fontWeight: 'bold',
	    letterSpacing: -0.3,
      },
      separador:{
        flexDirection: 'row',
      },
      iconos:{
        width: 30,
        height: 30,
        borderRadius:21,
        backgroundColor:'#eeeeee',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:16
        
      }
  });
export default Appbar