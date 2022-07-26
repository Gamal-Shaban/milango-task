import React from "react";
import { Image, StyleSheet, View } from "react-native";
import {
  horizontalScale,
  normalizeFontSize,
  verticalScale,
} from "../../../utils/functions";
import { COLORS, IMAGES } from "../../../utils/theme";
import AppText from "../../../components/AppText";
import moment from "moment";

export const CardItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <AppText style={styles.trendingText}>Trending repository</AppText>
        <View style={{ flex: 1 }} />
        <Image
          source={IMAGES.star}
          style={styles.star}
          resizeMode={"contain"}
        />
        <AppText style={[styles.startText]}>Star</AppText>
        <View style={styles.countStarView}>
          <AppText style={styles.countStarText}>
            {`${item?.stargazers_count}`}
          </AppText>
        </View>
      </View>

      <View style={styles.nameContainer}>
        <Image
          source={IMAGES.path7}
          style={styles.path7}
          resizeMode={"contain"}
        />
        <AppText style={styles.nameText}>{item?.full_name}</AppText>
      </View>

      <AppText style={styles.description} numberOfLines={3}>
        {item.description}
      </AppText>
      <View style={{ flex: 1 }} />
      <View style={styles.bottomView}>
        <AppText style={styles.updateTomeText}>
          {`Updated ${moment(item.updated_at).fromNow()}`}
        </AppText>
        <AppText style={styles.updateTomeText}>{item.language}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: verticalScale(225),
    marginTop: verticalScale(10),
    backgroundColor: COLORS.WHITE,
    borderWidth: verticalScale(1),
    borderColor: COLORS.GRAY_III,
    borderRadius: verticalScale(8),
    width: horizontalScale(340),
    padding: verticalScale(15),
    paddingBottom: 0,
  },
  topView: {
    flexDirection: "row",
    alignItems: "center",
  },
  trendingText: {
    fontSize: normalizeFontSize(15),
  },
  star: {
    width: verticalScale(20),
    height: verticalScale(25),
    marginHorizontal: horizontalScale(8),
  },
  startText: {
    fontSize: normalizeFontSize(15),
    fontWeight: "bold",
  },
  countStarView: {
    height: verticalScale(30),
    paddingHorizontal: horizontalScale(10),
    backgroundColor: "rgba(43,17,144,0.11372549019607843)",
    borderRadius: verticalScale(8),
    alignItems: "center",
    justifyContent: "center",
    marginLeft: horizontalScale(10),
  },
  countStarText: {
    color: "#2b1190",
    fontSize: normalizeFontSize(14),
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(10),
  },
  path7: {
    height: verticalScale(20),
    width: horizontalScale(20),
  },
  nameText: {
    fontSize: normalizeFontSize(18),
    color: COLORS.MAIN_COLOR,
    fontWeight: "bold",
    marginLeft: horizontalScale(5),
    lineHeight: verticalScale(24),
  },
  description: {
    fontSize: normalizeFontSize(15),
    color: COLORS.BLACK,
    marginTop: verticalScale(20),
    fontWeight: "bold",
    lineHeight: verticalScale(24),
  },
  bottomView: {
    flexDirection: "row",
    borderTopColor: COLORS.GRAY_III,
    borderTopWidth: verticalScale(1),
    height: verticalScale(50),
    marginTop: verticalScale(10),
    alignItems: "center",
  },
  updateTomeText: {
    fontSize: normalizeFontSize(14),
    textAlign: "left",
    flex: 1,
    fontWeight: "bold",
  },
});
