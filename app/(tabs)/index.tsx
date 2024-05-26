import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


export default function HomeScreen() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [kodePos, setKodePos] = useState('');
  const [jenisSekolah, setJenisSekolah] = useState(null);
  const [provinsi, setProvinsi] = useState(null);
  const [noTelp, setNoTelp] = useState('');
  const [emailSekolah, setEmailSekolah] = useState('');
  const [facebook, setFacebook] = useState('');
  const [jumlahSiswa, setJumlahSiswa] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const tipeSekolah = [
    { label: 'Negeri', value: 'Negeri' },
    { label: 'Swasta', value: 'Swasta' }
  ];

  const handleKodePos = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setKodePos(numericText);
  };

  const provinsiIndonesia = [
    { label: 'Aceh', value: 'Aceh' },
    { label: 'Sumatera Utara', value: 'Sumatera Utara' },
    { label: 'Sumatera Barat', value: 'Sumatera Barat' },
    { label: 'Riau', value: 'Riau' },
    { label: 'Kepulauan Riau', value: 'Kepulauan Riau' },
    { label: 'Jambi', value: 'Jambi' },
    { label: 'Sumatera Selatan', value: 'Sumatera Selatan' },
    { label: 'Bangka Belitung', value: 'Bangka Belitung' },
    { label: 'Bengkulu', value: 'Bengkulu' },
    { label: 'Lampung', value: 'Lampung' },
    { label: 'DKI Jakarta', value: 'DKI Jakarta' },
    { label: 'Jawa Barat', value: 'Jawa Barat' },
    { label: 'Banten', value: 'Banten' },
    { label: 'Jawa Tengah', value: 'Jawa Tengah' },
    { label: 'DI Yogyakarta', value: 'DI Yogyakarta' },
    { label: 'Jawa Timur', value: 'Jawa Timur' },
    { label: 'Bali', value: 'Bali' },
    { label: 'Nusa Tenggara Barat', value: 'Nusa Tenggara Barat' },
    { label: 'Nusa Tenggara Timur', value: 'Nusa Tenggara Timur' },
    { label: 'Kalimantan Barat', value: 'Kalimantan Barat' },
    { label: 'Kalimantan Tengah', value: 'Kalimantan Tengah' },
    { label: 'Kalimantan Selatan', value: 'Kalimantan Selatan' },
    { label: 'Kalimantan Timur', value: 'Kalimantan Timur' },
    { label: 'Kalimantan Utara', value: 'Kalimantan Utara' },
    { label: 'Sulawesi Utara', value: 'Sulawesi Utara' },
    { label: 'Gorontalo', value: 'Gorontalo' },
    { label: 'Sulawesi Tengah', value: 'Sulawesi Tengah' },
    { label: 'Sulawesi Barat', value: 'Sulawesi Barat' },
    { label: 'Sulawesi Selatan', value: 'Sulawesi Selatan' },
    { label: 'Sulawesi Tenggara', value: 'Sulawesi Tenggara' },
    { label: 'Maluku', value: 'Maluku' },
    { label: 'Maluku Utara', value: 'Maluku Utara' },
    { label: 'Papua Barat', value: 'Papua Barat' },
    { label: 'Papua', value: 'Papua' },
    { label: 'Papua Tengah', value: 'Papua Tengah' },
    { label: 'Papua Pegunungan', value: 'Papua Pegunungan' },
    { label: 'Papua Selatan', value: 'Papua Selatan' }
  ];

  const handleNoTelp = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setNoTelp(numericText);
  };

  const handleJumlahSiswa = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');
    const numericValue = parseInt(numericText, 10);
    if (numericValue >= 1 && numericValue <= 100) {
      setJumlahSiswa(numericText);
    } else if (numericValue < 1) {
      setJumlahSiswa('1');
    } else if (numericValue > 100) {
      setJumlahSiswa('100');
    } else {
      setJumlahSiswa('');
    }

  };


  const [isFocus, setIsFocus] = useState(false);
  const handleSubmit = () => {
    setModalVisible(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Text style={styles.titleForm}>Data Sekolah: </Text>

      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={tipeSekolah}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Tipe Sekolah: *' : '...'}
        value={jenisSekolah}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setJenisSekolah(item.value);
          setIsFocus(false);
        }}
      />

      <Text style={styles.label}>Nama Sekolah: *</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="SMAN 3 Klaten"
      />

      <Text style={styles.label}>Masukkan Alamat: *</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAddress}
        value={address}
        placeholder="Jl. Beruang"
      />

      <Text style={styles.label}>Kode Pos:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleKodePos}
        value={kodePos}
        placeholder="17565"
        keyboardType="numeric"
        maxLength={5}
      />

      <Text style={styles.label}>Provinsi: *</Text>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={provinsiIndonesia}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Pilih Provinsi: *' : '...'}
        value={provinsi}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setProvinsi(item.value);
          setIsFocus(false);
        }}
      />


      <Text style={styles.label}>Nomer Telepon:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleNoTelp}
        value={noTelp}
        placeholder="08129381928"
        keyboardType="numeric"
        maxLength={13}
      />

      <Text style={styles.label}>Email Sekolah: *</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmailSekolah}
        value={emailSekolah}
        placeholder="youremail@gmail.com"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Facebook:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setFacebook}
        value={facebook}
      />

      <Text style={styles.label}>Jumlah Siswa: *</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleJumlahSiswa}
        value={jumlahSiswa}
        placeholder="45"
        keyboardType="numeric"
        maxLength={3}
      />

      <Button title="Submit" onPress={handleSubmit} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Tipe Sekolah: {jenisSekolah}</Text>
          <Text style={styles.modalText}>Nama: {name}</Text>
          <Text style={styles.modalText}>Alamat: {address}</Text>
          <Text style={styles.modalText}>Kode Pos: {kodePos}</Text>
          <Text style={styles.modalText}>Provinsi: {provinsi}</Text>
          <Text style={styles.modalText}>Nomer Telepon: {noTelp}</Text>
          <Text style={styles.modalText}>Email Sekolah: {emailSekolah}</Text>
          <Text style={styles.modalText}>Facebook: {facebook}</Text>
          <Text style={styles.modalText}>Jumlah Siswa: {jumlahSiswa}</Text>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  titleForm: {
    marginBottom: 20,
    fontWeight: 'bold',

  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 8,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 15
  },
  icon: {
    marginRight: 5,
  },
  labelDrop: {
    position: 'absolute',
    backgroundColor: 'white',
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
});
