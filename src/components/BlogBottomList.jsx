import React from 'react';
import { View, StyleSheet, FlatList, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { data } from '../data/Data';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const BlogBottomList = () => {
    const navigation = useNavigation();

    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    const renderItem = ({ item }) => {
        const handlePress = () => {
            navigation.navigate('Detail', { item });
        };

        return (
            <TouchableOpacity onPress={handlePress} style={styles.container}>
                <View backgroundColor={isDarkMode ? '#17202A' : '#F4F6F7'} style={styles.content}>
                    <Image style={styles.img} source={item.img} />
                    <View>
                        <View style={styles.txtContainer}>
                            <Text style={[styles.txt, { color: isDarkMode ? '#fff' : '#000' }]}>{item.txt}</Text>
                        </View>
                        <View style={styles.imgContent}>
                            <Image style={styles.author} source={item.user} />
                            <Text style={[styles.name, { color: isDarkMode ? '#566573' : '#000' }]}>{item.author}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView backgroundColor={isDarkMode ? '#000' : '#fff'}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 16,
    },
    content: {
        flexDirection: "row",
        paddingVertical: 12,
        alignItems: "center",
        width: '89%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 8,
    },
    imgContent: {
        flexDirection: 'row',
        alignItems: "center"
    },
    txt: {
        width: "90%",
        fontSize: 14,
        marginBottom: 5,
        fontWeight: "500"
    },
    name: {
        fontSize: 15,
    },
    author: {
        marginRight: 7,
        marginTop: 2,
        width: '100%',
        width: 25,
        height: 25,
        borderRadius: 50,
        resizeMode: "cover",
    },
    img: {
        marginHorizontal: 10,
        width: '100%',
        width: 70,
        height: 70,
        borderRadius: 8,
        resizeMode: "cover",
    },
});

export default BlogBottomList;
