import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

export default function Scanner(props) {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    }

    getBarCodeScannerPermissions()
  }, [])

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    props.onCodeScanned(type, data)
    alert(`Código de barras scaneado foi ${data}!`)
  }

  if (hasPermission === null) {
    return <Text>Solicitando permissão de câmera</Text>
  }
  if (hasPermission === false) {
    return <Text>Sem acesso à câmera</Text>
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button
          title={'Toque para digitalizar novamente'}
          onPress={() => setScanned(false)}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '65%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
})
