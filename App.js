/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect,useRef} from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet, Text,
    useColorScheme, View,
} from 'react-native';

import {useDispatch} from "react-redux";
import AppNavigation from "./src/navigation";
import {appLoaded, appTheme} from "./src/redux/appState";
import {fetchRepos} from "./src/redux/repos";

const seconds =2000

const App = () => {
    const isMounted = useRef(false);
    const theme = useColorScheme()

    console.log('theme>>>>>>',theme)

  const dispatch=useDispatch()

    useEffect(() => {
        if (!isMounted.current) {
            setTimeout(() => {
                dispatch(appLoaded());
            }, seconds);

        }
        isMounted.current = true;
    }, [dispatch]);

    useEffect(()=>{
        dispatch(appTheme(theme))
    },[theme])




  return (
        <View style={styles.container}>
            <AppNavigation />
        </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'white'
    }
});

export default App;
