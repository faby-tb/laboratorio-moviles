import React, {useEffect, useState} from 'react'
import { View, ScrollView,  Text, Image, StyleSheet, SafeAreaView } from 'react-native'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

import constants from '../utils/constants';

export const DetailsScreen = ({ navigation, route }) => {
    
    const { card } = route.params;

    useEffect(() => {
        navigation.setOptions({
            headerLeft: (props) => {
                return (
                    <View style={styles.containerButtonIcon}>
                        <MaterialIcons
                            name="keyboard-backspace"
                            size={24}
                            color={constants.COLORS.PRIMARY}
                            {... props}
                            
                        />
                  </View>  
                );
            } 
        }); 
    });

    return (
        <SafeAreaView style={styles.container} stickyHeaderIndices={[0,1]}>
            <View> 
                <View style={styles.titleContainer}>
                    <Text style={styles.title}> {card.name} </Text>
                </View>
            </View>
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.contentPrimary}>
                        <View style={styles.yes}/>
                        <View>
                            <Text style={styles.halfParagraph}  numberOfLines={1}><FontAwesome name="user" size={16} color={constants.COLORS.PRIMARY}/> Artist: <Text style={{fontWeight: 'bold'}}>{card.artist}</Text></Text>
                            <Text style={styles.halfParagraph}> <Text style={{color:constants.COLORS.PRIMARY,fontSize:16}}>#</Text>  Number: <Text style={{fontWeight: 'bold'}}>{card.number}</Text></Text>
                            <Text style={styles.halfParagraphRounded}>Mana cost: <Text style={styles.circle}>{card.cmc}</Text></Text>
                            <Text style={styles.halfParagraphRounded}>Multiverse: <Text style={styles.circle}>{card.multiverseid}</Text></Text>
                            <Text style={styles.halfParagraph}><Text style={styles.title}>Rarity:</Text> {card.rarity}</Text>
                        </View>
                    </View>
                    <View style={styles.contentSecondary}>
                            <Text style={styles.paragraph}><Text style={styles.title}>Set: </Text>{card.set}</Text>
                            <Text style={styles.paragraph}>{card.text}</Text>
                            <Text style={styles.backParagraph}><Text style={styles.title}>Original Type: </Text>{card.originalType}</Text>
                            <Text style={styles.frontParagraph}><Text style={styles.title}>Original Text: </Text>{card.originalText}</Text>
                            <Text style={card.rulings[0] != null ? styles.backParagraph : styles.null}><Text style={styles.title}>Date: </Text>{card.rulings[0] != null ? card.rulings[0].date : "null"}</Text>
                            <Text style={card.rulings[0] != null ? styles.backParagraph : styles.null}><Text style={styles.title}>Rulings: </Text>{card.rulings[0] != null ? card.rulings[0].text : "null"}</Text>
                        </View>
                    </View>
                <View style={{height : 100}}/>
            </ScrollView>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: constants.COLORS.DARK,
    },
    null:{
        display: "none"
    },
    yes:{
        backgroundColor: constants.COLORS.LIGHT_GRAY,
        width:'40%',
        height: 220,
        marginTop: 20,
        marginRight: 10,  
        borderRadius: 20
    },
    content: {
        paddingBottom: 0,
        backgroundColor: constants.COLORS.DARK,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        zIndex: 15,
    },
    contentPrimary: {
        position: 'relative',
        flexDirection: 'row',
        paddingHorizontal: 20,
        color: constants.COLORS.WHITE,
        zIndex: 10,
    },
    contentSecondary: {
        position: 'relative',
        paddingHorizontal: 20,
        color: constants.COLORS.WHITE,
        zIndex: 10,
    },
    titleContainer: {
        paddingRight: 10,
        paddingLeft: 70,
        paddingVertical: 20,
        paddingBottom: 20,
        backgroundColor: constants.COLORS.GRAY,
        zIndex: 50,
    },
    poster: {
		width: "100",
		height: 135,
		backgroundColor: "#000000",
		borderRadius: 16,
	},
    title: {
        color: constants.COLORS.WHITE,
        fontWeight: "bold",
        flexGrow: 1,
        fontSize:16,
    },
    circle:{
        fontWeight: "bold"
    },
    poster: {
        borderRadius: 16,
    },
    backParagraph: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: '300',
        color: constants.COLORS.WHITE,
        lineHeight: 22,
        backgroundColor: constants.COLORS.LIGHT_GRAY2,
        paddingTop: 20,
        paddingBottom: 30,
        paddingHorizontal: 10,
        borderRadius: 20,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        textAlign: "justify",
    },
    frontParagraph: {
        marginTop: 10,
        top: -30,
        fontSize: 14,
        fontWeight: '300',
        color: constants.COLORS.WHITE,
        lineHeight: 22,
        backgroundColor: constants.COLORS.GRAY,
        paddingTop: 15,
        paddingBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 20,
        textAlign: "justify",
    },
    paragraph: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: '300',
        color: constants.COLORS.WHITE,
        lineHeight: 22,
        backgroundColor: constants.COLORS.GRAY,
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 20,
        textAlign: "justify",
    },
    halfParagraph: {
        width:180,
        marginTop: 10,
        fontSize: 12,
        fontWeight: '300',
        color: constants.COLORS.WHITE,
        lineHeight: 22,
        backgroundColor: constants.COLORS.GRAY,
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        textAlign: "justify",
    },
    halfParagraphRounded: {
        width:180,
        marginTop: 10,
        fontSize: 12,
        fontWeight: '300',
        color: constants.COLORS.WHITE,
        lineHeight: 22,
        backgroundColor: constants.COLORS.GRAY,
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 50,
    },
    containerButtonIcon: {
        marginTop: 25,
		borderRadius: 20,
		width: 36,
		height: 36,
		margin: 20,
		justifyContent: 'center',
        alignItems: 'center',
	},
});