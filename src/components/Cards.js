import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

import axios from '../utils/axios';
import constants from '../utils/constants';

import Card from './Card';

const Cards = ({ navigation, type }) => {
	const [cards, setCards] = React.useState([]);
	const [filteredCards, setFilteredCards] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	useEffect(() => {
		axios
			.get(`cards`)
			.then((res) => {
				setCards(res.data.cards);
				setLoading(false);
				filter;
			})
			.catch((err) => console.log(err));
	}, [setCards]);

	const filter = () => {
		useEffect(() => {
			cards.forEach(card => {
				console.log(card.type);
				if(type == card.type){
					setFilteredCards(...card);
				}
			});
		}, [setFilteredCards])
	};	
	
	return !loading ? ( 
		<FlatList
			style={styles.list}
			data={cards}
			renderItem={({ item }) => <Card card={item} navigation={navigation} />}
			keyExtractor={(item) => `${item.id}`}
			contentInset={{ bottom: 80, top: 0 }}
		/>
	) : (
		<View style={[styles.container, styles.horizontal]}>
			<ActivityIndicator size="large" color={constants.COLORS.PRIMARY} />
		</View>
	);
};

const styles = StyleSheet.create({
	list: {
		paddingHorizontal: 15,
		marginHorizontal: 0,
	},
	container: {
		flex: 1,
		justifyContent: 'flex-start',
	},
});

export default Cards;