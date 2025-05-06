
import React from 'react'
import { creatPost } from '../../utils/creatPost'

const BtnCreate = () => {

    const handleCreate = () => {
        creatPost();
    }

    return (
        <button onClick={handleCreate} className='btn btn-create' type='submit'>Create</button>
    )
}

export default BtnCreate;