import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useEffect, useRef } from 'react'
import Navcontext, { Navbarcontext } from './Navcontext'

const Fullscreennav = () => {
 const fullnavlink =useRef(null)
 const fullscreenref= useRef(null)
 

 const [navopen,setnavopen] = useContext(Navbarcontext)
useEffect(() => {
  if (navopen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [navopen]);
      function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
      
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
         tl.from('.hello',{
        opacity:0,
      
       })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }


    useGSAP(function () {
            
        if (navopen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [navopen])
    
 

  return (
    <div ref={fullscreenref} className='fullscreennav hidden absolute w-full z-50 overflow-hidden h-screen w-full  bg-black'>
     <div  className="h-screen w-full fixed">
        <div className="h-full w-full flex">
    <div className="stairing h-full w-1/5 bg-red-900" ></div>
    <div className="stairing h-full w-1/5 bg-red-900" ></div>
    <div className="stairing h-full w-1/5 bg-red-900" ></div>
    <div className="stairing h-full w-1/5 bg-red-900" ></div>
    <div className="stairing h-full w-1/5 bg-red-900" ></div>
</div>
     </div>
    <div ref={fullnavlink} className='relative' >

             
     <div className="flex w-full p-5 justify-between items-start">
 
  <div className="">

       <div className="lg:w-36 sm:w-20">
       <svg className='w-full' xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
        <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
       </svg>
     </div>
    </div> 
    <div onClick={()=>{
        setnavopen(false)
    }} className="hello h-32  w-32 relative cursor-pointer">

        <div className='h-30 top-8 left-15 w-2 rotate-45 absolute  bg-[#D3FD50]'></div>
        <div className='h-30 top-8 left-15 w-2 rotate-135 absolute  bg-[#D3FD50]'></div>
    </div>
    
    </div>
     <div className=' '>
        <div className='link origin-top relative border-t-1 border-white '> 
            <h1 className=' bold font-[font1] text-white text-center  leading-[1] text-[7vw] uppercase'>PROJECTS</h1>
         <div className='movelink absolute flex text-black bg-[#D3FD50] top-0'>
              <div className='movex flex  items-center '>
                <h2 className='whitespace-nowrap font-[font1] leading-[1]  text-center text-[7vw] uppercase'>POUR TOUT VOIR</h2>
                <img   className='h-20 w-[15vw] shrink-0 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font1] leading-[1]  text-center text-[7vw] uppercase'>POUR TOUT VOIR</h2>
                <img className='h-20 w-[15vw] shrink-0 object-cover rounded-full'  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />            
              </div>
                <div className='movex flex  items-center '>
                <h2 className='whitespace-nowrap font-[font1] leading-[1]  text-center text-[7vw] uppercase'>POUR TOUT VOIR</h2>
                <img   className='h-20 w-[15vw] shrink-0 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font1] leading-[1]  text-center text-[7vw] uppercase'>POUR TOUT VOIR</h2>
                <img className='h-20 w-[15vw] shrink-0 object-cover rounded-full'  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />            
              </div>
 
            </div>

        </div>
        <div className='link origin-top relative border-t-1 border-white '> 
            <h1 className=' bold font-[font1] text-white text-center  leading-[1] text-[7vw] uppercase'>agence</h1>
         <div className='movelink absolute flex text-black bg-[#D3FD50] top-0'>
              <div className='movex flex  items-center '>
                <h2 className='whitespace-nowrap font-[font1] leading-[1]  text-center text-[7vw] uppercase'>POUR TOUT VOIR</h2>
                <img   className='h-20 w-[15vw] shrink-0 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font1] leading-[1]  text-center text-[7vw] uppercase'>POUR TOUT VOIR</h2>
                <img className='h-20 w-[15vw] shrink-0 object-cover rounded-full'  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />            
              </div>
                <div className='movex flex  items-center '>
                <h2 className='whitespace-nowrap font-[font1] leading-[1]  text-center text-[7vw] uppercase'>POUR TOUT VOIR</h2>
                <img   className='h-20 w-[15vw] shrink-0 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font1] leading-[1]  text-center text-[7vw] uppercase'>POUR TOUT VOIR</h2>
                <img className='h-20 w-[15vw] shrink-0 object-cover rounded-full'  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />            
              </div>
 
            </div>

        </div>
        <div className='link origin-top relative border-t-1 border-white '> 
            <h1 className=' bold font-[font1] text-white text-center  leading-[1] text-[7vw] uppercase'>contact</h1>
         <div className='movelink absolute flex text-black bg-[#D3FD50] top-0'>
              <div className='movex flex  items-center '>
                <h2 className='whitespace-nowrap font-[font1] leading-[1]  text-center text-[7vw] uppercase'>POUR TOUT VOIR</h2>
                <img   className='h-20 w-[15vw] shrink-0 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font1] leading-[1]  text-center text-[7vw] uppercase'>POUR TOUT VOIR</h2>
                <img className='h-20 w-[15vw] shrink-0 object-cover rounded-full'  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />            
              </div>
                <div className='movex flex  items-center '>
                <h2 className='whitespace-nowrap font-[font1] leading-[1]  text-center text-[7vw] uppercase'>POUR TOUT VOIR</h2>
                <img   className='h-20 w-[15vw] shrink-0 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font1] leading-[1]  text-center text-[7vw] uppercase'>POUR TOUT VOIR</h2>
                <img className='h-20 w-[15vw] shrink-0 object-cover rounded-full'  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />            
              </div>
 
            </div>

        </div>
       <div className='link origin-top relative border-t-1 border-b-1 border-white '> 
            <h1 className=' bold font-[font1] text-white text-center  leading-[1] text-[7vw] uppercase'>blogue</h1>
         <div className='movelink absolute flex text-black bg-[#D3FD50] top-0'>
              <div className='movex flex  items-center '>
                <h2 className='whitespace-nowrap font-[font1] leading-[1]  text-center text-[7vw] uppercase'>POUR TOUT VOIR</h2>
                <img   className='h-20 w-[15vw] shrink-0 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font1] leading-[1]  text-center text-[7vw] uppercase'>POUR TOUT VOIR</h2>
                <img className='h-20 w-[15vw] shrink-0 object-cover rounded-full'  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />            
              </div>
                <div className='movex flex  items-center '>
                <h2 className='whitespace-nowrap font-[font1] leading-[1]  text-center text-[7vw] uppercase'>POUR TOUT VOIR</h2>
                <img   className='h-20 w-[15vw] shrink-0 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font1] leading-[1]  text-center text-[7vw] uppercase'>POUR TOUT VOIR</h2>
                <img className='h-20 w-[15vw] shrink-0 object-cover rounded-full'  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />            
              </div>
 
            </div>

        </div>
    </div>
    </div>

</div>

  )
}

export default Fullscreennav
