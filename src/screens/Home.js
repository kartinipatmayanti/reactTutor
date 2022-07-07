import React, { Component } from 'react';
import {View,Text,StatusBar,FlatList,TouchableOpacity,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [
            {
              judul: 'Simple Present Tense',
              rumus: 'Subject + Verb 1 (Base/Present Form)',
              dekripsi: 'Pada dasarnya, simple present tense merupakan salah satu tenses bahasa Inggris yang sering digunakan dalam penyusunan kalimat bahasa Inggris. Pasalnya, simple present tense ini dalam penggunaannya dapat berfungsi untuk menyatakan fakta (termasuk fakta ilmiah), kebiasaan atau rutinitas, dan juga kejadian-kejadian yang terjadi pada saat sekarang ini.',
              contoh: 'Example : Mario works in a plumbing company.'
            },
            {
              judul: 'Present Continuous / Progressive Tense',
              rumus:
                'Subject + Am / Is / Are + Verb –ing (Continuous Form)',
                dekripsi:'Dalam pengertiannya, present continuous tense atau yang sering kali disebut present progressive tense ini adalah tenses bahasa Inggris yang digunakan untuk menunjukkan sebuah tindakan atau kejadian yang sedang terjadi pada saat pembicaraan sedang berlangsung.' ,
                contoh: 'Example : Look! He is talking with his classmates.'
            },
            {
              judul: 'Present Perfect Tense',
              rumus: 'Subject + Has / Have + Verb 3 (Past Participle)',
              dekripsi: 'Present perfect tense ini dapat dikatakan tenses bahasa Inggris yang fungsinya adalah untuk menunjukkan suatu hasil. Pasalnya, tense yang satu ini dapat digunakan untuk menjabarkan suatu aktivitas ataupun situasi yang telah dimulai di masa lalu, dan telah selesai di masa lalu juga atau masih berlanjut sampai sekarang.',
                contoh: 'Example : He has already finished his homework.'
            },
            {
              judul: 'Present Perfect Continuous Tense',
              rumus:
                'Subject + Has / Have + Been + Verb –ing (Continuous Form)',
                dekripsi:'Present perfect contiunous tense atau yang juga sering disebut present perfect progressive tense adalah salah satu tenses bahasa Inggris yang pada penggunaannya memiliki fungsi untuk menjabarkan suatu tindakan yang telah selesai di masa lampau atau juga bisa untuk menjabarkan suatu tindakan yang telah dimulai di masa lalu dan masih terus berlangsung hingga sekarang.' ,
                contoh: 'Example : He has been working here since 1996.'
            },
            {
              judul: 'Simple Past Tense',
              rumus: 'Subject + Verb 2',
              dekripsi: 'Simple past tense ini adalah kebalikan dari simple present tense, yang mana tenses bahasa Inggris ini memiliki fungsi untuk menjabarkan suatu kejadian yang telah terjadi di masa lampau.',
                contoh: 'Example : Last year, he always worked until night.'
            },
            {
              judul: 'Past Continuous Tense',
              rumus: 'Subject + Was / Were + Verb –ing (Continuous Form)',
              dekripsi: 'Tenses bahasa Inggris yang satu ini sering digunakan untuk menjabarkan bahwa suatu kejadian atau tindakan sedang terjadi pada waktu tertentu di masa lalu. Apabila kita sering membaca sebuah cerita, di situ biasanya ada dua atau lebih kejadian berbeda di masa lampau dan satu kejadian yang sedang menginterupsi kejadian yang lain.Tenses bahasa Inggris yang satu ini sering digunakan untuk menjabarkan bahwa suatu kejadian atau tindakan sedang terjadi pada waktu tertentu di masa lalu. Apabila kita sering membaca sebuah cerita, di situ biasanya ada dua atau lebih kejadian berbeda di masa lampau dan satu kejadian yang sedang menginterupsi kejadian yang lain.',
                contoh: 'Example : He was speaking when I entered in room.' 
            },
            {
              judul: 'Past Perfect Tense',
              rumus: 'Subject + Had + Verb 3 (Past Participle)',
              dekripsi: 'Past perfect tense ini adalah tenses bahasa Inggris yang digunakan untuk menunjukkan suatu kejadian yang terjadi sebelum waktu tertentu di masa lampau. Pada dasarnya, past perfect tense ini lebih menekankan fakta ketimbang durasi. Jadi intinya, past perfect tense ini pada penggunaannya lebih untuk menyatakan bahwa suatu tindakan telah selesai di masa lalu, sebelum tindakan lainnya terjadi di masa lalu juga.',
                contoh: 'Example : He had finished his designs before he went to work yesterday.'
            },
            {
              judul: 'Past Perfect Continuous Tense',
              rumus: 'Subject + Had + Been + Verb –ing (Continuous Form)',
              dekripsi: 'Sama seperti past perfect tense, penggunaan past perfect continuous tense, atau juga dikenal sebagai past perfect progressive tense ini memiliki maksud untuk mengungkapkan sebuah tindakan yang terjadi di masa lalu, dan telah selesai pada suatu titik tertentu di masa lalu pula. Hanya saja, tenses bahasa Inggris ini lebih menekankan pada durasi kejadian tersebut.',
                contoh: 'Example : He had finished his designs before he went to work yesterday.'
            },
            {
              judul: 'Simple Future Tense',
              rumus: 'Subject + Will + Verb 1 (Present Form)',
              dekripsi: 'Pada dasarnya, simple future tense ini adalah tenses bahasa Inggris yang memiliki fungsi untuk menjabarkan suatu tindakan di masa yang akan datang dan tidak dapat dipengaruhi oleh tindakan-tindakan yang lain.',
                contoh: 'Example : He is going to be a journalist after he graduates next year.'
            },
            {
              judul: 'Future Continuous Tense',
              rumus: 'S + Will + Be + Verb –ing (Continuous form)',
              dekripsi: 'Seperti tenses Bahasa Inggris lainnya, future continuous tense atau yang juga disebut future progressive tense ini berfungsi untuk menunjukkan suatu tindakan yang terjadi di waktu tertentu. Tenses bahasa Inggris ini berfokus pada masa yang akan datang dan juga tindakan yang pasti akan terjadi dalam waktu dekat di masa depan.',
                contoh: 'Example : He will be delivering the speech to undergraduates at 3 p.m tomorrow afternoon.'
            },
            {
              judul: 'Future Perfect Continuous Tense',
              rumus:
                'Subject + Will + Have + Been + Verb –ing (Continuous Form)',
                dekripsi: 'Pada dasarnya, semua jenis perfect continuous tense itu konsepnya hampir sama. Nah, untuk future perfect continuous tense, atau yang kerap disebut future perfect progressive tense ini pada penggunaannya berfungsi untuk mengungkapkan bahwa suatu tindakan akan sudah berlangsung selama sekian lama, pada titik waktu tertentu di masa depan.',
                contoh: 'Example : He will have been taking charge of the team for the next hour.'
            },
            {
              judul: 'Simple Past Future Tense',
              rumus: 'Subject + Would + Verb 1',
              dekripsi: 'Pada intinya, simple past future tense ini digunakan untuk kalimat yang tidak langsung, di mana di situ terdapat perubahan bentuk untuk menyesuaikan dengan rangkaian peristiwa yang ada. Jadi, jika diambil kesimpulan, simple past future tense ini menyatakan suatu tindakan yang akan dilakukan, membuat prediksi, dan membuat janji di masa depan saat berada di masa lalu.',
                contoh:'Example : He said that he would leave in three days.'
            },
          ],
          
          pencarian: '',
        };
    }

    pencarian = () => {
        let data = this.state.data;

        data = data.filter((item) => item.judul.toLowerCase().includes(this.state.pencarian.toLowerCase()));

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
                    >Materi
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
                    onPress={() => this.props.navigation.navigate('Materi',{
                        'deskripsi'     : item.dekripsi,
                        'contoh' : item.contoh
                    })}
                    >
                        <Text style={{color:'#ffffff'}}>
                            {item.judul}
                        </Text>
                        <Text style={{color:'#ffffff'}}>
                            {item.rumus}
                        </Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.judul.toString()}
                />
            </View>
        );
    }
}

export default Home;