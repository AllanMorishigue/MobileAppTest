console.disableYellowBox = true;
import React,  {Component} from 'react';
import {View, Text, TouchableOpacity, Image,TextInput, ScrollView, Button} from 'react-native';

import number4 from '../../images/ferramentas.png'

import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBKqNBZI2MDpXWnB_v8oeI0jpZ80GdlHWw",
    authDomain: "projetosbatine.firebaseapp.com",
    databaseURL: "https://projetosbatine.firebaseio.com",
    projectId: "projetosbatine",
    storageBucket: "projetosbatine.appspot.com",
    messagingSenderId: "781342551041",
    appId: "1:781342551041:web:cc5a78506afddfee9fa400",
    measurementId: "G-GEBKKVT2J7"
};

firebase.initializeApp(firebaseConfig)

    state = {
        email: '',
        senha: '',
    }

    setStateLogin = (text, numero) => {
        if(numero == '1')
            this.state.email = text
        else
            this.state.senha = text
    }

    export default function Login({navigation}){
        return(
        <View style={{width: '100%', backgroundColor: '#48D1CC'}}>
            <ScrollView>
                <Image source={number4} style={{alignSelf: 'center', width: 80, height: 80, marginTop: 60, marginBottom: 15 }}></Image>
                <Text style={{color: 'white', alignSelf: 'center', fontSize: 25, marginBottom: 80}}>InfoJobs</Text>

                <View>
                    <TextInput placeholder="e-mail" placeholderTextColor="black" style={{marginBottom: 20, backgroundColor: 'white', marginLeft: 10, height: 40, width: '90%', color: 'grey'}}
                    onChangeText={text => {setStateLogin({text}, '1')}} />
                    <TextInput placeholder="senha" placeholderTextColor="black" style={{marginBottom: 70, backgroundColor: 'white', marginLeft: 10, height: 40, width: '90%', color: 'grey'}}
                    onChangeText={text => {setStateLogin({text}, '2')}}/>
                </View>

                {/* <Button
                onPress={teste = async () => {
                    let testezin = [];
                    console.log("oitutobom")
                    var ref = await firebase.database().ref('usuario');
                    ref.on('value', function(snapshot) {
                    this.testezin = snapshot.val();
                    console.log(this.testezin);
                    if(this.testezin){
                        navigation.replace('Vaga');
                    }
                    });

                    firebase.database().ref('usuario').set({
                    nome: 'teste6',
                    cpf: 'teste7',
                    celular: 'teste8',
                    email: 'teste9',
                    senha: 'teste10'
                    });
                    console.log (testezin);
                    console.log('quequetaacontecnu');
                }}
                title='oi'>
                </Button> */}
                
                <TouchableOpacity 
                     onPress={async () => {
                        console.log('Aguarde o retorno do Firebase');
                        var ref = await firebase.database().ref('usuario');
                        ref.on('value', function(snapshot) {
                        let connect = snapshot.val();
                        if((connect.email == this.state.email.text) && (connect.senha == this.state.senha.text)){
                            console.log('Conectado');
                            navigation.replace('Vaga');
                        }else
                            console.log('Erro ao conectar');
                        });
                    }}
                >
                    <View>
                        <Text style={{color: 'white', alignSelf: 'center', fontSize: 20, marginBottom: 50}}>Entrar</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.replace('Cadastro')}>
                    <View>
                        <Text style={{color: 'grey', alignSelf: 'center', fontSize: 13}}>Você não tem uma conta?</Text>
                        <Text style={{color: 'white', alignSelf: 'center', fontSize: 15, marginBottom: 15}}>Registre-se</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
        );
}