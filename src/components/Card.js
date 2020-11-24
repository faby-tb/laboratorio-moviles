import React from 'react';
import { View, StyleSheet, Image, Pressable, Text } from 'react-native';

import constants from '../utils/constants';

const Card = ({ card, navigation }) => {
	const { name, cmc, number, multiverseid, setName, rulings, originalText, originalType, type, rarity, artist, imageUrl, text } = card;

	const loadCard = () => {
		navigation.navigate(constants.SCREEN.DETAILS, { card });
	};

	return (
		<Pressable style={styles.card} onPress={loadCard}>
			<Image
				resizeMode="cover"
				style={styles.poster}
				source={{
					uri: `${imageUrl}`,
				}}
			/>
			<View style={styles.textContainer}>
				<View style={styles.titleContainer}>
					<Text numberOfLines={1}  style={styles.title}>
						{name}
					</Text>
					<Text style={styles.rarity}>
						{rarity}
					</Text>
					<Text style={styles.boton}>
						Saber más
					</Text>
				</View>
				<Text style={styles.mana}>
					{cmc}
				</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: constants.COLORS.GRAY,
		marginVertical: 5,
		height: 220,
		width: '40%',
		paddingBottom: 20,
		borderRadius: 20,
	},
	titleContainer: {
		flexDirection: 'column',
	},
	textContainer:{
		height: 60,
		flexDirection: 'row',
		left: 4
	},
	title: {
		color: constants.COLORS.WHITE,
		fontWeight: 'bold',
		flexGrow: 1,
		flexWrap: 'wrap',
		marginRight: 12,
		fontSize: 12,
		top: 4
	},
	mana: {
		color: constants.COLORS.WHITE,
		fontSize: 14,
		backgroundColor: constants.COLORS.LIGHT_GRAY2,
		width: 35,
		height: 35,
		borderRadius: 50,
		position: 'absolute',
		textAlign: "center",
		textAlignVertical: "center",
		fontWeight: "bold",
		left: 110,
		top: -20
		
	},
	boton: {
		color: constants.COLORS.WHITE,
		backgroundColor: constants.COLORS.PRIMARY,
		width: 125,
		textAlign: "center",
		textAlignVertical: "center",
		paddingVertical: 10,
		borderRadius: 15,
		top: 10
	},
	rarity: {
		color: constants.COLORS.LIGHT_GRAY,
		fontSize: 12,
	},
	poster: {
		width: "100%",
		height: 135,
		backgroundColor: "#000000",
		borderRadius: 16,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 0,
	},
});

export default Card;