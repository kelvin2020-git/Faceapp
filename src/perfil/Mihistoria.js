import React from 'react';
import { View, StyleSheet, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Avatar from '../home/Avatar';


const Mihistoria = () => {
    return (


        <>
            <View style={styles.color}>
                <View style={styles.container} >

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ paddingLeft: 11 }}>


                        <View >
                            <View style={styles.tarjeta}>
                                <View style={styles.tarjetahistoria}  >

                                </View>
                                <View style={styles.agregarhistoria}>
                                    <AntDesign name='plus' size={20} color='black'
                                    />
                                </View   >

                            </View>
                            <Text style={styles.TextoHistoriaestilo} >Nueva</Text>
                        </View>







                        <View >
                            <View style={styles.tarjeta}>
                                <View  >
                                    <ImageBackground style={styles.tarjetahistoria} source={require('../img/perfil.jpg')} />
                                </View>


                                <View style={styles.TextoHistoria}>
                                    <Text style={styles.numeroHistoria} >+ 1</Text>
                                </View   >

                            </View>
                            <Text style={styles.TextoHistoriaestilo} >Featured</Text>
                        </View>

                        <View >
                            <View style={styles.tarjeta}>
                                <View  >
                                    <ImageBackground style={styles.tarjetahistoria} source={require('../img/historia.jpg')} />
                                </View>


                                <View style={styles.TextoHistoria}>
                                    <Text style={styles.numeroHistoria} >+ 8</Text>
                                </View   >

                            </View>

                        </View>

                        <View >
                            <View style={styles.tarjeta}>
                                <View  >
                                    <ImageBackground style={styles.tarjetahistoria} source={require('../img/historia1.jpg')} />
                                </View>


                                <View style={styles.TextoHistoria}>
                                    <Text style={styles.numeroHistoria} >+ 4</Text>
                                </View   >

                            </View>

                        </View>

                        <View >
                            <View style={styles.tarjeta}>
                                <View  >
                                    <ImageBackground style={styles.tarjetahistoria} source={require('../img/historia2.jpg')} />
                                </View>


                                <View style={styles.TextoHistoria}>
                                    <Text style={styles.numeroHistoria} >+ 5</Text>
                                </View   >

                            </View>

                        </View>

                        <View >
                            <View style={styles.tarjeta}>
                                <View  >
                                    <ImageBackground style={styles.tarjetahistoria} source={require('../img/historia3.jpg')} />
                                </View>


                                <View style={styles.TextoHistoria}>
                                    <Text style={styles.numeroHistoria} >+ 6</Text>
                                </View   >

                            </View>

                        </View>





                    </ScrollView>

                </View>
                <View style={styles.container1}>
                    <TouchableOpacity style={styles.boton} >
                        <Text style={styles.textboton}  >Editar detalles publicos</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    color: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    boton: {
        width: '90%',
        height: 40,
        marginLeft: 20,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#bee1f1'
    },
    textboton: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'blue',
    },
    container: {
        flex: 1,
        width: '100%',
        height: 190,
        bottom: 30,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    },

    tarjeta: {
        height: 170,
        width: 106,
        position: 'relative',
        marginRight: 8,
        backgroundColor: '#ffffff'
    },
    tarjetahistoria: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#dadce0',
    },

    agregarhistoria: {
        height: 39,
        width: 39,
        bottom: 60,
        right: 33,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',

        borderColor: '#ffffff',

        paddingLeft: 8,
    },

    TextoHistoria: {
        width: '100%',
        position: 'absolute',
        bottom: 8,
        left: 9
    },
    TextoHistoriaestilo: {
        backgroundColor: '#ffffff',
        fontSize: 13,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 30
    },
    numeroHistoria: {

        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',

    },

});




export default Mihistoria;