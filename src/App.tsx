import React, { useContext, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Button from './components/Button'
import Input from './components/Input'

import { Card, HeaderCard, BodyCard, FooterCard } from './components/CardComponents'

import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

interface FormResultObject {
  name: string,
  weight: string,
  height: string
}

function App() {
  
  
  const [result, setResult] = useState(0)

  const formRef = useRef<FormHandles>(null)
  
  const calcResult = (data: FormResultObject) => {
    
    const {weight, height} = data

    let calc = +(+weight / (+height * +height)).toFixed(2)

    setResult(calc)
  }

  return (
    <div className="App">
      <Card>
        <HeaderCard title='BMI App'/>
        <BodyCard>
          <Form ref={formRef} onSubmit={calcResult}>
            <Input name='name' type='text' />
            <Input name='weight' type='number' step={0.01}/>
            <Input name='height' type='number' step={0.01}/>

            <button type="submit">Save</button>
          </Form>
          <section className='result'>
            <h4>BMI: {result}</h4>
          </section>
        </BodyCard>
        <FooterCard text='Direitos Reservados @ 2022'/> 
      </Card>
    </div>
  )
}

export default App
