import React,  {Component} from 'react';
import {View, Text, TouchableOpacity, Image,TextInput, ScrollView, Button, FlatList, Item} from 'react-native';

import axios from 'axios';

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

export default class Testes extends React.Component{
	
    state = {
        aux: [],
        lista: [],
        email: 'oi',
        senha: '',
    }
    renderizarFlat = ({item}) => {
        return (
          <View style={{width: 100, height: 100, backgroundColor: 'red'}}>
            <Text>Bom dia Anjo{item.nome}</Text>
          </View>
        )
      }

    async componentDidMount(){
        await axios.get(`https://projetosbatine.firebaseio.com/usuario.json`)
        .then(response => {
            res = response.data;
            this.setState({lista: res});
		this.state.aux.push(res.um);
		this.state.aux.push(res.dois);
		this.state.aux.push(res.tres);
		this.state.aux.push(res.quatro);
           	this.setState({lista: this.state.aux});
		//console.log(this.state.lista);
        })
    }

    render(){
	const { navigation } = this.props;

            return(
                <View>
                    <FlatList
                        data={this.state.lista}
              		renderItem={this.renderizarFlat}
                        extraData={this.state}
                    />
                    {/* <Text>Bom dia Anjo {this.state.lista.email}</Text> */}
					<Button title='oi' onPress={() => navigation.replace('Login')}></Button>
                </View>
            )
        }
}
