import { StatusBar } from 'expo-status-bar'
import { useRouter } from 'expo-router'
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Modal,
} from 'react-native'

import Scanner from '../src/components/scanner'

import blrBg from '../src/assets/bg-blur.png'
import TiberinaLogo from '../src/assets/tiberina-logo.svg'
// import { TextInput } from 'react-native-gesture-handler'
import { useState } from 'react'

export default function ReservarTransferencia() {
  const router = useRouter()

  const [codigo, setCodigo] = useState('')

  const [status, setStatus] = useState({
    type: '',
    mensagem: '',
  })

  function enviarCodigo() {
    const codigoAtribuido = codigo
    alert('O Código cadastrado foi "' + codigoAtribuido + '"!')
  }

  /* Parte do código que irá realizar a gravação do dado no BD
  
  const valueInput = (e) =>
    setCodigo({ ...codigo, [e.target.name]: e.target.value })
  
  const addCodigo = async (e) => {
    e.preventDefault()

    const saveCodigo = true

    if (saveCodigo) {
      setStatus({
        type: 'sucess',
        mensagem: 'Código registrado com sucesso!',
      })
    } else {
      setStatus({
        type: 'error',
        mensagem: 'Código Inválido, favor informe um código válido!',
      })
    }
  }
  */
  const [modalVisible, setModalVisible] = useState(false)

  const onCodeScanned = (type, data) => {
    setCodigo(data)
    setModalVisible(false)
  }

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
            Reservar Transferências
          </Text>
          <Text className="text-1xl mb-4 font-body text-gray-50">
            Informe a Etiqueta
          </Text>
          {status.type === 'sucess' ? (
            <Text className="text-1xl mb-4 font-body text-green-500">
              {status.mensagem}
            </Text>
          ) : (
            ''
          )}
          {status.type === 'error' ? (
            <Text className="text-1xl mb-4 font-body text-red-500">
              {status.mensagem}
            </Text>
          ) : (
            ''
          )}
          <Modal
            className=""
            visible={modalVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={() => setModalVisible(false)}
          >
            <View className="flex-1 items-center justify-around rounded-xl bg-gray-500">
              <Text className="mt-4 text-center font-alt text-2xl text-gray-50">
                Scaneie o Código de Barras
              </Text>

              <Scanner onCodeScanned={onCodeScanned} />

              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                className="w-2/3 items-center rounded-xl bg-red-500 p-2"
              >
                <Text className="font-title text-xl text-gray-50">
                  Cancelar
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <TextInput
            className="mb-8 rounded-xl border border-gray-50 p-1 pl-2 font-body text-gray-50"
            placeholderTextColor="#eaeaea"
            placeholder="Digite o código da etiqueta..."
            onPressIn={() => setModalVisible(true)}
            onChangeText={(codigo) => setCodigo(codigo)}
            value={codigo}
          />

          <View className="m-w-32 items-center justify-center text-center">
            <TouchableOpacity
              activeOpacity={0.5}
              className="mb-4 rounded-xl bg-green-600 px-5 py-2"
              onPress={() => enviarCodigo()}
            >
              <Text className="font-title text-gray-50">Validar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              className="mb-4 rounded-xl bg-yellow-600 px-5 py-2"
              onPress={() => setCodigo({ value: '' })}
            >
              <Text className="font-title text-gray-50">Limpar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              className="mb-4 rounded-xl bg-red-600 px-5 py-2"
              onPress={() => router.push('/menu')}
            >
              <Text className="font-title text-gray-50"> Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
