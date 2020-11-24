import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import { HomeScreen, HelpScreen, ComunityScreen, ProfileScreen, DetailsScreen } from './src/screens';

import constants from './src/utils/constants';
import { Dimensions } from 'react-native';

const HomeStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const { width } = Dimensions.get('window');

const HomeStackScreen = () => {
	return (
		<HomeStack.Navigator 
			initialRouteName={constants.SCREEN.HOME}
			screenOptions={{
				headerLeft: (props) =>
					props.canGoBack && (
						<AntDesign
							name="arrowleft"
							size={24}
							color={constants.COLORS.PRIMARY}
							{...props}
							style={{ marginLeft: 20 }}
						/>
					),
			}}
		>
			<HomeStack.Screen
				name={constants.SCREEN.HOME}
				component={HomeScreen}
				options={{
					title: 'Magic: The Gathering',
					headerShown: false,
				}}
			/>
            <HomeStack.Screen
				name={constants.SCREEN.COMUNITY}
				component={ComunityScreen}
				options={{
					title: 'Magic: The Gathering',
					headerBackTitleVisible: false,
					headerTransparent: true,
				}}
			/>
            <HomeStack.Screen
				name={constants.SCREEN.HELP}
				component={HelpScreen}
				options={{
					title: 'Magic: The Gathering',
					headerBackTitleVisible: false,
					headerTransparent: true,
				}}
			/>
            <HomeStack.Screen
				name={constants.SCREEN.PROFILE}
				component={ProfileScreen}
				options={{
					title: 'Magic: The Gathering',
					headerBackTitleVisible: false,
					headerTransparent: true,
				}}
			/>
            <HomeStack.Screen
				name={constants.SCREEN.DETAILS}
				component={DetailsScreen}
				options={{
					title: '',
					headerBackTitleVisible: false,
					headerTransparent: true,
				}}
			/>
		</HomeStack.Navigator>
	);
};

const Router = () => (
	<NavigationContainer >
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === constants.SCREEN.MAIN) {
                        iconName = 'appstore1';
                        return <AntDesign name={iconName} size={24} color={focused ? constants.COLORS.WHITE : constants.COLORS.LIGHT_GRAY2} />;
					} else if (route.name === constants.SCREEN.PROFILE) {
                        iconName = 'user';
                        return <FontAwesome name={iconName} size={24} color={focused ? constants.COLORS.WHITE : constants.COLORS.LIGHT_GRAY2} />;
					} else if (route.name === constants.SCREEN.HELP) {
                        iconName = 'questioncircle';
                        return <AntDesign name={iconName} size={24} color={focused ? constants.COLORS.WHITE : constants.COLORS.LIGHT_GRAY2} />;
					} else if (route.name === constants.SCREEN.COMUNITY) {
                        iconName = 'users';
                        return <FontAwesome5 name={iconName} size={24} color={focused ? constants.COLORS.WHITE : constants.COLORS.LIGHT_GRAY2} />;
					}
				},
			})}
			tabBarOptions={{
				showLabel: false,
				keyboardHidesTabBar: true,
				tabStyle: {
					backgroundColor: 'rgba(0,0,0,0)',
				},
				style: {
					backgroundColor: constants.COLORS.GRAY,
					borderTopLeftRadius: 25,
					borderTopRightRadius: 25,
					position: 'absolute',
					bottom: 0,
					width: width,
					height: 70,
					zIndex: 10,
					padding: 10,
				},
			}}
		>
			<Tab.Screen name={constants.SCREEN.MAIN} component={HomeStackScreen} />
			<Tab.Screen name={constants.SCREEN.COMUNITY} component={ComunityScreen} />
			<Tab.Screen name={constants.SCREEN.HELP} component={HelpScreen} />
			<Tab.Screen name={constants.SCREEN.PROFILE} component={ProfileScreen} />
		</Tab.Navigator>
	</NavigationContainer>
);

export default Router;