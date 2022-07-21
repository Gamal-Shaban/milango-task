import React from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { Header } from "./Components/Header";
import { useSelector } from "react-redux";
import { RepoCardItem } from "./Components/RepoCardItem";
import { COLORS } from "../../utils/theme";
import AppText from "../../components/AppText";
import { normalizeFontSize, verticalScale } from "../../utils/functions";

export const Repositories = () => {
  const { RepositoriesData, isLoading } = useSelector((state) => ({
    RepositoriesData: state?.filteredRepos?.viewReposWithSort,
    isLoading: state?.filteredRepos?.isLoading,
  }));

  return (
    <View style={styles.container}>
      <Header />
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={COLORS.MAIN_COLOR} />
        </View>
      ) : (
        <FlatList
          data={RepositoriesData}
          renderItem={({ item }) => <RepoCardItem item={item} />}
          contentContainerStyle={styles.contentContainerStyle}
          ListEmptyComponent={() => {
            return <AppText style={styles.noContent}>No content</AppText>;
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
  },
  contentContainerStyle: {
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  noContent: {
    fontSize: normalizeFontSize(18),
    marginTop: verticalScale(230),
  },
});
