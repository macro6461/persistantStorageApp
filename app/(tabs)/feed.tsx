import {useState, useEffect} from 'react'

import { StyleSheet } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import Post from '../../components/Post'
import data from '../data.json'

const saveData = async(key:string, value: number[])=>{
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error("Failed to save data", e);
  }
}

const loadData = async(key:string)=>{
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Failed to load data", e);
  }
}

const removeData = async(key:string)=>{
  
}

export default function TabTwoScreen() {

  const [opened, setOpened] = useState<number[]>([])

  useEffect(()=>{
    const myFunc = async () => {
      try {
        let res = await loadData("openedPosts")
        setOpened(res)
      } catch(e){
        console.log(e)
      }
    }
    myFunc()
  }, [])

  const handleSavedOpen = (postId: number) => {
    let i = opened.indexOf(postId)
    let myOpened = [...opened]
    if (i > -1){
      myOpened = [...opened.slice(0, i), ...opened.slice(i + 1)]
    } else {
      myOpened.push(postId)
    }
    setOpened(myOpened)
    saveData("openedPosts", myOpened)
  } 

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Feed</ThemedText>
      </ThemedView>
      {data.posts.map(post=>{
        return <Post key={post.postId} post={post} handleSavedOpen={handleSavedOpen} isOpenProp={opened.indexOf(post.postId) > -1}/>
      })}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
