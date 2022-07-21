import React, { useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import AppText from "../../../components/AppText";
import {
  horizontalScale,
  normalizeFontSize,
  verticalScale,
} from "../../../utils/functions";
import { COLORS, IMAGES } from "../../../utils/theme";
import SelectDropdown from "react-native-select-dropdown";
import { sortByLang } from "../../../redux/filteredRepos";
import { useDispatch, useSelector } from "react-redux";
import { CalendarModal } from "./CalendarModal";
import moment from "moment";

const languages = ["Any", "C++", "Java", "JavaScript", "HTML", "Python", "PHP"];

export const Header = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => ({
    language: state?.filteredRepos?.language,
  }));
  const [visible, setVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <View style={styles.container}>
      <AppText style={styles.repositoriesTxt}>Repositories</AppText>
      <View style={styles.sortTypeContainer}>
        <SelectDropdown
          search
          data={languages}
          defaultValue={"Any"}
          onSelect={(selectedItem, index) => {
            dispatch(sortByLang(selectedItem));
            return `Language :  ${language} `;
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return `Language :  ${language}`;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
          renderDropdownIcon={() => <Image source={IMAGES.chevronIcon} />}
          buttonStyle={styles.viewCountButton}
          buttonTextStyle={styles.languageText}
        />
        <Pressable
          style={styles.dateContainer}
          onPress={() => setVisible(true)}
        >
          <AppText style={styles.dateText}>Date :</AppText>
          <AppText
            style={[
              styles.dateText,
              { fontWeight: "bold", marginRight: horizontalScale(5) },
            ]}
          >
            {selectedDate || moment().format("D MMM YY")}
          </AppText>
          <Image source={IMAGES.chevronIcon} />
        </Pressable>
      </View>
      <CalendarModal
        visible={visible}
        setVisible={setVisible}
        selectedDate={(date) => {
          setSelectedDate(moment(date).format("D MMM YY"));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(20),
  },
  repositoriesTxt: {
    fontSize: normalizeFontSize(17),
    fontWeight: "bold",
    color: COLORS.BLACK,
  },
  sortTypeContainer: {
    flexDirection: "row",
  },
  viewCountButton: {
    backgroundColor: COLORS.WHITE,
    flex: 1.1,
    marginTop: verticalScale(10),
    borderRadius: verticalScale(8),
    paddingHorizontal: horizontalScale(10),
    paddingRight: 0,
    marginRight: horizontalScale(5),
  },
  dateContainer: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
    marginTop: verticalScale(10),
    borderRadius: verticalScale(8),
    paddingHorizontal: horizontalScale(10),
    paddingRight: 0,
    marginLeft: horizontalScale(5),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  dateText: {
    fontSize: normalizeFontSize(15),
  },
  languageText: {
    fontSize: normalizeFontSize(14),
    fontWeight: "bold",
  },
});
