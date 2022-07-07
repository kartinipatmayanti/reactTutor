import React, { Component } from 'react';
import {View,Text,StatusBar,FlatList,TouchableOpacity,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class KosaKata extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [
            {
              vocab: 'Eat',
              arti: 'Makan',
            },
            {
              vocab: 'Take',
              arti: 'Mengambil',
            },
            {
              vocab: 'Get',
              arti: 'Mendapatkan',
            },
            {
              vocab: 'Drink',
              arti: 'Minum',
            },
            {
              vocab: 'Ask',
              arti: 'Bertanya',
            },
            {
              vocab: 'Table',
              arti: 'Meja',
            },
            {
              vocab: 'Chair',
              arti: 'Kursi',
            },
            {
              vocab: 'Pen',
              arti: 'Pulpen',
            },
            {
              vocab: 'Pencil',
              arti: 'Pensil',
            },
            {
              vocab: 'Buble',
              arti: 'Gelembung',
            },
            {
              vocab: 'Carefull',
              arti: 'Peratian',
            },
            {
              vocab: 'Black',
              arti: 'Hitam',
            },
            {
              vocab: 'Book',
              arti: 'Buku',
            },
            {
              vocab: 'Shoes',
              arti: 'Sepatu',
            },
            {
              vocab: 'House',
              arti: 'Rumah',
            },
            {
              vocab: 'Bag',
              arti: 'Tas',
            },
            {
              vocab: 'Cake',
              arti: 'Kue',
            },
            {
              vocab: 'Bottle',
              arti: 'Botol',
            },
            {
              vocab: 'Flour',
              arti: 'Tepung',
            },
            {
              vocab: 'Fish',
              arti: 'Ikan',
            },
            {
              vocab: 'Bread',
              arti: 'Roti',
            },
            {
              vocab: 'Vegetable',
              arti: 'Sayuran',
            },
            {
              vocab: 'Egg',
              arti: 'Telur',
            },
            {
              vocab: 'Sugar',
              arti: 'Gula',
            },
            {
              vocab: 'Salt',
              arti: 'Garam',
            },{
              vocab: 'Add',
              arti: 'Menambahkan',
            },{
              vocab: 'Big',
              arti: 'Besar',
            },
            {
              vocab: 'Stupid',
              arti: 'Bodoh',
            },
            {
              vocab: 'Smart',
              arti: 'Pintar',
            },
            {
              vocab: 'Young',
              arti: 'Muda',
            },
            {
              vocab: 'Lazy',
              arti: 'Malas',
            },{
              vocab: 'Boring',
              arti: 'Bosan',
            },{
              vocab: 'Happy',
              arti: 'Senang',
            },
            {
              vocab: 'Confident',
              arti: 'Percaya Diri',
            },{
              vocab: 'Healthy',
              arti: 'Sehat',
            },
            {
              vocab: 'Huge',
              arti: 'Besar',
            },
          ],
          
          pencarian: '',
        };
    }

    pencarian = () => {
        let data = this.state.data;

        data = data.filter((item) => item.vocab.toLowerCase().includes(this.state.pencarian.toLowerCase()));

        this.setState({data:data});
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'#212121'}}>
                <StatusBar backgroundColor="#1976d2"/>
                <View style={{
                    backgroundColor:'#00008B',
                    paddingVertical:15,
                    elevation:3,
                    flexDirection:'row',
                    paddingHorizontal:20,
                    alignItems: 'center'
                    }}>
                    <View style={{flex:1}}>
                    <Text
                        style={{color:'#ffffff',textAlign:'center',alignItems:'center',fontWeight:'bold',fontSize:18}}
                    >KosaKata
                    </Text>
                    </View>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('About')}>
                        <Icon style={{marginRight:10}} name="question-circle" size={25} color="#ffffff" />
                    </TouchableOpacity>
                </View>
                <TextInput 
                    value={this.state.pencarian}
                    onChangeText={(text) => this.setState({pencarian:text}, () => this.pencarian())}
                    style={{backgroundColor:'#ffffff',marginHorizontal:20,marginTop:20,marginBottom:10,borderRadius:5}}
                />
                <FlatList
                data={this.state.data}
                renderItem={({item,index})=>(
                    <TouchableOpacity style={{marginHorizontal:20,marginVertical:10,backgroundColor:'#1976d2',padding:8,borderRadius:5,elevation:3}}
                    >
                        <Text style={{color:'#ffffff'}}>
                            {item.vocab}
                        </Text>
                        <Text style={{color:'#ffffff'}}>
                            {item.arti}
                        </Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.vocab.toString()}
                />
            </View>
        );
    }
}

export default KosaKata;