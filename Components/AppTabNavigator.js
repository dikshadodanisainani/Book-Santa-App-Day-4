import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Alert,
    TouchableOpacity,
    Modal,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';

import BookRequestScreen from '../screens/BookRequestScreen';
import BookDonateScreen from '../screens/BookDonateScreen';
import {
    createBottomTabNavigator
} from 'react-navigation-tabs';



export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks: {
        screen: BookDonateScreen,
        navigationOptions: {
            tabBarIcon: < Image
            source = {require("../request-book.png")}
            style = {{width:20,height:20}}
            />,
            tabBarLabel:"Donate Books"
        }
    },
    BookRequest: {
        screen: BookRequestScreen,
        navigationOptions: {
            tabBarIcon: < Image
            source = {require("../request-list.png")}
            style = {{width:20,height:20}}
            />,
            tabBarLabel:"Book Request"
        }
    },

})