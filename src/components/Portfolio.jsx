import './portfolio.css'
import '../App.css'
import image1 from '../assets/img/expensePlanner.png'
import imageVet from '../assets/img/vet.png'
import imageFest from '../assets/img/festival.png'
import imageUpTask from '../assets/img/upTask.png'
import imageGuitarLA from '../assets/img/GuitarLA.png'
import salesMeals from '../assets/img/salesMeals.png'

function Portfolio() {
  return (

    <>
        <div className='portfolioHead' id='portfolio'>
            <h1>My Portfolio</h1>
            <p>Here you can see some projects made it by me  and lenguages and tools what i use.</p>
            
        </div>

        <hr />

        <div className='containerHead'>

          <div className='description' data-aos="fade-up">
            <h2 className='title'>Stage Spent</h2>
            <img src={image1} alt="Web Site image" />
                <p>This project was created with React JS. The project serve like a spent planner, you can add more money, filter expenses by category, add, delet and edit (CRUD) expenses.</p> 
                <a href="https://exquisite-rolypoly-3d139e.netlify.app/" target='_blank'>
                  <button className='portfolioButton'>
                      Go to Web Site
                  </button>
                </a>
           
          </div>

          <div className='description' data-aos="fade-down">
            <h2 className='title'>FollowUp Veterinary</h2>
            <img src={imageVet} alt="Web Site image" />
                <p>This project was created with React.JS, Tailwind CSS, Hooks, useState, useEffect, localStorage; it has a CRUD of patients.</p>
                <a href="https://bespoke-dodol-dd8966.netlify.app/" target='_blank'>
                  <button className='portfolioButton'>
                      Go to Web Site
                  </button>
                </a>
          </div>

          <div className='description' data-aos="fade-up">
            <h2 className='title'>Rock & EDM Festival</h2>
            <img src={imageFest} alt="Web Site image" />
                <p>Rock & EDM Festival is an informative website, wich simulates a music festival website. This project was builded with PHP, JavaScript, HTML, CSS, SASS.</p>

                <a href="https://singular-florentine-bb58fb.netlify.app/" target='_blank'>
                  <button className='portfolioButton'>
                      Go to Web Site
                  </button>
                </a>
            
          </div>

          <div className='description' data-aos="fade-down">
            <h2 className='title'>UpTask</h2>
            <img src={imageUpTask} alt="Web Site image" />
                <p>UpTask is a task planner, was created with PHP, JavaScript, SASS, npm, SQL, MySQL, HTML, with design pattern MVC, the API was created by me, the conection into databases, and response with json.</p>
            <a href="https://uptaskmvc.alwaysdata.net/" target='_blank'>
                  <button className='portfolioButton'>
                      Go to Web Site
                  </button>
                </a>
          </div>

          <div className='description' data-aos="fade-up">
            <h2 className='title'>GuitarLA</h2>
            <img src={imageGuitarLA} alt="Web Site image" />
                <p>This project was created with React.Js, Strapi, APIS, Cloudinary, and render, learning differents ways to connect APIS, and more than one API.</p>
            <a href="https://guitarla-next-lac.vercel.app/" target='_blank'>
                  <button className='portfolioButton'>
                      Go to Web Site
                  </button>
                </a>
          </div>

          <div className='description' data-aos="fade-up">
            <h2 className='title'>Sales Meals</h2>
            <img src={salesMeals} alt="Web Site image" />
                <p>This project was created with React.Js, Prisma, Next.js, MySql, and TailwindCSS, it simulates a web app of Sales of fast or junk food, there you could send, edit and delete your orders.</p>
            <a href="https://salemeals-app-production.up.railway.app/" target='_blank'>
                  <button className='portfolioButton'>
                      Go to Web Site
                  </button>
                </a>
          </div>
        </div>

        <hr />
    </>
  )
}

export default Portfolio