import Foto from '../assets/img/LoveDevelopment.jpg'
import  './TextOfMe.css'

function TextOfMe() {
  return (
    <div className='container'>
        <img className='photoDesc' src={`${Foto}`} alt="Desc" />

        <div className='container-text'>
            <h1>Hello, my name is Cristian Castro, FullStack Developer</h1>
            <p>I am <span>Cristian Castro</span>, apassionate for coding, i love keep learning about more tecnologies, lenguages, and frameworks, tools that's make the process simple. I love to see the process when an application is built, besides being part of it. </p>
      
             <a className='link-btn' href="https://drive.google.com/file/d/1XgHr9H0IhaSG4MI2cYj2CW0LYP-TjA9m/view?usp=sharing" target="_blank" rel='noopener noreferrer'>View Resume</a>
       
        </div>

        <div className='button-resume'>
            

        </div>
        
    </div>
  )
}

export default TextOfMe