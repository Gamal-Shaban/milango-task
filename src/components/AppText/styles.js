import {Platform, StyleSheet} from 'react-native';
import {normalizeFontSize} from "../../utils/functions";
import {COLORS} from "../../utils/theme";

const styles = StyleSheet.create({
  default: {
    fontSize: normalizeFontSize(10),
    textAlign: Platform.OS === 'ios' ? 'left' : 'auto',
    color: COLORS.BLACK,
  },
});

export default styles;
