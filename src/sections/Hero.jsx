



import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom'
import CanvsLoader from '../components/CanvsLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/Cube'
import Rings from '../components/Rings'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'

const Hero = () => {
    // const isMobil =useMediaQuery({maxWidth : 768}) 
    // const isTablet = useMediaQuery({minWidth: 768 ,maxWidth :1024 })
    // const isSmall= useMediaQuery({maxWidth:440 })
    // const sizes = calculateSizes(isSmall, isMobil, isTablet)
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobil = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  
    const sizes = calculateSizes(isSmall, isMobil, isTablet);

//     const controls = useControls('HackerRoom', {positionX:{
//         value:2.5,
//         min:-10,
//         max :10

//     },
//     positionY:{
//         value:2.5,
//         min:-10,
//         max :10

//     },
//     positionZ:{
//         value:2.5,
//         min:-10,
//         max :10

//     },
//      rotationX :{
//     value:2.5,
//     min:-10,
//     max :10},
//         rotationY :{
//     value:2.5,
//     min:-10,
//     max :10},
//       rotationZ:{
//     value:2.5,
//     min:-10,
//     max :10
// },
// scale:{
//     value:2.5,
//     min:-10,
//     max :10}
// })
    // const controls = useControls('HackerRoom', {
    //     positionX: { value: 0, min: -10, max: 10 },
    //     positionY: { value: 0, min: -10, max: 10 },
    //     positionZ: { value: 0, min: -10, max: 10 },
    //     rotationX: { value: 0, min: -Math.PI, max: Math.PI },
    //     rotationY: { value: -Math.PI, min: -Math.PI * 2, max: Math.PI * 3 },
    //     rotationZ: { value: 0, min: -Math.PI, max: Math.PI },
    //     scale: { value: 0.10, min: 0.01, max: 0.030 },
    //   });

    const controls = useControls('HackerRoom', {
        positionX: { value: 1, min: -10, max: 10 },
        positionY: { value: -4, min: -10, max: 20 },
        positionZ: { value: 1, min: -10, max: 10 },
      
        rotationX: { value: 0.1, min: -Math.PI, max: Math.PI },
        rotationY: { value: -Math.PI, min: -Math.PI * 2, max: Math.PI * 2 },
        rotationZ: { value: 0, min: -Math.PI, max: Math.PI },
      
        scale: { value: 0.015, min: 0.04, max: 1 },
      });
  return (
    <section className='min-h-screen w-full flex flex-col relative border-2 border-blue-500'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
          Hi, I am Maryann <span className='waving-hand'>👋</span>
        </p>
        <p className='hero_tag text-gray_gradient'>Building Products</p>
      </div>

      <div className='w-full h-full absolute inset-0'>
          <Leva hidden/>
         <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvsLoader />}>
             <PerspectiveCamera makeDefault position={[0, 0, 20]} /> 
             <HeroCamera isMobile={isMobil}>
             <HackerRoom 
               
                // position={[sizes.deskPosition]} 
                // rotation = {[0, -Math.PI, 0]}
                //  scale = {sizes.deskScale } /> */}
                  position={[
                controls.positionX,
                controls.positionY,
                controls.positionZ,
              ]}
              rotation={[
                controls.rotationX,
                controls.rotationY,
                controls.rotationZ,
              ]}
              scale={controls.scale}
            />
            </HeroCamera>
                 <group >
                    <Target position= {sizes.targetPosition}/>
                    <ReactLogo position={sizes.reactLogoPosition} />
                    <Cube position = {sizes.cubePosition}/>
                    <Rings position={[-12 ,9 ,0]}/>
                    
                 </group>
           
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas> 

      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  )
}

export default Hero;
