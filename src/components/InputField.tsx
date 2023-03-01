import React from 'react';

type Props = {
    id: string;
    label: string;
    onChange:  (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    value: string;
}

const InputField = ({id, label, onChange, value}: Props) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label> {id}
            <input name={id} id={id} type="text" onChange={onChange} value={value}/>
        </div>
    );
};

export default InputField;