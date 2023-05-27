import React from 'react';
import { View, StyleSheet, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { data } from '../data/Data';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const BlogList = () => {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        const handlePress = () => {
            navigation.navigate('Detail', { item });
        };

        return (
            <View style={styles.card}>
                <TouchableOpacity onPress={handlePress}>
                    <View style={styles.content}>
                        <Image source={item.img} style={styles.image} />
                        <View style={styles.contentText}>
                            <Text style={styles.top}>{item.txt}</Text>
                            <View style={styles.userArea}>
                                <Image style={styles.userImg} source={item.user} />
                                <Text style={styles.bottom}>{item.author}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View backgroundColor={isDarkMode ? '#000' : '#fff'} style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 23,
    },
    card: {
        marginRight: 15
    },
    content: {
        width: 200,
        position: 'relative',
    },
    contentText: {
        position: 'absolute',
        color: '#fff',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(20, 20, 20, 0.45)',
        borderRadius: 7,
        justifyContent: "flex-end",
        padding: 15,
    },
    top: {
        color: '#fff',
        fontSize: 17,
    },
    bottom: {
        color: '#fff',
        fontSize: 15,
    },
    image: {
        borderRadius: 7,
        width: '100%',
        height: 304,
        resizeMode: 'cover',
        marginRight: 20,
    },
    userArea: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center"
    },
    userImg: {
        borderRadius: 50,
        width: 35,
        height: 35,
        resizeMode: 'cover',
        marginRight: 6,
    },
});

export default BlogList;