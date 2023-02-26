import React from 'react';
import { Alert, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../styles/text/Text';
import { Api } from '../../../services/Api';

 import { styles } from './styles';



const Home: React.FC = () => {
    
    const [rua, setRua] = React.useState<string>();
    const [numero, setNumero] = React.useState<string>();
    const [bairro, setBairro] = React.useState<string>();
    const [cidade, setCidade] = React.useState<string>();
    const [cep, setCep] = React.useState<string>();
    const [estado, setEstado] = React.useState<string>();



    
    const getAddress = async () => {
        await Api.get(`/${cep}/json`)
        .then(response =>{

          if(response.data.uf != 'RN'){
            Alert.alert('Não permitido', 'Não permitido buscar endereços fora do estado do Rio Grande do Norte');
          }else{

            setBairro(response.data.bairro);
            setRua(response.data.logradouro);
            setNumero('s/n');
            setCidade(response.data.localidade);
            setCep(response.data.cep);
            setEstado(response.data.uf);
          }

          
           
        }).catch (err => console.log(err.message));
    }
  return (
    
    <View style={styles.Container}>
      
        <View style={styles.header}>
          <Text size={18}>Pesquisar Cep</Text>
        </View>
       
          <View style={styles.main}>

            <View style={styles.areaInputs}>
            
            <Text size={14} color='#fff'>Rua</Text>
          
            <TextInput
              value={rua}
              placeholder='Rua'
              onChangeText={setRua}
              style={styles.input} 
            />
              <Text size={14} color='#fff'>Cidade</Text>
            <TextInput
              value={cidade}
              placeholder='Cidade'
              onChangeText={setCidade}
              style={styles.input} 
            />
            <Text size={14} color='#fff'>Bairro</Text>
            <TextInput
              value={bairro}
              placeholder='Bairro'
              onChangeText={setBairro}
              style={styles.input} 
            />

            <Text size={14} color='#fff'>Estado</Text>
            <TextInput
              value={estado}
              placeholder='Estado'
              onChangeText={setEstado}
              style={styles.input} 
              
            />

          <Text size={14} color='#fff'>Número</Text>
            <TextInput
              value={numero}
              placeholder='Número'
              onChangeText={setNumero}
              style={styles.input} 
              keyboardType='numeric'
            />

            <View style={styles.viewCep}>
              
                <TextInput
                  value={cep}
                  placeholder='Cep'
                  onChangeText={setCep}
                  style={styles.inputCep} 
                  keyboardType='numeric'
                />

                <TouchableOpacity style={styles.btn} onPress={getAddress}>
                  <Text size={14} color='#fff'>Buscar</Text>
                </TouchableOpacity>
            </View>

             
            </View>

          </View>
       
    </View>
  )
}

export default  Home;