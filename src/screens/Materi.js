import React, { Component } from 'react';
import {View,Text,StatusBar,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Materi extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         };
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#212121'}}>
                <StatusBar backgroundColor="#1976d2"/>
                <View style={{
                    backgroundColor:'#2196f3',
                    paddingVertical:15,
                    elevation:3,
                    flexDirection:'row',
                    paddingHorizontal:20,
                    alignItems: 'center'
                    }}>
                    <TouchableOpacity onPress={()=> this.props.navigation.pop()}>
                        <Icon style={{marginRight:10}} name="chevron-left" size={25} color="#ffffff" />
                    </TouchableOpacity>
                    <Text
                        style={{color:'#ffffff',textAlign:'center',alignItems:'center',fontWeight:'bold',fontSize:18}}
                    >Materi</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                    <Text style={{color:'#ffff',textAlign:'center',padding:5}}>{this.props.route.params.deskripsi}</Text>
                    <Text style={{color:'#ffff', marginTop:40}}>{this.props.route.params.contoh}</Text>
                </View>
            </View>
        );
    }
}

export default Materi;