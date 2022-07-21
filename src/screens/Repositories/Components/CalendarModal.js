import React, { useState } from "react";
import { Image, Modal, Pressable, StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import {
  horizontalScale,
  normalizeFontSize,
  verticalScale,
} from "../../../utils/functions";
import { COLORS, IMAGES } from "../../../utils/theme";
import AppText from "../../../components/AppText";
import { useDispatch } from "react-redux";
import { fetchReposWitDate } from "../../../redux/filteredRepos";

export const CalendarModal = ({ visible, setVisible, selectedDate }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const dispatch = useDispatch();
  return (
    <Modal
      visible={visible}
      onRequestClose={() => setVisible(false)}
      transparent={true}
      animationType={"slide"}
    >
      <Pressable style={styles.container} onPress={() => setVisible(false)}>
        <View style={styles.content}>
          <View style={styles.headerContainer}>
            <AppText style={styles.selectDateText}>Select Date</AppText>
            <Pressable
              style={styles.closeButton}
              onPress={() => setVisible(false)}
            >
              <Image source={IMAGES.close} />
            </Pressable>
          </View>
          <Calendar
            // Initially visible month. Default = now
            initialDate={selectedDay || moment().format("YYYY-MM-DD")}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={"2012-05-10"}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined

            // Handler which gets executed on day press. Default = undefined
            onDayPress={(day) => {
              selectedDate(day.dateString);
              setVisible(false);
              setSelectedDay(day.dateString);
              dispatch(fetchReposWitDate({ date: day.dateString }));
            }}
            theme={{
              selectedDayBackgroundColor: "red",
              selectedDayTextColor: "red",
              textDayFontSize: normalizeFontSize(15),
              textMonthFontSize: normalizeFontSize(15),
              textDayHeaderFontSize: normalizeFontSize(15),
              todayTextColor: "red",
            }}
            markedDates={{
              [selectedDay || moment().format("YYYY-MM-DD")]: {
                selected: true,
                selectedColor: "rgba(104,221,186,0.2549019607843137)",
                selectedTextColor: "#68ddba",
              },
            }}
          />
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: verticalScale(8),
    backgroundColor: COLORS.WHITE,
    borderRadius: verticalScale(8),
    paddingTop: verticalScale(5),
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectDateText: {
    fontSize: normalizeFontSize(15),
    fontWeight: "bold",
  },
  closeButton: {
    width: horizontalScale(40),
    height: verticalScale(40),
    alignItems: "center",
    justifyContent: "center",
  },
});
