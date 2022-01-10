import React, {useEffect} from 'react'
import { View, StyleSheet} from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const SIZE = 100;


const App = () => {
  const progress = useSharedValue(1);

  const reanimatedStyle = useAnimatedStyle(() => ({
    opacity: progress.value
  }), []);

  useEffect(() => {
    progress.value = withTiming(0, {duration: 5000});
  }, [])
  return (
    <View style={styles.main}>
      <Animated.View style={[{
        height: SIZE, width: SIZE,backgroundColor: 'red',
      }, reanimatedStyle]} />
    </View>
  )
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default App
