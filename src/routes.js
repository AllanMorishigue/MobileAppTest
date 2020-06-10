import  { createStackNavigator } from 'react-navigation';

import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Formacao from './pages/formacao';
import Idioma from './pages/idioma';
import Skill from './pages/skill';
import Tecnica from './pages/tecnica';
import AddSkill from './pages/adicionar_skill';
import AddTecnica from './pages/adicionar_tecnica';
import Vaga from './pages/vaga';
import DescVaga from './pages/descricao_vaga';
import Candidatura from './pages/candidatura';
import Testes from './pages/testes';

export default createStackNavigator({
    Login: {screen: Login, navigationOptions: () => ({header: null})},
    Cadastro: {screen: Cadastro, navigationOptions: () => ({header: null})},
    Vaga: {screen: Vaga, navigationOptions: () => ({header: null})},
    Candidatura: {screen: Candidatura, navigationOptions: () => ({header: null})},
    Formacao: {screen: Formacao, navigationOptions: () => ({header: null})},
    Idioma: {screen: Idioma, navigationOptions: () => ({header: null})},
    Tecnica: {screen: Tecnica, navigationOptions: () => ({header: null})},
    Skill: {screen: Skill, navigationOptions: () => ({header: null})},
    AddSkill: {screen: AddSkill, navigationOptions: () => ({header: null})},
    AddTecnica: {screen: AddTecnica, navigationOptions: () => ({header: null})},
    DescVaga: {screen: DescVaga, navigationOptions: () => ({header: null})},
});
