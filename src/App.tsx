import React, { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Button from './components/Button'
import Card from './components/CardComponents/Card'
import HeaderCard from './components/CardComponents/HeaderCard'
import BodyCard from './components/CardComponents/BodyCard'
import FooterCard from './components/CardComponents/FooterCard'
import Input from './components/Input'

function App() {
  
  
  const [result, setResult] = useState(0)
  
  const [name, setName] = useState('')
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  
  const calcResult = () => {
    let calc = +Number(weight / (height * height)).toFixed(2)
    
    setResult(calc)
  }

  return (
    <div className="App">
      <Card>
        <HeaderCard title='BMI App'/>
        <BodyCard>
          <form action="">
            <Input name='Name' type='text' callBack={setName}/>
            <Input name='Weight' type='number' step={0.1} callBack={setWeight} />
            <Input name='Height' type='number' step={0.1} callBack={setHeight} />

            <Button text='Calculate' callBack={calcResult}/>
          </form>
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
