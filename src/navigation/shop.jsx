import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Categories, Product, Products } from '../screens';
import { colors } from '../constants/themes/colors';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return(
        <Stack.Navigator 
        initialRouteName='Categories'
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.backGroundDark,
            },
            headerTintColor: colors.gray,
            headerTitleStyle: {
                fontFamily: 'Rubik-Regular',
            }
        }}
        >
              <Stack.Screen name="Categories"
              component={Categories}
              options={{headerShown: false}} />
              <Stack.Screen name="Products" component={Products} />
              <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
    )
}

export default ShopNavigator;