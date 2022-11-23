import React,{useState} from 'react'

const TextBox = () => {
    const [bgColor, setBgColor] = useState('indigo')
  return (
    <div>
        <article title='Párrafo principal' style={{backgroundColor:bgColor}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab officiis hic dolore expedita quos quisquam vero! Natus maiores consectetur et vero praesentium odio inventore porro, iusto iure nostrum, incidunt nobis?</article>
        <button onClick={() => setBgColor(bgColor==='indigo' ? 'tomato':'indigo')}>Cambia el color</button>
    </div>
  )
}

export { TextBox}