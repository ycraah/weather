import { SafeAreaView, StatusBar } from 'react-native'
import { TextInput } from 'react-native'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <TextInput
        placeholder="이름을 입력하십시오"
        onChangeText={(text) => console.log(text)}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onEndEditing={() => console.log('onEndEditing')}
      />
    </SafeAreaView>
  )
}
