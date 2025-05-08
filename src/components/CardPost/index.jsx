import React, { useState } from 'react'
import { TbTrashXFilled } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import Delete from '../Delete';
import Edit from '../Edit';

const CardPost = ({ name, title, text}) => {

    const [modal, setModal] = useState(null);

    const handleShow = (e) => {
        const btn = e.currentTarget;
        if (btn.classList.contains('btn-delete')) {
            setModal('delete');
        } else {
            setModal('edit');
        }
    };

    const closeModal = () => {
        console.log("Modal fechando...");
        setModal(null);
    };

    return (
        <section className='card-post'>
            <header className='header-post'>
                <div className='container-title'>
                    <h1 className='title'>{ title }</h1>
                </div>
                <div className='container-btns'>
                    <button onClick={handleShow} className='btn-delete'><TbTrashXFilled /></button>
                    <button onClick={handleShow}className='btn-edit'><FaRegEdit /></button>
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
            {modal === 'delete' && <Delete onClose={closeModal} />}
            {modal === 'edit' && <Edit onClose={closeModal} />}
        </section>
    )
}

export default CardPost;