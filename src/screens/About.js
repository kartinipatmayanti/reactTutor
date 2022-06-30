import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#212121'}}>
        <StatusBar backgroundColor="#1976d2" />
        <View
          style={{
            backgroundColor: '#2196f3',
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
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#ffffff', padding:10,textAlign:'center'}}>
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
