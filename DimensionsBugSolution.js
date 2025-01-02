```javascript
import React, { useEffect, useState } from 'react';
import { Dimensions, View, StyleSheet, Text } from 'react-native';

const DimensionsBugSolution = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', (newDimensions) => {
      setDimensions(newDimensions.window);
    });
    return () => subscription?.remove();
  }, []);

  return (
    <View style={[styles.container, { width: dimensions.width, height: dimensions.height }]}>
      <Text>Width: {dimensions.width}</Text>
      <Text>Height: {dimensions.height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DimensionsBugSolution;
```