import { useState } from "react";
import makeResult from '../utils/makeResult'

const makeInt = (value) => value.replace(/\D/,'')

export default () => {
    const [inputAvalue, setInputAvalue] = useState(false);
    const [inputBvalue, setInputBvalue] = useState(false);
    const [inputCvalue, setInputCvalue] = useState(false);
    const [custom1Value, setCustom1] = useState(false);
    const [custom2Value, setCustom2] = useState(false);
    const [inputDvalue, setInputDvalue] = useState('');
    const [inputEvalue, setInputEvalue] = useState('');
    const [inputFvalue, setInputFvalue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [result, setResult] = useState('');

    const toggleCustom1 = () => setCustom1(!custom1Value)
    const toggleCustom2 = () => setCustom2(!custom2Value)

    const handleInputDchange = (e) => setInputDvalue(makeInt(e.target.value))
    const handleInputEchange = (e) => setInputEvalue(makeInt(e.target.value))

    const handleInputFchange = (e) => {

        const value = e.target.value

        if (value === '0') {
            return setInputFvalue(value)
        }

        if (value === '0.') {
            return setInputFvalue(value)
        }

        if (value.length === 0) {
            return setInputFvalue('')
        }

        if (!Number(value)) {
            return
        }

        return setInputFvalue(value)
    }

    const handleSubmitButton = (e, result) => {
        e.preventDefault()
        setResult(makeResult({
            a: inputAvalue,
            b: inputBvalue,
            c: inputCvalue,
            d: +inputDvalue,
            e: +inputEvalue,
            f: +inputFvalue,
            custom1: custom1Value,
            custom2: custom2Value,
        }))

        setIsModalOpen(true)
    }

    return {
        inputAvalue,
        inputBvalue,
        inputCvalue,
        inputDvalue,
        inputEvalue,
        inputFvalue,
        setInputAvalue,
        setInputBvalue,
        setInputCvalue,
        handleInputDchange,
        handleInputEchange,
        handleInputFchange,

        custom1Value,
        custom2Value,
        toggleCustom1,
        toggleCustom2,

        handleSubmitButton,

        isModalOpen,
        setIsModalOpen,
        result,
    }
}