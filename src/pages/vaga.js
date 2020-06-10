import React,  {Component} from 'react';
import {View, Text, TouchableOpacity, Image,TextInput, ScrollView, FlatList} from 'react-native';

import number1 from '../../images/disponivel.png'

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
 
 export default class Vaga extends React.Component{

  state = {
        aux: [],
        lista: [],
		prox: '',
		lista2: [],
    }
    renderizarFlat = ({item}) => {
		const { navigation } = this.props;

        return (
                <View style={{flexDirection: 'row', backgroundColor: 'white', width: '97%', alignSelf: 'center', minHeight: 70, borderRadius: 30, marginTop: 10}}>
                    <View style={{width: 80}}>
                        <Image source={number1} style={{width: 60, height: 60, marginLeft: 15, marginTop: 5}}></Image>
                    </View>
                    <View style={{}}>
                        <Text style={{fontWeight: 'bold', fontSize: 15, marginLeft: 15, marginTop: 15}}>{item.vaga}</Text>
                        <Text style={{width: 200, fontSize: 13, marginLeft: 15, marginTop: 5}}>{item.descricao}</Text>         
					<TouchableOpacity 
                      onPress={async () => {
                          firebase.database().ref('candidato/'+this.state.prox).set({
                              vaga: item.vaga,
                              descricao: item.descricao
                          });
                      }}
                    >
                      <View>
                          <Text style={{marginLeft: 15, color: '#48D1CC', marginTop: 10}}>Candidatar-se</Text>
                      </View>
                    </TouchableOpacity>						
                    </View>
                </View>		
        )
      }

    async componentDidMount(){
        await axios.get(`https://projetosbatine.firebaseio.com/vaga.json`)
        .then(response => {
            res = response.data;
            this.setState({lista: res});
		if(res.um)
			this.state.aux.push(res.um);
		if(res.dois)
			this.state.aux.push(res.dois);
		if(res.tres)
			this.state.aux.push(res.tres);
		if(res.quatro)
			this.state.aux.push(res.quatro);
		if(res.cinco)
			this.state.aux.push(res.cinco);
		if(res.seis)
			this.state.aux.push(res.seis);
		if(res.sete)
			this.state.aux.push(res.sete);
		if(res.oito)
			this.state.aux.push(res.oito);
		if(res.nove)
			this.state.aux.push(res.nove);
		if(res.dez)
			this.state.aux.push(res.dez);			

        this.setState({lista: this.state.aux});
		//console.log(this.state.lista);
		//console.log(this.state.prox)
		//console.log(res);
        })
		
		await axios.get(`https://projetosbatine.firebaseio.com/candidato.json`)
        .then(response => {
            res2 = response.data;
            this.setState({lista2: res2});
		this.state.prox = 'um'							
		if(res2.um)
			this.state.prox = 'dois'							
		if(res2.dois)
			this.state.prox = 'tres'							
		if(res2.tres)
			this.state.prox = 'quatro'							
		if(res2.quatro)
			this.state.prox = 'cinco'							
		if(res2.cinco)
			this.state.prox = 'seis'							
		if(res2.seis)
			this.state.prox = 'sete'							
		if(res2.sete)
			this.state.prox = 'oito'							
		if(res2.oito)
			this.state.prox = 'nove'							
		if(res2.nove)
			this.state.prox = 'dez'							
		if(res2.dez)
			this.state.prox = 'onze'				
		})
		
    }
	
  render(){
	const { navigation } = this.props;
                    
        return(
            <View style={{width: '100%', backgroundColor: '#D3D3D3'}}>
            
            <View style={{width: '100%', height: 100, borderBottomRightRadius: 30, borderBottomLeftRadius: 30, backgroundColor: 'white'}}>
              <View style={{alignSelf: "center", marginTop: 10}}>
                <Text style={{fontSize: 20, color: 'black',fontWeight: 'bold'}}>Vagas com o seu perfil</Text>
              </View>

                <View style={{backgroundColor: 'white', height: 60, flexDirection: 'row', width: '80%', alignSelf: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.replace('Formacao')} style={{backgroundColor: 'white', height: 40, borderRadius: 50, width: '40%', marginLeft: '8%', marginTop: '2%'}}>
                        <Text style={{color: '#48D1CC', alignSelf: 'center', justifyContent: 'center', marginTop: '6%', fontSize: 15}}>Meu curriculo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.replace('Candidatura')} style={{backgroundColor: 'white', height: 40, borderRadius: 50, width: '40%', marginLeft: '8%', marginTop: '2%'}}>
                       <Text style={{color: '#48D1CC', alignSelf: 'center', justifyContent: 'center', marginTop: '6%', fontSize: 15}}>Candidaturas</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <ScrollView style={{width: '95%', alignSelf: 'center', height: 470, marginTop: 10, marginBottom: 10}}>        
                <FlatList
					data={this.state.lista}
					renderItem={this.renderizarFlat}
					extraData={this.state}
				/>
            </ScrollView>

        </View>
        )
  }
}