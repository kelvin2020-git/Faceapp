import 'react-native-gesture-handler';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Perfil from '../components/Perfil';
import Videos from '../components/Videos';
import Amigos from '../components/Amigos';
import Home from '../components/Home';

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator >
      
      <Tab.Screen
            options={{
              title: ({  focused }) => (
                <Ionicons
                  size={25}
                  name={focused ? 'home' : 'home-outline'}
                  color={focused ? 'blue' : '#272727'}
                />
              ),
            }}
        component={Home}
        name='Home'
      />
      <Tab.Screen
     options={{
      title: ({  focused }) => (
        <Ionicons
          size={25}
          name={focused ? 'people-sharp' : 'people-outline'}
          color={focused ? 'blue' : '#272727'}
        />
      ),
    }}
        component={Amigos}
        name='Amigos'
      />
      <Tab.Screen
        options={{
          title: ({  focused }) => (
            <Ionicons
              size={25}
              name={focused ? 'md-tv' : 'md-tv-outline'}
              color={focused ? 'blue' : '#272727'}
            />
          ),
        }}
        component={Videos}
        name='Videos'
      />
      <Tab.Screen
       options={{
        title: ({  focused }) => (
          <Ionicons
            size={25}
            name={focused ? 'person-circle' : 'person-circle-outline'}
            color={focused ? 'blue' : '#272727'}
          />
        ),
      }}
        component={Perfil}
        name='Perfil'
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
