import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { category } from '../data/Data';
import { useSelector } from 'react-redux';

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState(category[0].id);
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    const renderItem = ({ item }) => {
        const isActive = item.id === activeCategory;
        return (
            <TouchableOpacity
                style={[
                    styles.categoryContent,
                    isActive && styles.activeCategoryContent
                ]}
                onPress={() => setActiveCategory(item.id)}
            >
                <Text style={[
                    styles.category,
                    isActive && styles.activeCategory
                ]}
                >{item.text}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View backgroundColor={isDarkMode ? '#000' : '#fff'} style={styles.container}>
            <FlatList
                data={category}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    flatListContent: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 10,
        width: "100%",
    },
    categoryContent: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        marginRight: 10,
    },
    activeCategoryContent: {
        backgroundColor: "#2E4053"
    },
    category: {
        fontSize: 17,
        color: "#839192",
        fontWeight: '500'
    },
    activeCategory: {
        color: "#fff"
    },
});

export default Categories;
