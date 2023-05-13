import './portfolio.css'
import '../App.css'
import image1 from '../assets/img/expensePlanner.png'
import imageVet from '../assets/img/vet.png'
import imageFest from '../assets/img/festival.png'
import imageUpTask from '../assets/img/upTask.png'

function Portfolio() {
  return (

    <>
        <div className='portfolioHead' id='portfolio'>
            <h1>My Portfolio</h1>
            <p>Here you can see some projects made it by me  and lenguages and tools what i use.</p>
            
        </div>

        <hr />

        <div className='containerHead'>

          <div className='description'>
            <h2 className='title'>Stage Spent</h2>
            <img src={image1} alt="Web Site image" />
              <p>This project was created with React JS, using localStorage, usesState, styled components. The project serve like a spent planner, and a control of income money, you can add more money, filter expenses by category, add, delet and edit (CRUD) expenses.</p>
            <button className='portfolioButton'>
              <a href="https://exquisite-rolypoly-3d139e.netlify.app/" target='_blank'>Go to Web Site</a>
            </button>
          </div>

          <div className='description'>
            <h2 className='title'>Follow-up veterinary patients</h2>
            <img src={imageVet} alt="Web Site image" />
              <p>This project was created with React JS, Tailwind CSS, Hooks, useState, useEffect, localStorage; the purpose of the project is to make a site with a CRUD of patients.</p>
            <button className='portfolioButton'>
              <a href="https://bespoke-dodol-dd8966.netlify.app/" target='_blank'>Go to Web Site</a>
            </button>
          </div>

          <div className='description'>
            <h2 className='title'>Rock & EDM Festival</h2>
            <img src={imageFest} alt="Web Site image" />
              <p>Rock & EDM Festival is an informative website, wich simulates a music festival website, with information, tickets and line up. This project was builded with PHP, JavaScript, HTML, CSS, SASS, it has several animations and smart slides with ID of JavaScript. </p>
            <button className='portfolioButton'>
              <a href="https://singular-florentine-bb58fb.netlify.app/" target='_blank'>Go to Web Site</a>
            </button>
          </div>

          <div className='description'>
            <h2 className='title'>UpTask</h2>
            <img src={imageUpTask} alt="Web Site image" />
              <p>UpTask is a task planner, was created with PHP, JavaScript, SASS, npm, SQL, MySQL, HTML, with design pattern MVC, the API was created by me, the conection into databases, and response with json.</p>
            <button className='portfolioButton'>
              <a href="https://uptaskmvc.alwaysdata.net/" target='_blank'>Go to Web Site</a>
            </button>
          </div>

        </div>
    </>
  )
}

export default Portfolio