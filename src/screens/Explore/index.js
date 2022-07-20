import React from "react";
import {ActivityIndicator, FlatList, StyleSheet, View} from "react-native";
import { useSelector } from "react-redux";
import { keyExtractor } from "react-native/Libraries/Lists/VirtualizeUtils";
import { CardItem } from "./Components/cardItem";
import {verticalScale} from "../../utils/functions";
import {COLORS} from "../../utils/theme";

export const ExploreScreen = () => {
  const { viewExploreRepos, isLoading } = useSelector((state) => ({
    viewExploreRepos: state?.reposData.viewExploreRepos,
    isLoading: state?.reposData.viewExploreRepos,
  }));

  const ListHeaderComponent = () =>{
    return(
        <View  >


        </View>
    )
  }


  if(isLoading  && viewExploreRepos?.length < 1){
    return (
        <View style={styles.container} >
          <ActivityIndicator color={COLORS.MAIN_COLOR} size={'large'} />
        </View>
    )
  }else {
    return (
        <FlatList
            ListHeaderComponent={ListHeaderComponent}
            renderItem={CardItem}
            data={viewExploreRepos}
            keyExtractor={keyExtractor}
            contentContainerStyle={styles.contentContainerStyle}
        />
    );
  }
};
const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
   marginTop: verticalScale(5)
  },
  container:{
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
