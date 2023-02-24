import React, { useState } from 'react';

const AddElement = () => {
    const [val, setVal] = useState([])

    const handleAdd = () => {
        const abc = [...val, []]
        setVal(abc)
    }

    const handleChange = (onChangeValue, i) => {
        const inputdata = [...val];
        inputdata[i] = onChangeValue.target.value
        setVal(inputdata)

    }
    console.log(val);

    return (
        <div>
            <button onClick={() => handleAdd()}>Add</button>
            {
                val.map((data, i) => {
                    return (
                        <div>
                            <input onChange={e => handleChange(e, i)} />
                        </div>
                    )

                })
            }
        </div>
    )
}

export default AddElement;