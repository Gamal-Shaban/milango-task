import React from "react";
import {
  TouchableOpacity,
  View,
  Animated,
  StyleSheet,
  Text,
} from "react-native";
import {horizontalScale, normalizeFontSize, verticalScale} from "../../../utils/functions";
import {COLORS} from "../../../utils/theme";
import AppText from "../../../components/AppText";

export const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[
              styles.button,
              isFocused
                ? {
                    borderBottomColor: '#AEECDD',
                    borderBottomWidth: verticalScale(2.5),
                  }
                : null,
            ]}
          >
            <AppText style={[styles.title, isFocused ? {color: COLORS.MAIN_COLOR, }: null]} >{label}</AppText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: verticalScale(180),
    justifyContent: 'center',
    height: verticalScale(50),
    alignItems: 'center',
    marginHorizontal: horizontalScale(20),
    backgroundColor: 'white',
  },
  button: {
    height: verticalScale(50),
    width: verticalScale(90),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title:{
    fontSize: normalizeFontSize(14),
    fontWeight: 'bold',
    color: '#7b848d'
  }
});
