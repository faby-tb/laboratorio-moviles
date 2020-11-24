import React from 'react';

import { Text, SafeAreaView, StyleSheet } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons'; 

import constants from '../utils/constants';

export const ComunityScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<FontAwesome5 name="users" size={128} color={constants.COLORS.PRIMARY}/>
			<Text style={styles.textProfile}>Comunity</Text>
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