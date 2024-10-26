import { View, StatusBar, StyleSheet, Text } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cityCon}>
        <Text style={styles.city}>Ansan</Text>
      </View>
      <View style={styles.weatherCon}>
        <View style={styles.day}>
          <Text style={styles.regDate}>10월 13일, 일, 13:18</Text>
          <Text style={styles.desc}>맑음</Text>
        </View>
        <View style={styles.tempCon}>
          <Text style={styles.temp}>24</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe01a',
  },
  cityCon: {
    flex: 1,
  },
  city: {
    flex: 1,
    marginTop: 50,
    paddingTop: 30,
    fontSize: 40,
    textAlign: 'center',
    fontweight: 'bold',
  },
  weatherCon: {
    flex: 3,
  },
  day: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  regDate: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    backgroundColor: 'black',
    color: 'white',
    fontWieght: 'bold',
    borderRadius: 20,
    overflow: 'hidden',
  },
  desc: {
    flex: 1.5,
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  tempCon: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    fontSize: 120,
  },
})
