import React from 'react';
import { Text, View, StyleSheet, Image } from "react-native";
import theme from '../themes/theme';

const style = StyleSheet.create({
    containerTop: {
        marginLeft: 10,
        flexDirection: 'row',
    },
    containerMiddle: {
        marginLeft: 95,
        marginRight: 95,
        backgroundColor: theme.colors.primary,
        padding: 3,
        borderRadius: 5,
        width: 'auto',
        textAlign: 'center',
        flexGrow: 2
    },
    containerBottom: {
        marginLeft: 95,
        marginTop: 10,
        flexDirection: 'row'
    },
    ownImage: {
        width: 50,
        height: 50,
    },
    repositoryName: {
        fontWeight: theme.fontWeights.bold,
        color: theme.colors.textPrimary
    },
    repositoryDescription: {
        color: theme.colors.textSecondary,
        textAlign: 'auto',
    },
    language: {
        color: "#FFFFFF",
        backgroundColor: theme.colors.primary,
        marginLeft: 95,
        padding: 3,
        borderRadius: 5,
        textAlign: 'center',
        maxWidth: 90
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    statsLabel: {
        justifyContent: 'center',
        marginRight: 50,
        marginTop: 10,
        textAlign: 'center',
        color: theme.colors.textSecondary
    },
    stats: {
        fontWeight: theme.fontWeights.bold,
        justifyContent: 'center',
        marginRight: 50,
        marginTop: 10,
        textAlign: 'center'
    }
});

const format = (number) => {
    switch(true){
        case number > 1000 : 
            return (number / 1000).toFixed(1) + " k"; 
        case number > 1000000:
            return (number / 100000).toFixed + " M";
        default:
            return number.toString();
    }

};



const RepositoryItem = ({ repository }) => {
    return (
        <View style={style.container}>

            <View style={style.containerTop}>

                <View style={{ margin: 10 }}>
                    <Image source={repository.ownerAvatarUrl} style={style.ownImage} />
                </View>

                <View style={{ margin: 10 }}>
                    <Text style={style.repositoryName}> {repository.fullName} </Text>
                    <Text style={style.repositoryDescription}> {repository.description} </Text>
                </View>

            </View>

            <View >
                <Text style={style.language}>{repository.language}</Text>
            </View>

            <View style={style.containerBottom}>

                <View style={style.statsContainer}>

                    <View>
                        <Text style={style.stats}>{format(repository.stargazersCount)}</Text>
                        <Text style={style.statsLabel}>Stars</Text>
                    </View>

                    <View>
                        <Text style={style.stats}>{format(repository.forksCount)}</Text>
                        <Text style={style.statsLabel}>Forks</Text>
                    </View>

                    <View>
                        <Text style={style.stats}>{format(repository.reviewCount)}</Text>
                        <Text style={style.statsLabel}>Reviews</Text>
                    </View>

                    <View>
                        <Text style={style.stats}>{format(repository.ratingAverage)}</Text>
                        <Text style={style.statsLabel}>Rating</Text>
                    </View>

                </View>
            </View>

        </View>
    );
};

export default RepositoryItem;
