import React from 'react';
import { View, StyleSheet, Text,ImageBackground,TouchableOpacity} from 'react-native';

const Amigos = () => {
  return (
           
    <View style={styles.container} >

<View style={styles.cajaamigos} >
    <View style={styles.textinfo} >
        
        <Text style={styles.detalleamigo}>Amigos</Text><Text >6 amigos</Text>    
        
   </View>


   <View  >
        
        <Text style={styles.buscaramigo} >Buscar Amigos</Text>
  
   </View>

</View>



<View backgroundColor="white" style={styles.listaamigos}>
        
    
              <TouchableOpacity >    
                   <View style={styles.tarjeta}> 
                       <View  >
                           <ImageBackground style={styles.tarjetahistoria} source={require('../img/user1.jpg')} />
                       </View>
                     
                      </View>   
                      <Text   style={styles.TextoHistoriaestilo} >Featured</Text>  
			 </TouchableOpacity>
        
  




             <TouchableOpacity >    
                   <View style={styles.tarjeta}> 
                       <View  >
                           <ImageBackground style={styles.tarjetahistoria} source={require('../img/user6.jpg')} />
                       </View>
                     
                      </View>   
                      <Text   style={styles.TextoHistoriaestilo} >Featured</Text>  
			 </TouchableOpacity>
        



             <TouchableOpacity>    
                   <View style={styles.tarjeta}> 
                       <View  >
                           <ImageBackground style={styles.tarjetahistoria} source={require('../img/user7.jpg')} />
                       </View>
                      </View>   
                      <Text   style={styles.TextoHistoriaestilo} >Featured</Text>  
			 </TouchableOpacity>
        
        
           
  
  
  
  
   </View>


   <View backgroundColor="white" style={styles.listaamigos}>
        
    
        <TouchableOpacity >    
             <View style={styles.tarjeta}> 
                 <View  >
                     <ImageBackground style={styles.tarjetahistoria} source={require('../img/user8.jpg')} />
                 </View>
                </View>   
                <Text   style={styles.TextoHistoriaestilo} >Featured</Text>  
       </TouchableOpacity>
  





       <TouchableOpacity >    
             <View style={styles.tarjeta}> 
                 <View  >
                     <ImageBackground style={styles.tarjetahistoria} source={require('../img/user10.jpg')} />
                 </View>
                </View>   
                <Text   style={styles.TextoHistoriaestilo} >Featured</Text>  
       </TouchableOpacity>
  



       <TouchableOpacity >    
             <View style={styles.tarjeta}> 
                 <View  >
                     <ImageBackground style={styles.tarjetahistoria} source={require('../img/historia1.jpg')} />
                 </View>
                </View>   
                <Text   style={styles.TextoHistoriaestilo} >Featured</Text>  
       </TouchableOpacity>
  
  
     

    


</View>
 
       <TouchableOpacity style={styles.boton}>
    <Text style={styles.textboton}  >Ver todo los amigos</Text>  
    </TouchableOpacity>         

</View>

  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
        height:425,
        backgroundColor:'#ffffff'
         },
  cajaamigos:{
      flex:1,
      width: "100%",
      flexDirection:'row',
      justifyContent:'space-between',
      marginVertical:5  
  },
  listaamigos:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
   marginLeft:10,
   marginRight:10,
   marginVertical:20,
   bottom:10
},
  
  detalleamigo:{
    fontSize:20,
    fontWeight: 'bold',
    color:'black',
    
  },
  buscaramigo:{
    fontSize:16,
    fontWeight: '500',
    color:'blue',
    marginRight:16
    
  },
  textinfo:{
    marginLeft:15,
  },
  tarjeta:{
    height: 120,
    width: 106,
    marginVertical:-40,
    position:'relative',
    marginRight:8,
 
   
  },
  tarjetahistoria:{
      width:'100%',
      height:'100%',
      borderRadius:10,
 
      overflow: 'hidden',
      borderColor:'gray',
      borderWidth:1,
      backgroundColor:'#dadce0',
  },

TextoHistoriaestilo:{
    fontSize:13,
    fontWeight:'bold',
    marginVertical:40,
    color:'black',
   marginLeft:30
},
boton:{ 
    width:'90%',
    height:40,
    marginLeft:20,
    alignItems:'center',
    flexDirection:'row',
    borderRadius:10,
   
    justifyContent:'center',
    backgroundColor:'#dadce0'
 },
 textboton:{
     fontSize:15,
         fontWeight:'bold',
         color:'#747576',
 },
});
           
   
   

export default Amigos;