import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import ComingSoon from '../views/ComingSoon';
import Series from '../views/Series';
import Movies from '../views/Movies';

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name = 'Movies' 
                    component = { Movies } 
                    options = {{ 
                        tabBarIcon: ({ color, size }) => (
                            <Icon name = 'movie' size= { size } color = { color } />
                        ) 
                    }} 
                />
                <Tab.Screen 
                    name = 'Series' 
                    component = { Series } 
                    options = {{ 
                        tabBarIcon: ({ color, size }) => (
                            <Icon name = 'tv' size= { size } color = { color } />
                        ) 
                    }} 
                />
                <Tab.Screen 
                    name = 'ComingSoon' 
                    component = { ComingSoon } 
                    options = {{ 
                        tabBarIcon: ({ color, size }) => (
                            <Icon name = 'grade' size= { size } color = { color } />
                        ) 
                    }} 
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;