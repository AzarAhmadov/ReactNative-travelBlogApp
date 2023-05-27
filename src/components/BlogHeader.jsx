import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../app/features/DarkMode/DarkModeSlice';

const BlogHeader = () => {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const dispatch = useDispatch();
    const handleToggleDarkMode = () => {
        dispatch(toggleDarkMode());
    };

    const [modalVisible, setModalVisible] = useState(false);
    const [searchText, setSearchText] = useState('');
    const handleSearchIconPress = () => {
        setModalVisible(true);
    };
    const handleCloseModal = () => {
        setModalVisible(false);
        setSearchText('');
    };

    return (
        <SafeAreaView style={styles.container} backgroundColor={isDarkMode ? '#000' : '#fff'}>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={handleToggleDarkMode}>
                    <Icon name={isDarkMode ? 'sun-o' : 'moon-o'} size={35} color={isDarkMode ? '#fff' : '#000'} />
                </TouchableOpacity>

                <View style={styles.right}>
                    <TouchableOpacity onPress={handleSearchIconPress}>
                        <Icon name="search" size={27} color={isDarkMode ? '#fff' : '#000'} />
                    </TouchableOpacity>
                    <View>
                        <Image style={styles.user} source={require('../../assets/images/user.png')} />
                    </View>
                </View>
            </View>

            <View style={styles.title}>
                <Text style={[styles.small, { color: isDarkMode ? '#fff' : '#000' }]}> Your Daily </Text>
                <Text style={[styles.medium, { color: isDarkMode ? '#fff' : '#000' }]}> Recommendation </Text>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TextInput
                            style={styles.searchInput}
                            value={searchText}
                            onChangeText={setSearchText}
                            placeholder="Search"
                            placeholderTextColor="#fff"
                        />
                        <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    right: {
        flexDirection: "row",
        alignItems: "center",
    },
    user: {
        marginLeft: 20,
        width: 45,
        height: 45,
        borderRadius: 22.5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D0D3D4",
    },
    title: {
        paddingTop: 30,
        paddingBottom: 30,
        paddingHorizontal: 13,
    },
    small: {
        fontSize: 30,
        color: "#B3B6B7",
    },
    medium: {
        fontSize: 35,
        fontWeight: "bold",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "#34495E",
        borderRadius: 10,
        padding: 20,
        width: "80%",
        alignItems: "center",
    },
    searchInput: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        color: "#fff"
    },
    closeButton: {
        backgroundColor: "#2C3E50",
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});


export default BlogHeader;
