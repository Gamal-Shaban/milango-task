import React from 'react';
import {routeNames} from './routeNames';

import {Text, View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "../screens/Home";
import {PostDetailsScreen} from "../screens/PostDetailsScreen";

const RootStack = createNativeStackNavigator();

const MainStack = () => {

  return (
    <RootStack.Navigator >

          <RootStack.Screen name={routeNames.HOME}
             options={{
                headerShown: false,
                }}
          component={HomeScreen} />


    </RootStack.Navigator>
  );
};

export default MainStack;
