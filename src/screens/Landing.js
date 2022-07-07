import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity, Image, Button} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';

class Landing extends Component {
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
          <Text
            style={{
              color: '#ffffff',
              textAlign: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            E - Tutor
          </Text>
        </View>
        <Image style={{    width: 150,
            height: 150,
            borderRadius: 63,
            borderWidth: 4,
            borderColor: 'white',
            marginBottom: 50,
            alignSelf: 'center',
            position: 'absolute',
            marginTop: 120,}} source={require('./ic_tentang.png')} />
        <View style={{flex: 1, alignItems: 'center', marginTop:190}}>
        <Button
        color="#1976d2"
        title="Materi"
        onPress={()=> this.props.navigation.navigate('Home')}
      />
        </View>
        <Image style={{    width: 150,
            height: 150,
            borderRadius: 63,
            borderWidth: 4,
            borderColor: 'white',
            marginBottom: 50,
            alignSelf: 'center',
            position: 'absolute',
            marginTop: 320,}} source={require('./ic_kosakata.png')} />
        <View style={{flex: 1, alignItems: 'center', marginTop:50}}>
        <Button
        color="#1976d2"
        title="Kosa Kata"
        onPress={()=> this.props.navigation.navigate('Kosakata')}
      />
        </View>
        <Image style={{    width: 150,
            height: 150,
            borderRadius: 63,
            borderWidth: 4,
            borderColor: 'white',
            marginBottom: 50,
            alignSelf: 'center',
            position: 'absolute',
            marginTop: 510,}} source={require('./ic_tentang.png')} />
        <View style={{flex: 1, alignItems: 'center', marginTop:60}}>
        <Button
        color="#1976d2"
        title="Tentang"
        onPress={()=> this.props.navigation.navigate('About')}
      />
        </View>
      </View>
    );
  }
}

export default Landing;