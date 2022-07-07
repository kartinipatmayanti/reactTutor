import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor="#1976d2" />
        <View
          style={{
            backgroundColor: '#00008B',
            paddingVertical: 15,
            elevation: 3,
            flexDirection: 'row',
            paddingHorizontal: 20,
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Icon
              style={{marginRight: 10}}
              name="chevron-left"
              size={25}
              color="#ffffff"
            />
          </TouchableOpacity>
          <Text
            style={{
              color: '#ffffff',
              textAlign: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            About
          </Text>
        </View>
        <Image style={{    width: 300,
    height: 300,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 50,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 90,}} source={require('./ic_tentang.png')} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:140}}>
          <Text style={{color: '#0e1446', padding:10,textAlign:'center'}}>
            E-Tutor adalah aplikasi pembelajaran bahasa inggris yang akan
            menampilkan materi seputar kaidah dan aturan bahasa Inggris. Dengan
            begitu pengguna bisa mengikuti pembelajaran sesuai melalui materi
            yang telah diberikan. Dengan belajar bahasa Inggris lewat aplikasi
            E-Tutor, tentunya bisa menambah pengetahuan atau kosa kata kita
            dalam bahasa Inggris. Apalagi saat ini bahasa Inggris dalam bidang
            profesional sangat dibutuhkan terutama bagi mereka yang bekerja di
            perusahaan multinasional.
          </Text>
        </View>
      </View>
    );
  }
}

export default About;
