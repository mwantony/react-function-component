import React, {useState} from 'react';
import './FormularioCadastro.css'
import { TextField, Button, Switch, FormControlLabel } from '@mui/material'

function FormularioCadastro({aoEnviar, validarCPF}) {
    const [nome, setNome] = useState('Ricardo');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf: {valido: true, texto: ''}})
    return(
        <form onSubmit={event => {
            event.preventDefault()
            aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
        }}>
            <TextField 
                value={nome} 
                onChange={event => {
                    setNome(event.target.value)
                }} 
                className='form-input' 
                label="Nome" 
                id="nome" 
                variant='outlined' 
                fullWidth 
                margin='normal'></TextField>
            <TextField 
                value={sobrenome} 
                onChange={event => {
                    setSobrenome(event.target.value)
                }} 
                className='form-input' 
                label="Sobrenome" 
                id='sobrenome' 
                variant='outlined' 
                fullWidth 
                margin='normal'></TextField>
            <TextField 
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                className='form-input'
                value={cpf}
                onChange={event => {
                    setCpf(event.target.value)
                }} 
                onBlur={event => {
                    const ehValido = validarCPF(cpf)
                    setErros({cpf: ehValido})
                }} 
                label="CPF" id="cpf" 
                variant='outlined' 
                fullWidth 
                margin='normal'></TextField>
            
            <FormControlLabel 
                label='Promoções' 
                control={
                    <Switch 
                        checked={promocoes}
                        onChange={(event) => {
                            setPromocoes(event.target.checked)
                        }}
                        name='promocoes' 
                        color='primary'>
                    </Switch>
                }>
            </FormControlLabel>
            <FormControlLabel 
                label="Novidades" 
                control={
                    <Switch
                        checked={novidades}
                        onChange={(event) => {
                            setNovidades(event.target.checked)
                        }} 
                        name='novidades' 
                        color='primary'>
                    </Switch>
                }>
            </FormControlLabel>
            
            <Button variant="contained" color="primary" type='submit'>Cadastrar</Button>
        </form>
    )
}

export default FormularioCadastro