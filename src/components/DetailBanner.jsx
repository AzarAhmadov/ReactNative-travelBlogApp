import React from 'react';
import { View, StyleSheet, SafeAreaView, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { data } from '../data/Data';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

const DetailBanner = () => {
    const route = useRoute();
    const { item } = route.params;
    const selectedData = data.find(d => item.id === d.id);
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const navigation = useNavigation();

    const handleArrowClick = () => {
        navigation.navigate('Blog');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.imgContent}>
                <Image style={styles.img} source={selectedData.img} />
                <TouchableOpacity onPress={handleArrowClick} style={styles.arrow}>
                    <Icon name="chevron-left" size={23} color="#2C3E50" style={{ marginLeft: -4 }} />
                </TouchableOpacity>
                <View style={styles.bannerText}>
                    <Text style={styles.bannerTxt}>{selectedData.txt}</Text>
                    <View style={styles.bannerBottom}>
                        <Image style={styles.bannerBottomImg} source={selectedData.user} />
                        <Text style={styles.bannerBottomText}>{selectedData.author}</Text>
                        <Icon
                            name="clock-o" size={23}
                            color="#fff" />
                        <Text style={styles.bannerTime}>
                            5 min
                        </Text>
                    </View>
                </View>
            </View>
            <ScrollView style={[styles.text, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.textArea}>
                    <Text style={[styles.textItem, { color: isDarkMode ? '#fff' : '#000' }]}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, similique ipsam. Laudantium aperiam, dolor, nam nemo esse similique, delectus magnam aspernatur rerum nostrum suscipit quos assumenda et facilis porro tempora.
                    </Text>
                    <Text style={[styles.textItem, { color: isDarkMode ? '#fff' : '#000' }]}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, similique ipsam. Laudantium aperiam, dolor, nam nemo esse similique, delectus magnam aspernatur rerum nostrum suscipit quos assumenda et facilis porro tempora.
                    </Text>
                    <Text style={[styles.textItem, { color: isDarkMode ? '#fff' : '#000' }]}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, similique ipsam. Laudantium aperiam, dolor, nam nemo esse similique, delectus magnam aspernatur rerum nostrum suscipit quos assumenda et facilis porro tempora.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bannerBottom: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },
    bannerBottomImg: {
        width: 55,
        height: 55,
        resizeMode: "cover",
        borderRadius: 50,
    },
    bannerTime: {
        fontSize: 20,
        color: "#fff",
        marginLeft: 6
    },
    bannerBottomText: {
        color: "#fff",
        fontSize: 22,
        marginLeft: 10,
        marginRight: 15
    },
    imgContent: {
        flex: 1,
        position: "relative",
    },
    bannerText: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: "rgba(0,0,0,0.45)",
        justifyContent: "flex-end",
        paddingBottom: 60,
        paddingLeft: 20
    },
    bannerTxt: {
        color: '#fff',
        fontSize: 27,
        fontWeight: 'bold',
        width: "100%"
    },
    img: {
        width: '100%',
        resizeMode: 'cover',
        flex: 1,
    },
    textArea: {
        paddingVertical: 20
    },
    text: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: -26
    },
    textItem: {
        fontSize: 17,
        paddingHorizontal: 30,
        paddingVertical: 10,
        fontWeight: '300',
        lineHeight: 26
    },
    arrow: {
        position: 'absolute',
        top: 20,
        left: 15,
        backgroundColor: '#E5E7E9',
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1
    }
});

export default DetailBanner;
