import React from 'react';
import { StatusBar, SafeAreaView, View, FlatList } from 'react-native';
import BlogHeader from '../components/BlogHeader';
import BlogList from '../components/BlogList';
import Categories from '../components/Categories';
import BlogBottomList from '../components/BlogBottomList';

const Blog = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <FlatList
          data={[{ key: 'header' }, { key: 'list' }, { key: 'categories' }, { key: 'bottomList' }]}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            if (item.key === 'header') {
              return <BlogHeader />;
            } else if (item.key === 'list') {
              return <BlogList />;
            } else if (item.key === 'categories') {
              return <Categories />;
            } else if (item.key === 'bottomList') {
              return <BlogBottomList />;
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default Blog;
