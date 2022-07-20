import React from "react";
import {Image, StyleSheet, View} from "react-native";
import {IMAGES} from "../../../utils/theme";
import {horizontalScale, verticalScale} from "../../../utils/functions";

export const Header = () =>{
    return(
        <View style={styles.container} >
            <Image source={IMAGES.logo} style={styles.image} resizeMode={'contain'} />
            <Image source={IMAGES.searchIcon} style={styles.searchIcon} resizeMode={'contain'} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: verticalScale(25),
        marginRight: horizontalScale(16)
    },
    image: {
        height: verticalScale(25),
        width: horizontalScale(150)
    },
    searchIcon:{
        height: verticalScale(20),
        width: horizontalScale(22)
    }
})
