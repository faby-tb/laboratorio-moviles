import React from 'react';

import { Text, SafeAreaView, StyleSheet } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 

import constants from '../utils/constants';

export const ProfileScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<FontAwesome name="user" size={128} color={constants.COLORS.PRIMARY}/>
			<Text style={styles.textProfile}>Profile</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: constants.COLORS.DARK
	},
	textProfile: {
		fontSize: 24,
		fontWeight: 'bold',
		letterSpacing: 1,
		color: constants.COLORS.PRIMARY,
	}
});