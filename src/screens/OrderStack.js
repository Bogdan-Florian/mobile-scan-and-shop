import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import OrdersScreen from "../components/OrdersScreen";
import Order_Screen from '../components/Order_Screen';

const OrderStack = createStackNavigator();

const OrdersStackScreen = () => (
    <OrderStack.Navigator>
      <OrderStack.Screen name="Orders" component={OrdersScreen}
                        options={{headerShown: false}}/>
      <OrderStack.Screen name="Order_page" component={Order_Screen} />
    </OrderStack.Navigator>
  );

export default OrdersStackScreen;