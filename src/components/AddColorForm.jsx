import React, {useState} from 'react';

const AddColorForm = ({onNewColor = f => f}) => {

    const [title, setTitle] = useState('');
    const [color, SetColor] = useState()


    const submit = e => {
        e.preventDefault()


    }

    return (
        <div>
            <form onSubmit={submit}>
                <input  type="text" placeholder='color title...' required/>
                <input  type='color' required/>
                <button>ADD</button>
            </form>
        </div>
    );
};

export default AddColorForm;