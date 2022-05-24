import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

import {Container, Typography} from '@mui/material/'
class App extends Component {
  




  render() {
    return (
      <Container component='article' maxWidth="sm">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <Typography variant='h3' component='h1' align='center'>Formulário de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF}></FormularioCadastro>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if(cpf.length !== 11) {
    return {valido: false, texto: "CPF deve ter 11 dígitos."}
  } else {
    return {valido: true, texto: ''}
  }
}

export default App;
