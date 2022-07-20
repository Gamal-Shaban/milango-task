import React,{useEffect} from "react";
import {FlatList, StyleSheet, Text, View, ActivityIndicator} from "react-native";

import {normalizeFontSize, verticalScale} from "../../utils/functions";
import {COLORS} from "../../utils/theme";



export const HomeScreen = () =>{


    return(
        <View style={styles.container}>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE
    },
    title: {
     fontSize: normalizeFontSize(18),
     textAlign: 'center',
     fontWeight: 'bold'
    },
    header: {
     height: verticalScale(45),
     alignSelf: 'stretch',
     borderBottomWidth: verticalScale(0.5),
     borderBottomColor: COLORS.GRAY_II,
     alignItems: 'center',
     justifyContent: 'center',
    },
    contentContainerStyle:{
        marginTop: verticalScale(15),
        paddingBottom: verticalScale(30)
    }
})
