import { Image, StyleSheet, Platform, Text, View, SafeAreaView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Dropdown } from 'react-native-element-dropdown';

export default function HomeScreen() {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [tipeSekolah, onTipeSekolah] = React.useState('');
  const [namaSekolah, onSekolah] = React.useState('');
  const [alamat, onAlamat] = React.useState('');


  const data = [
    { label: 'Negeri', value: '1' },
    { label: 'Swasta', value: '2' }
  ];


  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Tipe Sekolah: *
        </Text>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.stepContainer}>
      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Tipe Sekolah: *' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(value);
            setIsFocus(false);
          }}
        />
      </View>
      <Text style={styles.text}>Nama Sekolah: *</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Contoh: SMK Negeri 1 Bandung (untuk negeri)"
        value={text}
      />
      <Text style={styles.text}>Alamat: *</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text style={styles.text}>Kode Pos: *</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
      />
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Cannot press this one')}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginTop: 140,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  text: {
    marginTop: 12,
    marginLeft: 12
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
