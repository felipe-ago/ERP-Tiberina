import { StatusBar } from 'expo-status-bar'
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blrBg from '../src/assets/bg-blur.png'
import TiberinaLogo from '../src/assets/tiberina-logo.svg'
import { useRouter } from 'expo-router'

export default function App() {
  const router = useRouter()

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={blrBg}
      className="relative flex-1 items-center bg-gray-900"
    >
      <View className="mt-48 items-center justify-center">
        <TiberinaLogo className="pt-5" />
        <View className="mt-24">
          <Text className="mb-16 font-title text-2xl text-gray-50">
            ERP Manufatura Tiberina
          </Text>
          <Text className="text-1xl mb-4 font-body text-gray-50">
            Aqui ficará a tela de Login
          </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            className="rounded-xl bg-gray-100 px-5 py-2"
            onPress={() => router.push('/menu')}
          >
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
