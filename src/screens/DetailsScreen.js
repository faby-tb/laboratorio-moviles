import React, {useEffect, useState} from 'react'
import { View, ScrollView,  Text, Image, StyleSheet, SafeAreaView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

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
                    <View style={styles.contentSecondary}>
                        <Image
                        source={{
                            uri: `${card.imageUrl}`,
                        }}/>
                            <Text style={styles.paragraph}><Text style={styles.title}>Set: </Text>{card.set}</Text>
                            <Text style={styles.paragraph}>{card.text}</Text>
                            <Text style={styles.backParagraph}><Text style={styles.title}>Original Type: </Text>{card.originalType}</Text>
                            <Text style={styles.frontParagraph}><Text style={styles.title}>Original Text: </Text>{card.originalText}</Text>
                            <Text style={styles.backParagraph}><Text style={styles.title}>Date: </Text>{card.rulings[0].date}</Text>
                            <Text style={styles.frontParagraph}><Text style={styles.title}>Rulings: </Text>{card.rulings[0].text}</Text>
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
    content: {
        paddingBottom: 0,
        backgroundColor: constants.COLORS.DARK,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        zIndex: 15,
    },
    contentSecondary: {
        position: 'relative',
        paddingHorizontal: 30,
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
    title: {
        color: constants.COLORS.WHITE,
        fontWeight: "bold",
        flexGrow: 1,
        fontSize:16,
    },
    release_date: {
        fontSize: 12,
        textTransform: "capitalize",
        paddingBottom: 10,
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