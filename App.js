import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const symbolsToColorGenerate = '0123456789ABCDEF';

export default function App() {
  const [bgColor, setBgColor] = useState('#FFF');

  function getRandomColor() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += symbolsToColorGenerate[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const handlePress = () => {
    const newColor = getRandomColor();
    setBgColor(newColor);
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: bgColor }]}
      onPress={handlePress}
    >
      <Text style={styles.text}>Hello there</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#000',
  },
  colorCode: {
    marginTop: 10,
    fontSize: 18,
    color: '#000',
  },
});

