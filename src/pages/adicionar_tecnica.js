import React,  {Component} from 'react';
import {View, Text, TouchableOpacity, Image,TextInput, ScrollView} from 'react-native';

import * as firebase from 'firebase';

import axios from 'axios';

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
  
 export default class AddTecnica extends React.Component{

  state = {
      tecnica: '',
      descricao: '',
	  aux: [],
        lista: [],
		prox: '',
  } 
  
  async componentDidMount(){
        await axios.get(`https://projetosbatine.firebaseio.com/tecnica.json`)
        .then(response => {
            res = response.data;
            this.setState({lista: res});
		if(res.um)
			this.state.prox = 'dois'							
		if(res.dois)
			this.state.prox = 'tres'							
		if(res.tres)
			this.state.prox = 'quatro'							
		if(res.quatro)
			this.state.prox = 'cinco'							
		if(res.cinco)
			this.state.prox = 'seis'							
		if(res.seis)
			this.state.prox = 'sete'							
		if(res.sete)
			this.state.prox = 'oito'							
		if(res.oito)
			this.state.prox = 'nove'							
		if(res.nove)
			this.state.prox = 'dez'							
		if(res.dez)
			this.state.prox = 'onze'		
		
        this.setState({lista: this.state.aux});
		//console.log(this.state.prox);
        })
    }

	render(){
		const { navigation } = this.props;
		
	  setStateAddTecnica = (text, numero) => {
		if(numero == '1')
		  this.state.tecnica = text
		else
		  this.state.descricao = text
	  }
	  
        return(
            <View style={{width: '100%', backgroundColor: '#D3D3D3'}}>
            
            <View style={{backgroundColor: 'white', width: '85%', alignSelf: 'center', height: 340, marginTop: '35%', borderRadius: 30, marginBottom: 10}}>
                <Text style={{marginLeft: 30, marginTop: 10}}>Técnica:</Text>
                <TextInput style={{backgroundColor: 'white', marginLeft: 30, height: 40, width: '80%', borderBottomWidth: 1, color: 'grey'}}
                  onChangeText={text => {setStateAddTecnica({text}, '1')}}/>
                <Text style={{marginLeft: 30, marginTop: 10}}>Experiência:</Text>
                <TextInput style={{backgroundColor: 'white', marginLeft: 30, height: 80, width: '80%', borderBottomWidth: 1, color: 'grey'}}
                  onChangeText={text => {setStateAddTecnica({text}, '2')}}/>

                <View style={{backgroundColor: '#48D1CC', height: 60, flexDirection: 'row', width: '100%', marginTop: '35%', borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
                    <TouchableOpacity onPress={() => navigation.replace('Tecnica')} style={{backgroundColor: 'white', height: 40, borderRadius: 50, width: '40%', marginLeft: '8%', marginTop: '2%'}}>
                        <Text style={{color: '#48D1CC', alignSelf: 'center', justifyContent: 'center', marginTop: '6%'}}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'white', height: 40, borderRadius: 50, width: '40%', marginLeft: '5%', marginTop: '2%'}}
                      onPress={async () => {
                          firebase.database().ref('tecnica/'+this.state.prox).set({
                              tecnica: this.state.tecnica.text,
                              descricao: this.state.descricao.text
                          });
                          navigation.replace('Tecnica');
                      }}
                    >
                      <View>
                          <Text style={{color: '#48D1CC', alignSelf: 'center', justifyContent: 'center', marginTop: '6%'}}>Salvar</Text>
                      </View>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={{height: 500}}></View>
        </View>
        )
	}
}