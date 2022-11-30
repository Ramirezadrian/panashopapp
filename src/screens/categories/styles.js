import { StyleSheet } from 'react-native';
import { colors } from '../../constants/themes/colors';



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backGroundLight,
  },
  title: {
    fontFamily: 'Rubik-bold',
    fontSize: 20,
    textAlign: 'center',
    color: colors.text

  }
});