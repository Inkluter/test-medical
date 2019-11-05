import React from 'react';
import './App.css';
import CheckboxInput from './components/CheckboxInput'
import TextInput from './components/TextInput'
import ResultModal from './components/ResultModal'
import useForm from './hooks/useForm'

function App() {
  const {
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
  } = useForm();

  return (
    <div className="app">
      <form className="form">
        <CheckboxInput
          name="A"
          value={inputAvalue}
          onChange={() => setInputAvalue(!inputAvalue)}
        />
        <CheckboxInput
          name="B"
          value={inputBvalue}
          onChange={() => setInputBvalue(!inputBvalue)}
        />
        <CheckboxInput
          name="C"
          value={inputCvalue}
          onChange={() => setInputCvalue(!inputCvalue)}
        />
        <TextInput 
          name="Input D"
          value={inputDvalue}
          onChange={handleInputDchange}
        />
        <TextInput 
          name="Input E"
          value={inputEvalue}
          onChange={handleInputEchange}
        />
        <TextInput 
          name="Input F"
          value={inputFvalue}
          onChange={handleInputFchange}
        />
        <CheckboxInput
          name="Custom 1"
          value={custom1Value}
          onChange={toggleCustom1}
        />
		    <CheckboxInput
          name="Custom 2"
          value={custom2Value}
          onChange={toggleCustom2}
        />
        <button 
          className="button"
          onClick={handleSubmitButton}
        >
          Submit & show result
        </button>
      </form>
      <ResultModal 
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        result={result}
      />
    </div>
  );
}

export default App;
