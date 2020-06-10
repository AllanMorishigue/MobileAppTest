import React,  {Component} from 'react';
import {View, Text, TouchableOpacity, Image,TextInput, ScrollView} from 'react-native';

state = {
    escola: 'oi',
  }
  
  setState = (text) => {
    this.state.escola = text
    console.log(this.state.escola)
  }

export default function DescVaga({navigation}){
        return(
            <View style={{width: '100%', backgroundColor: '#D3D3D3'}}>
			<Text>item.vaga</Text>
			
            <View style={{backgroundColor: 'white', width: '85%', alignSelf: 'center', height: 340, marginTop: '35%', borderRadius: 30, marginBottom: 10}}>
                <Text style={{marginLeft: 30, marginTop: 10, marginTop: 30}}>Vaga:</Text>
                <Text style={{backgroundColor: 'white', marginLeft: 30, height: 40, width: '80%', color: 'grey'}}>
                    Programador PHP I
                </Text>
                <Text style={{marginLeft: 30, marginTop: 10}}>Descrição:</Text>
                <Text style={{backgroundColor: 'white', marginLeft: 30, width: '80%', color: 'grey'}}>
                    Donec porttitor tempus elit sit amet vulputate. Nunc felis nibh, rutrum eget tincidunt eget, pulvinar eu enim. Phasellus dictum arcu dolor, et elementum orci tempor vel. Sed malesuada erat vitae ipsum elementum tempus. Donec ut mi dolor. In hac habitasse platea dictumst.
                </Text>

                <View style={{backgroundColor: '#48D1CC', height: 60, flexDirection: 'row', width: '100%', marginTop: '15%', borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
                    <TouchableOpacity onPress={() => navigation.replace('Vaga')} style={{backgroundColor: 'white', height: 40, borderRadius: 50, width: '40%', marginLeft: '8%', marginTop: '2%'}}>
                        <Text style={{color: '#48D1CC', alignSelf: 'center', justifyContent: 'center', marginTop: '6%'}}>Cancelar</Text>
                    </TouchableOpacity>
                    <View style={{backgroundColor: 'white', height: 40, borderRadius: 50, width: '40%', marginLeft: '5%', marginTop: '2%'}}>
                        <Text style={{color: '#48D1CC', alignSelf: 'center', justifyContent: 'center', marginTop: '6%'}}>Candidatar-se</Text>
                    </View>
                </View>
            </View>
            
            <View style={{height: 500}}></View>
        </View>
        );
}