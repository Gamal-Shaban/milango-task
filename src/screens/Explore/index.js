import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { keyExtractor } from "react-native/Libraries/Lists/VirtualizeUtils";
import { CardItem } from "./Components/cardItem";
import {
  horizontalScale,
  normalizeFontSize,
  verticalScale,
} from "../../utils/functions";
import { COLORS, IMAGES } from "../../utils/theme";
import AppText from "../../components/AppText";
import SelectDropdown from "react-native-select-dropdown";
import { viewReposNum } from "../../redux/repos";
const countries = [10, 50, 100];
export const ExploreScreen = () => {
  const { viewExploreRepos, isLoading, countView } = useSelector((state) => ({
    viewExploreRepos: state?.reposData.viewExploreRepos,
    isLoading: state?.reposData.viewExploreRepos,
    countView: state?.reposData.viewExploreNum,
  }));
  const [topNumberSelected, setTopNumberSelected] = useState(10);
  const dispatch = useDispatch();
  const ListHeaderComponent = () => {
    return (
      <View style={styles.headerContainer}>
        <AppText style={styles.headerText}>Explore popular</AppText>

        <SelectDropdown
          data={countries}
          defaultValue={10}
          onSelect={(selectedItem, index) => {
            dispatch(viewReposNum(selectedItem));
            return `View : Top ${countView}`;
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return `View : Top ${countView}`;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
          renderDropdownIcon={() => <Image source={IMAGES.chevronIcon} />}
          buttonStyle={styles.viewCountButton}
        />
      </View>
    );
  };

  if (isLoading && viewExploreRepos?.length < 1) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={COLORS.MAIN_COLOR} size={"large"} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ListHeaderComponent />
        <FlatList
          // ListHeaderComponent={}
          renderItem={({ item }) => <CardItem item={item} />}
          data={viewExploreRepos}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.contentContainerStyle}
          style={{ backgroundColor: COLORS.GRAY_III, flex: 1 }}
        />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: "center",
    marginTop: verticalScale(10),
    paddingBottom: verticalScale(40),
  },
  container: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    justifyContent: "flex-start",
    paddingTop: verticalScale(12),
    alignSelf: "flex-start",
    marginHorizontal: horizontalScale(20),
    marginBottom: verticalScale(5),
  },
  headerText: {
    fontSize: normalizeFontSize(18),
    textAlign: "left",
    fontWeight: "bold",
    marginLeft: horizontalScale(3),
  },
  viewCountButton: {
    backgroundColor: COLORS.WHITE,
    width: horizontalScale(155),
    marginTop: verticalScale(10),
    borderRadius: verticalScale(8),
    paddingHorizontal: horizontalScale(10),
    paddingRight: 0,
  },
  viewText: {
    fontSize: normalizeFontSize(17),
    color: COLORS.GRAY_I,
  },
  topNumberSelectedText: {
    fontSize: normalizeFontSize(17),
    marginRight: horizontalScale(8),
    fontWeight: "bold",
  },
});
