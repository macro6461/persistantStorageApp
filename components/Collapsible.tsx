import { PropsWithChildren, useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export function Collapsible({ postId, children, title, isOpenProp, handleSavedOpen}: PropsWithChildren & { title: string, isOpenProp: boolean, handleSavedOpen: Function, postId: number }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    console.log("IN USE EFFECT: ", isOpenProp)
    setIsOpen(isOpenProp)
  }, [isOpenProp])

  const handleIsOpen = (val: boolean) =>{
    setIsOpen(val)
    handleSavedOpen(postId, val)
  }

  const theme = useColorScheme() ?? 'light';

  console.log("IS OPEN COLLAPSE: ", isOpen)

  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => handleIsOpen(!isOpen )}
        activeOpacity={0.8}>
        <IconSymbol
          name="chevron.right"
          size={18}
          weight="medium"
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
          style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
        />

        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});
