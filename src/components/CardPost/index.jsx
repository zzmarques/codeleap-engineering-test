import React from 'react'
import { TbTrashXFilled } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";

const CardPost = ({ name, title, text }) => {
    return (
        <section className='card-post'>
            <header className='header-post'>
                <div className='container-title'>
                    <h1>{ title }</h1>
                </div>
                <div className='container-btns'>
                    <button className='btn-delete'><TbTrashXFilled /></button>
                    <button className='btn-edit'><FaRegEdit /></button>
                </div>
            </header>
            <main className='main-post'>
                <section className='cabecalho-post'>
                    <span className='user-name'>@ { name }</span>
                    <span className='time-post'>25 minutes ago</span>
                </section>
                <section className='container-text'>
                    <p>
                        { text }
                    </p>
                </section>
            </main>
        </section>
    )
}

export default CardPost;