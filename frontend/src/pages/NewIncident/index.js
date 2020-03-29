import React, { useState } from 'react'
import './styles.css'
import api from '../../services/api'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
export default function NewIncident() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [val, setValue] = useState('')
    const ongId = localStorage.getItem('ongId')
    const history = useHistory()
    async function handleNewIncident(e){
        e.preventDefault()
        var position = val.indexOf(',')
        var value
        if (position === -1){
            value = val
        } else {
            value = val.substr(0, position) + "."+val.substr(position+1,val.length)
        }
        const data = {
            title,
            description,
            value
        }
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization : ongId,
                }
            })
            history.push('/profile')
        } catch (error) {
            alert('Erro ao cadastrar caso')
        }
    }
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>
                    <Link className="back-link" to="/profile" >
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Título do Caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Valor em R$"
                        value={val}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}