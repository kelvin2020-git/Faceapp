import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';

const Avatar = ({ source }) => {
  return (
    <View style={styles.container} >

      <Text >
        <ImageBackground
          style={styles.imagen}

          source={source}
        />



      </Text>


    </View>
  );
};

const styles = StyleSheet.create({



  container: {
    width: 40,
    height: 40,
    position: 'relative'

  },

  imagen: {
    height: 40,
    width: 40,
    borderRadius: 20,
    overflow: 'hidden',
    borderColor: '#1777f2',
    borderWidth: 1
  },

});




export default Avatar;