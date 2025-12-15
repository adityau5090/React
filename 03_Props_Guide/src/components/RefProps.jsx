import React, { forwardRef } from 'react'
import { useRef } from 'react';

const CustomInput = forwardRef(({label,placeholder,className}, ref) => {
  return (
    <div className="mb-4">
      <label className='block font-medium mb-2'>{label}</label>
      <input 
      ref={ref}
      type="text"  
      placeholder={placeholder}
      className={`w-full px-4 py-2 border border-gray-300 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />

    </div>
  )
})

CustomInput.displayName = "CustomInput"; 

const RefProps = () => {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  }
  const getInputValue = () => {
    if(inputRef.current){
      alert(`Input Value: ${inputRef.current.value} ${secondInputRef.current.value}`);
    }
  }
  const clearInput = () => {
    if(inputRef.current){
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  } 
  
  const focusSecondInput = () => {
    secondInputRef.current?.focus();
  }
  const clearSecondInput = () => {
    if(secondInputRef.current){
      secondInputRef.current.value = '';
      secondInputRef.current.focus();
    } 
  }

  return (
    <section className='p-8 bg-white rounded-xl shadow-lg'>
      <h2>Ref Props</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ullam non qui! Dicta at obcaecati quidem laboriosam ipsum doloremque et?</p>
      <div>
        <div>
          <h3>Try it out!</h3>
          <CustomInput 
            ref={inputRef}
            label="First Input with ref"
            placeholder="Type something here..."
          />  
          <CustomInput 
            ref={secondInputRef}
            label="Second Input with ref"
            placeholder="Type something else..."
          />
          <div className="flex flex-wrap gap-3 mt-4">
            <button
              onClick={focusInput}
              className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'
            >
              Focus First Input
            </button>  
            <button
              onClick={focusSecondInput}
              className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'
            >
              Focus Second Input
            </button>  
            <button
              onClick={getInputValue}
              className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'
            >
              Get Input Value
            </button>  
            
            <button
              onClick={clearInput}
              className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'
            >
              Clear First Input
            </button>  
            <button
              onClick={clearSecondInput}
              className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'
            >
              Clear Second Input
            </button>  
          </div>  
        </div>
        
      </div>
    </section>
  )
}

export default RefProps
