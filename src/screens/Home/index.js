import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { COLORS } from "../../utils/theme";
import { useDispatch } from "react-redux";
import { fetchRepos } from "../../redux/repos";
import { fetchReposWitDate } from "../../redux/filteredRepos";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TabBar } from "./Components/TopBar";
import { ExploreScreen } from "../Explore";
import { Repositories } from "../Repositories";
import { Header } from "./Components/Header";

const Tab = createMaterialTopTabNavigator();
export const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepos());
    dispatch(fetchReposWitDate({}));
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <Header />
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Repositories" component={Repositories} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: COLORS.WHITE,
  },
});
