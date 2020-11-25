import React from 'react';
import { View, StyleSheet, Image, Pressable, Text, Dimensions} from 'react-native';

import constants from '../utils/constants';

const { width } = Dimensions.get('screen');

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
					<Text style={styles.mana}>
						{cmc}
					</Text>
					<Text numberOfLines={1}  style={styles.title}>
						{name}
					</Text>
					<Text style={styles.rarity}>
						{rarity}
					</Text>
				</View>
			</View>
					<Text style={styles.boton}>
						Saber más
					</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	card: {
		marginLeft: width/4,
		backgroundColor: constants.COLORS.GRAY,
		marginVertical: 5,
		height: 220,
		width: '45%',
		paddingBottom: 20,
		borderRadius: 15,
		elevation: 10,
	},
	titleContainer: {
		flexDirection: 'column',
	},
	textContainer:{
		height: 60,
		flexDirection: 'row',
		left: 6,
		top: 4
	},
	title: {
		color: constants.COLORS.WHITE,
		fontWeight: 'bold',
		flexGrow: 1,
		flexWrap: 'wrap',
		marginRight: 16,
		fontSize: 18,
		top: 4
	},
	mana: {
		color: constants.COLORS.WHITE,
		fontSize: 18,
		backgroundColor: constants.COLORS.LIGHT_GRAY2,
		width: 30,
		height: 30,
		borderRadius: 50,
		position: 'absolute',
		textAlign: "center",
		textAlignVertical: "center",
		fontWeight: "bold",
		left: 135,
		top: -20
		
	},
	boton: {
		color: constants.COLORS.WHITE,
		backgroundColor: constants.COLORS.PRIMARY,
		width: 150,
		textAlign: "center",
		textAlignVertical: "center",
		paddingVertical: 9,
		borderRadius: 10,
		marginHorizontal: 6,
		top: 4
	},
	rarity: {
		color: constants.COLORS.LIGHT_GRAY,
		fontSize: 14,
		bottom: 10,
	},
	poster: {
		width: "100%",
		height: 170,
		backgroundColor: "#000000",
		borderRadius: 15,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 0,
	},
});

export default Card;