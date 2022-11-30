import React from 'react';
import { View, Text, Button } from 'react-native';
import { colors } from '../../constants/themes/colors';


import { styles } from './styles';

const Products = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <Button title="Go to Product" onPress={() => navigation.navigate('Product')} color={colors.primary} />
    </View>
  );
};

export default Products;