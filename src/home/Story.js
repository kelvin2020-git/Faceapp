import React from 'react';
import { View, StyleSheet, Text, ImageBackground, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Avatar from './Avatar';
const Story = () => {
    return (






        <View style={styles.container} >
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ paddingLeft: 11 }}>



                <View style={styles.tarjeta}>
                    <View  >
                        <ImageBackground style={styles.tarjetahistoria} source={require('../img/perfil.jpg')} />
                    </View>
                    <View style={styles.agregarhistoria}>
                        <AntDesign name='plus' size={20} color='white'
                        />
                    </View   >

                    <View style={styles.TextoHistoria}>
                        <Text style={styles.TextoHistoriaestilo} >Crear Historia</Text>
                    </View   >


                </View>


                <View style={styles.tarjeta}>
                    <View  >
                        <ImageBackground style={styles.tarjetahistoria} source={require('../img/historia.jpg')} />
                    </View>
                    <View style={styles.perfilhistoria}>
                        <Avatar

                            source={require('../img/user1.jpg')}
                        />
                    </View   >

                    <View style={styles.TextoHistoria}>
                        <Text style={styles.TextoHistoriaestilo} >Maria L</Text>
                    </View   >


                </View>
                <View style={styles.tarjeta}>
                    <View  >
                        <ImageBackground style={styles.tarjetahistoria} source={require('../img/historia1.jpg')} />
                    </View>
                    <View style={styles.perfilhistoria}>
                        <Avatar

                            source={require('../img/user6.jpg')}
                        />
                    </View   >

                    <View style={styles.TextoHistoria}>
                        <Text style={styles.TextoHistoriaestilo} >Jose</Text>
                    </View   >


                </View>
                <View style={styles.tarjeta}>
                    <View  >
                        <ImageBackground style={styles.tarjetahistoria} source={require('../img/historia2.jpg')} />
                    </View>
                    <View style={styles.perfilhistoria}>
                        <Avatar

                            source={require('../img/user7.jpg')}
                        />
                    </View   >

                    <View style={styles.TextoHistoria}>
                        <Text style={styles.TextoHistoriaestilo} >Paula</Text>
                    </View   >


                </View>
                <View style={styles.tarjeta}>
                    <View  >
                        <ImageBackground style={styles.tarjetahistoria} source={require('../img/historia7.jpg')} />
                    </View>
                    <View style={styles.perfilhistoria}>
                        <Avatar

                            source={require('../img/user8.jpg')}
                        />
                    </View   >

                    <View style={styles.TextoHistoria}>
                        <Text style={styles.TextoHistoriaestilo} >alejandra</Text>
                    </View   >


                </View>
                <View style={styles.tarjeta}>
                    <View  >
                        <ImageBackground style={styles.tarjetahistoria} source={require('../img/historia5.jpg')} />
                    </View>
                    <View style={styles.perfilhistoria}>
                        <Avatar

                            source={require('../img/user10.jpg')}
                        />
                    </View   >

                    <View style={styles.TextoHistoria}>
                        <Text style={styles.TextoHistoriaestilo} >Luis</Text>
                    </View   >


                </View>






            </ScrollView>


        </View>
    );
};

const styles = StyleSheet.create({



    container: {
        width: '100%',

        height: 192,
        bottom: 30,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff'


    },

    tarjeta: {
        height: 170,
        width: 106,
        position: 'relative',
        marginRight: 8,

    },
    tarjetahistoria: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'blue',
    },

    agregarhistoria: {
        height: 39,
        width: 39,
        bottom: 30,
        right: 33,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 2,
        paddingLeft: 8,
    },
    perfilhistoria: {
        height: 42,
        width: 42,
        top: 8,
        left: 8,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 21,
        borderColor: 'blue',
        borderWidth: 7,

    },
    TextoHistoria: {
        width: '100%',
        position: 'absolute',
        bottom: 8,
        left: 9
    },
    TextoHistoriaestilo: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#ffffff',

    },

});




export default Story;