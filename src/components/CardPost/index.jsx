import { useEffect, useState } from 'react'
import { TbTrashXFilled } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import Delete from '../Delete';
import Edit from '../Edit';
import "../../sass/components/_CardPost.scss";

const CardPost = ({ name, title, text, createdAt }) => {

    const [modal, setModal] = useState(null);
    const [minutesAgo, setMinutesAgo] = useState(0);
    
    const handleShow = (e) => {
        const btn = e.currentTarget;
        if (btn.classList.contains('btn-delete')) {
            setModal('delete');
        } else {
            setModal('edit');
        }
    };

    const closeModal = () => {
        setModal(null);
    };

    useEffect(() => {
        const updateTime = () => {
            const now = Date.now();
            const diff = Math.floor((now - createdAt) / 60000);
            setMinutesAgo(diff);
        };

        updateTime();
        const interval = setInterval(updateTime, 60000);

        return () => clearInterval(interval);
    }, [createdAt]);

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
                    <span className='user-name'>@{ name }</span>
                    <span className='time-post'>{minutesAgo} minutes ago</span>
                </section>
                <section className='container-text'>
                    <p>
                        { text }
                    </p>
                </section>
            </main>
                {modal && (
                    <>
                        <div className="backdrop" onClick={closeModal}></div>
                        {modal === 'delete' && <Delete onClose={closeModal} />}
                        {modal === 'edit' && <Edit onClose={closeModal} />}
                    </>
                )}
        </section>
    )
}

export default CardPost;