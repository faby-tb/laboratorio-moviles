import React from 'react';

import { View, Text, Pressable, StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import constants from '../utils/constants';

import Cards from '../components/Cards';

const { width } = Dimensions.get('screen');

const ActiveIndicator = () => {
	return (
		<View style={styles.indicatorContainer}>
			<View style={[styles.indicator]}></View>
			<View style={[styles.indicator, styles.indicatorMin]}></View>
		</View>
	);
};

export const HomeScreen = ({ navigation, route }) => {
    const [activeTab, setActiveTab] = React.useState('artifact');

    return(<SafeAreaView style={styles.app}>
        <View style={styles.titleContainer}>
            <MaterialCommunityIcons style={styles.icon} name="google-controller" size={24} color={constants.COLORS.WHITE} />
            <Text style={styles.title}> Magic: The Gathering</Text>
        </View>

		<ScrollView style={styles.tabstop} horizontal={true}>
			<View style={styles.tabContainer} >
				<Pressable style={styles.tab} onPress={() => setActiveTab('artifact')}>
					<Text
						style={[
							styles.tabText,
							{
								backgroundColor:
								activeTab === 'artifact'
									? constants.COLORS.PRIMARY
									: constants.COLORS.LIGHT_GRAY2,
							},
						]}
					>
						ARTIFACT
					</Text>
					{activeTab === 'artifact' && <ActiveIndicator />}
				</Pressable>
				<Pressable style={styles.tab} onPress={() => setActiveTab('character')}>
					<Text
						style={[
							styles.tabText,
							{
								backgroundColor:
								activeTab === 'character'
									? constants.COLORS.PRIMARY
									: constants.COLORS.LIGHT_GRAY2,
							},
						]}
					>
						CHARACTER
					</Text>
					{activeTab === 'character' && <ActiveIndicator />}
				</Pressable>
				<Pressable style={styles.tab} onPress={() => setActiveTab('creature')}>
					<Text
						style={[
							styles.tabText,
							{
								backgroundColor:
								activeTab === 'creature'
									? constants.COLORS.PRIMARY
									: constants.COLORS.LIGHT_GRAY2,
							},
						]}
					>
						CREATURE
					</Text>
					{activeTab === 'creature' && <ActiveIndicator />}
				</Pressable>
			</View>
		</ScrollView>
		{activeTab === 'artifact' && <Cards type="Artifact" {...{ navigation }} />}
		{activeTab === 'character' && <Cards type="Character" {...{ navigation }} />}
		{activeTab === 'creature' && <Cards type="Creature" {...{ navigation }} />}
    </SafeAreaView>);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flexWrap: 'wrap',
	},
	app: {
		backgroundColor: constants.COLORS.DARK,
		flex: 1,
	},
	icon: {
		backgroundColor: constants.COLORS.PRIMARY,
		padding: 3,
		borderRadius: 50,
	},
	container: {
        flex: 1,
		backgroundColor: constants.COLORS.LIGHT_GRAY2
	},
	titleContainer: {
		paddingHorizontal: 25,
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 8,
		paddingBottom: 8,
		backgroundColor: constants.COLORS.GRAY,
	},
	title: {
		color: constants.COLORS.WHITE,
		fontSize: 18,
		fontWeight: "bold"
	},
	tabstop: {
		marginVertical: 8,
		marginLeft: 0,
	},
	tab: {
		alignContent: "space-around",
		marginHorizontal: 8,
	},
	tabContainer: {
		width,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	tabText: {
        fontSize: 12,
        color: constants.COLORS.WHITE,
        paddingVertical: 6,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
        fontWeight: "bold",
	},
	indicatorContainer: {
		flexDirection: 'row',
		marginVertical: 5,
		alignItems: 'center',
        justifyContent: 'center',
	},
	indicator: {
		height: 3,
		width: 20,
		borderRadius: 10,
	},
	indicatorMin: {
		width: 5,
		marginLeft: 5,
	},
});