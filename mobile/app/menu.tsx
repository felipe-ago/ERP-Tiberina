import { StatusBar } from 'expo-status-bar'
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Modal,
  TextInput,
} from 'react-native'

import { useRouter } from 'expo-router'
import React, { useState } from 'react'

import blrBg from '../src/assets/bg-blur.png'
import TiberinaLogo from '../src/assets/tiberina-logo.svg'

export default function Menu() {
  const router = useRouter()

  const [modalVisible, setModalVisible] = useState(false)
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
          <TouchableOpacity
            activeOpacity={0.5}
            className="mb-4 rounded-xl bg-gray-100 px-5 py-2"
            onPress={() => router.push('/restransf')}
          >
            <Text>Reservar Transferências</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            className="mb-4 rounded-xl bg-gray-100 px-5 py-2"
            onPress={() => router.push('/consulta')}
          >
            <Text>Consulta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            className="rounded-xl bg-gray-100 px-5 py-2"
            onPress={() => router.push('/')}
          >
            <Text>Voltar</Text>
          </TouchableOpacity>
        </View>

        <Modal
          className=""
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View className="ml-14 mt-32 h-auto w-3/4 items-center justify-between rounded-xl bg-gray-500">
            <Text className="mt-4 text-center font-alt text-2xl text-white">
              Opções
            </Text>

            <Text className="mt-4 text-center font-alt text-xl text-white">
              IP:
            </Text>
            <TextInput
              className="w-3/4 rounded-xl border border-gray-50 p-1 pl-2 font-body text-gray-50"
              placeholder="Digite o Ip..."
              placeholderTextColor="#eaeaea"
            />

            <Text className="mt-4 text-center font-alt text-xl text-white">
              Porta:
            </Text>
            <TextInput
              className="w-3/4 rounded-xl border border-gray-50 p-1 pl-2 font-body text-gray-50"
              placeholder="Digite a porta..."
              placeholderTextColor="#eaeaea"
            />

            <Text className="mt-4 text-center font-alt text-xl text-white">
              API:
            </Text>
            <TextInput
              className="w-3/4 rounded-xl border border-gray-50 p-1 pl-2 font-body text-gray-50"
              placeholder="Digite a API..."
              placeholderTextColor="#eaeaea"
            />

            <Text className="mt-4 text-center font-alt text-xl text-white">
              Empresa:
            </Text>
            <TextInput
              className="w-3/4 rounded-xl border border-gray-50 p-1 pl-2 font-body text-gray-50"
              placeholder="Digite a Empresa..."
              placeholderTextColor="#eaeaea"
            />

            <Text className="mt-4 text-center font-alt text-xl text-white">
              Filial:
            </Text>
            <TextInput
              className="w-3/4 rounded-xl border border-gray-50 p-1 pl-2 font-body text-gray-50"
              placeholder="Digite a Filial..."
              placeholderTextColor="#eaeaea"
            />

            <View className="mb-4 mt-8 w-3/4">
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                className=" items-center rounded-xl bg-green-600 p-1"
              >
                <Text className="font-alt text-gray-50">Aplicar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                className="mt-4 items-center rounded-xl bg-yellow-600 p-1"
              >
                <Text className="font-alt text-gray-50">Limpar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                className="mt-4 items-center rounded-xl bg-red-600 p-1"
              >
                <Text className="font-alt text-gray-50">Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          activeOpacity={0.5}
          className="relative ml-48 mt-40 rounded-xl bg-gray-100 px-5 py-2"
          onPress={() => setModalVisible(true)}
        >
          <Text>Opções</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
