import React,  {Component} from 'react';
import {View, Text, TouchableOpacity, Image,TextInput, ScrollView} from 'react-native';

import number1 from '../../images/educacao.png'
import number2 from '../../images/interface.png'
import number3 from '../../images/estrela.png'
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
      linguagem1: '',
      escrita1: '',
	  leitura1: '',
	  conversacao1: '',
      linguagem2: '',
	  escrita2: '',
	  leitura2: '',
	  conversacao2: '',
  }
  
  setStateIdioma = (text, numero) => {
    if(numero == '1')
      this.state.linguagem1 = text
	else if(numero == '2')
      this.state.escrita1 = text
	  else if(numero == '3')
		  this.state.leitura1 = text
	  else if(numero == '4')
		  this.state.conversacao1 = text
	  else if(numero == '5')
		  this.state.linguagem2 = text
	  else if(numero == '6')
		  this.state.escrita2 = text
	  else if(numero == '7')
		  this.state.leitura2 = text
    else
      this.state.conversacao2 = text
  }

export default function Idioma({navigation}){
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

            <ScrollView style={{backgroundColor: 'white', width: '95%', alignSelf: 'center', height: 340, marginTop: 10, marginBottom: 10}}>
              <View>
                <Text style={{marginLeft: 10, marginTop: 10}}>Linguagem:</Text>
                <TextInput style={{backgroundColor: 'white', marginLeft: 10, height: 40, width: '90%', borderBottomWidth: 1, color: 'grey'}}
                  onChangeText={text => {setStateIdioma({text}, '1')}}/>
                <Text style={{marginLeft: 10, marginTop: 10}}>Leitura (0-10):</Text>
                <TextInput style={{backgroundColor: 'white', marginLeft: 10, height: 40, width: '50%', borderBottomWidth: 1, color: 'grey'}}
                  onChangeText={text => {setStateIdioma({text}, '2')}}/>
                <Text style={{marginLeft: 10, marginTop: 10}}>Escrita (0-10):</Text>
                <TextInput style={{backgroundColor: 'white', marginLeft: 10, height: 40, width: '50%', borderBottomWidth: 1, color: 'grey'}}
                  onChangeText={text => {setStateIdioma({text}, '3')}}/>
                <Text style={{marginLeft: 10, marginTop: 10}}>Conversação (0-10):</Text>
                <TextInput style={{backgroundColor: 'white', marginLeft: 10, height: 40, width: '50%', borderBottomWidth: 1, color: 'grey'}}
                  onChangeText={text => {setStateIdioma({text}, '4')}}/>

                <Text style={{marginLeft: 10, marginTop: 50}}>Linguagem:</Text>
                <TextInput style={{backgroundColor: 'white', marginLeft: 10, height: 40, width: '90%', borderBottomWidth: 1, color: 'grey'}}
                  onChangeText={text => {setStateIdioma({text}, '5')}}/>
                <Text style={{marginLeft: 10, marginTop: 10}}>Leitura (0-10):</Text>
                <TextInput style={{backgroundColor: 'white', marginLeft: 10, height: 40, width: '50%', borderBottomWidth: 1, color: 'grey'}}
                  onChangeText={text => {setStateIdioma({text}, '6')}}/>
                <Text style={{marginLeft: 10, marginTop: 10}}>Escrita (0-10):</Text>
                <TextInput style={{backgroundColor: 'white', marginLeft: 10, height: 40, width: '50%', borderBottomWidth: 1, color: 'grey'}}
                  onChangeText={text => {setStateIdioma({text}, '7')}}/>
                <Text style={{marginLeft: 10, marginTop: 10}}>Conversação (0-10):</Text>
                <TextInput style={{backgroundColor: 'white', marginLeft: 10, height: 40, width: '50%', borderBottomWidth: 1, color: 'grey', marginBottom: 10}}
                  onChangeText={text => {setStateIdioma({text}, '8')}}/>
              </View>
            </ScrollView>

            <View style={{backgroundColor: '#48D1CC', height: 60, flexDirection: 'row', width: '100%'}}>
              <TouchableOpacity onPress={() => navigation.replace('Vaga')} style={{backgroundColor: 'white', height: 40, borderRadius: 50, width: '40%', marginLeft: '8%', marginTop: '2%'}}>
                  <Text style={{color: '#48D1CC', alignSelf: 'center', justifyContent: 'center', marginTop: '6%'}}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor: 'white', height: 40, borderRadius: 50, width: '40%', marginLeft: '5%', marginTop: '2%'}}
                      onPress={async () => {
                          firebase.database().ref('idioma').set({
                              linguagem1: this.state.linguagem1.text,
							  escrita1: this.state.escrita1.text,
							  leitura1: this.state.leitura1.text,
							  conversacao1: this.state.conversacao1.text,
							  linguagem2: this.state.linguagem2.text,
                              escrita2: this.state.escrita2.text,
							  leitura2: this.state.leitura2.text,
							  conversacao2: this.state.conversacao2.text							  
                          });
                          navigation.replace('Idioma');
                      }}
                    >
                      <View>
                          <Text style={{color: '#48D1CC', alignSelf: 'center', justifyContent: 'center', marginTop: '6%'}}>Salvar</Text>
                      </View>
                    </TouchableOpacity>     
            </View>

        </View>
        );
}