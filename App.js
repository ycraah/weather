import { SafeAreaView, StyleSheet } from 'react-native'
import { Text } from 'react-native'

export default function App() {
  return (
    <SafeAreaView>
      <Text style={styles.text}>안녕하세요</Text>
      <Text style={{ ...styles.text, color: 'blue' }}>안녕하세요!!!</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: 'red',
    fontWeigth: 'bold',
  },
})
