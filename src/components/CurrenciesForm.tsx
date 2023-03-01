import React, {useState} from 'react';
import InputField from "./InputField";

interface Currencies {
    PLN: string;
    GBP: string;
}

const CurrenciesForm = () => {

    const [values, setValues] = useState<Currencies>({GBP: "", PLN: ""});

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const formattedData = event.currentTarget.value.replace(/\D/g, '')
        setValues({...values, [event.target.name]: formattedData});
        console.log(event.target.name)
    }

    return (
        <div>
            <InputField id="GBP" label="You send" onChange={handleChange} value={values.GBP}/>
            <InputField id="PLN" label="They receive" onChange={handleChange} value={values.PLN}/>
        </div>
    );
};

export default CurrenciesForm;