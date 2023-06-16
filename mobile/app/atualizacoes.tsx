import { StatusBar } from 'expo-status-bar'
import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'

import blrBg from '../src/assets/bg-blur.png'
import TiberinaLogo from '../src/assets/tiberina-logo.svg'

export default function Atualizacoes() {
  const router = useRouter()
  return (
    <ImageBackground
      source={blrBg}
      className="relative flex-1 items-center bg-gray-900"
    >
      <View className="mt-48 items-center justify-center">
        <TiberinaLogo className="pt-5" />
        <View className="mt-20">
          <Text className="mb-16 font-title text-2xl text-gray-50">
            ERP Manufatura Tiberina
          </Text>
          <Text className="text-1xl mb-4 font-body text-gray-50">
            Atualizações
          </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            className="mb-4 rounded-xl bg-gray-100 px-5 py-2"
            onPress={() => router.push('/especificos')}
          >
            <Text>Específicos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            className="mb-4 rounded-xl bg-gray-100 px-5 py-2"
            onPress={() => router.push('/menu')}
          >
            <Text onPress={() => router.push('/menu')}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
