import React,  {Component} from 'react';
import {View, Text, TouchableOpacity, Image,TextInput, ScrollView, FlatList} from 'react-native';

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

import number1 from '../../images/educacao.png'
import number2 from '../../images/interface.png'
import number3 from '../../images/estrela.png'
import number4 from '../../images/ferramentas.png'
import number5 from '../../images/soma.jpg'

export default class Skill extends React.Component{

  state = {
        aux: [],
        lista: [],
    }
    renderizarFlat = ({item}) => {
        return (
			<View style={{backgroundColor: 'white', width: '97%', alignSelf: 'center', minHeight: 80, borderRadius: 30, marginTop: 10}}>
				<Text style={{fontWeight: 'bold', fontSize: 15, marginLeft: 20, marginTop: 5}}>{item.skill}</Text>
				<Text style={{fontSize: 13, marginLeft: 20, marginTop: 5}}>{item.descricao}</Text>                
			</View>
        )
      }

    async componentDidMount(){
        await axios.get(`https://projetosbatine.firebaseio.com/skill.json`)
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
        })
    }
	
  render(){
	const { navigation } = this.props;
                    
        return(
            <View style={{width: '100%', backgroundColor: '#D3D3D3'}}>
            
            <View style={{width: '100%', height: 150, borderBottomRightRadius: 30, borderBottomLeftRadius: 30, backgroundColor: 'white'}}>
              <View style={{alignSelf: "center", marginTop: 10}}>
                <Text style={{fontSize: 20, color: 'black',fontWeight: 'bold'}}>Seu Curriculo</Text>
              </View>
            
              <View style={{flexDirection: 'row', marginTop: 30,  marginBottom: 20, marginLeft: 30, height: 25}}>
                  <TouchableOpacity onPress={() => navigation.replace('Formacao')}>
                    <Image source={number1} style={{width: 40, height: 40}}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.replace('Idioma')}>
                    <Image source={number2} style={{width: 40, height: 40, marginLeft: 40 }}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.replace('Skill')}>
                    <Image source={number3} style={{width: 37, height: 37, marginLeft: 40 }}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.replace('Tecnica')}>
                    <Image source={number4} style={{width: 37, height: 37, marginLeft: 40, marginTop: 5 }}></Image>
                  </TouchableOpacity>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={{marginLeft: 20}}>Formação</Text>
                </View>
                <View>
                  <Text style={{marginLeft: 21}}>Idiomas</Text>
                </View>
                <View>
                  <Text style={{marginLeft: 40}}>Skills</Text>
                </View>
                <View>
                  <Text style={{marginLeft: 30}}>Técnicas</Text>
                </View>
              </View>
            </View>

            <ScrollView style={{width: '95%', alignSelf: 'center', height: 340, marginTop: 10, marginBottom: 10}}>
                <FlatList
					data={this.state.lista}
					renderItem={this.renderizarFlat}
					extraData={this.state}
				/>

                <View>
                    <View style={{width: '100%', marginTop: 10}}>
                        <TouchableOpacity onPress={() => navigation.replace('AddSkill')}>
                                <Image source={number5} style={{width: 40, height: 40, marginLeft: 40, marginTop: 5, marginLeft: '85%'}}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <View style={{backgroundColor: '#48D1CC', height: 60, flexDirection: 'row', width: '100%'}}>
            <TouchableOpacity onPress={() => navigation.replace('Vaga')} style={{backgroundColor: 'white', height: 40, borderRadius: 50, width: '40%', marginLeft: '8%', marginTop: '2%'}}>
                <Text style={{color: '#48D1CC', alignSelf: 'center', justifyContent: 'center', marginTop: '6%'}}>Cancelar</Text>
            </TouchableOpacity>
              <View style={{backgroundColor: 'white', height: 40, borderRadius: 50, width: '40%', marginLeft: '5%', marginTop: '2%'}}>
                <Text style={{color: '#48D1CC', alignSelf: 'center', justifyContent: 'center', marginTop: '6%'}}>Salvar</Text>
              </View>
            </View>

        </View>
        )
  }
}