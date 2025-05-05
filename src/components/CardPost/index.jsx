import React from 'react'
import { TbTrashXFilled } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";

const CardPost = () => {
    return (
        <section className='card-post'>
            <header className='header-post'>
                <div className='container-title'>
                    <h1>My First Post at CodeLeap Network!</h1>
                </div>
                <div className='container-btns'>
                    <button className='btn-delete'><TbTrashXFilled /></button>
                    <button className='btn-edit'><FaRegEdit /></button>
                </div>
            </header>
            <main className='main-post'>
                <section className='cabecalho-post'>
                    <span className='user-name'>@Victor</span>
                    <span className='time-post'>25 minutes ago</span>
                </section>
                <section className='container-text'>
                    <p>
                        Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.
                    </p>
                    <p>
                        Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
                    </p>
                </section>
            </main>
        </section>
    )
}

export default CardPost;