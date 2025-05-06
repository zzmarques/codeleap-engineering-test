
import React from 'react'
import { handleValidator } from '../../utils/formvalidator'



const BtnCreate = () => {

    const handleCreate = () => {
        handleValidator('sla')
    }

    return (
        <button onClick={handleCreate} className='btn btn-create' type='submit'>Create</button>
    )
}

export default BtnCreate;