console.disableYellowBox = true;
import React,  {Component} from 'react';
import {View, Text, TouchableOpacity, Image,TextInput, ScrollView} from 'react-native';

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

if (!firebase.apps.length) {
    firebase.initializeApp(DB_CONFIG);
 }

    state = {
        nome: '',
        cpf: '',
        celular: '',
        email: '',
        senha: '',
    }

    setStateCadastro = (text, numero) => {
        if(numero == '1')
            this.state.nome = text
        else if(numero == '2')
            this.state.cpf = text
        else if(numero == '3')
            this.state.celular = text
        else if(numero == '4')
            this.state.email = text
        else
            this.state.senha = text
    }

    export default function Cadastro({navigation}){
        return(
        <View style={{width: '100%', backgroundColor: '#48D1CC'}}>
            <ScrollView>
                <Image source={number4} style={{alignSelf: 'center', width: 80, height: 80, marginTop: 35, marginBottom: 15 }}></Image>
                <Text style={{color: 'white', alignSelf: 'center', fontSize: 25, marginBottom: 35}}>InfoJobs</Text>

                <View>
                    <TextInput placeholder="Nome Completo" placeholderTextColor="black" style={{marginBottom: 20, backgroundColor: 'white', marginLeft: 10, height: 40, width: '70%', color: 'grey', alignSelf: 'center'}}
                    onChangeText={text => {setStateCadastro({text}, '1')}}/>
                    <TextInput placeholder="CPF" placeholderTextColor="black" style={{marginBottom: 20, backgroundColor: 'white', marginLeft: 10, height: 40, width: '70%', color: 'grey', alignSelf: 'center'}}
                    onChangeText={text => {setStateCadastro({text}, '2')}}/>
                    <TextInput placeholder="Celular" placeholderTextColor="black" style={{marginBottom: 20, backgroundColor: 'white', marginLeft: 10, height: 40, width: '70%', color: 'grey', alignSelf: 'center'}}
                    onChangeText={text => {setStateCadastro({text}, '3')}}/>
                    <TextInput placeholder="E-mail" placeholderTextColor="black" style={{marginBottom: 20, backgroundColor: 'white', marginLeft: 10, height: 40, width: '70%', color: 'grey', alignSelf: 'center'}}
                    onChangeText={text => {setStateCadastro({text}, '4')}}/>
                    <TextInput placeholder="Senha" placeholderTextColor="black" style={{marginBottom: 50, backgroundColor: 'white', marginLeft: 10, height: 40, width: '70%', color: 'grey', alignSelf: 'center'}}
                    onChangeText={text => {setStateCadastro({text}, '5')}}/>
                </View>
                
                <TouchableOpacity 
                     onPress={async () => {
                        firebase.database().ref('usuario').set({
                            nome: this.state.nome.text,
                            cpf: this.state.cpf.text,
                            celular: this.state.celular.text,
                            email: this.state.email.text,
                            senha: this.state.senha.text
                        });
                        navigation.replace('Login');
                    }}
                >
                    <View style={{backgroundColor: 'white', height: 40}}>
                        <Text style={{color: 'black', alignSelf: 'center', fontSize: 20, marginTop: 5}}>Realizar Cadastro</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>         
        </View>
        );
}
