import React from 'react'
import Avatar from '../img/perfil.gif'
import '../style/components/Sidebar.sass'

export default function Sidebar(){
    return (
        <aside id='sidebar'>
            <img src={Avatar} alt="asd"  />
            <p className='title'>desenvovedor</p>
            <p>rede sociais</p>
            <p>informações de contato</p>
            <a href='' className='btn'>
                curiculo
            </a>
        </aside>
    );
}