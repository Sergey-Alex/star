import React from 'react';
import {useInput} from '../components/customHooks/useInput'

const AddColorForm = ({onNewColor = f => f}) => {

    const [titleProps, resetTitle] = useInput('');
    const [colorProps, resetColor] = useInput('#000000');

    const submit = e => {
        e.preventDefault()
        onNewColor(titleProps.value, colorProps.value)
        resetTitle()
        resetColor()

    }

    return (
        <div>
            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder='color title...'
                    required
                    {...titleProps}
                />
                <input
                    {...colorProps}
                    type='color'
                    required
                />
                <button>ADD</button>
            </form>
        </div>
    );
};

export default AddColorForm;