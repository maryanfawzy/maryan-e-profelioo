import React from 'react'
import { Html, useProgress } from '@react-three/drei'
const CanvsLoader = () => {
  const {progress} = useProgress()
  console.log(progress)
  return (
   <html
   as='div'
   center 
   style={{
    display : 'flex',
    justifyContent :'center',
    alignItems :'center',
    flexDirection: 'column'
   }}

   
   >
    <span className='canvas-loader'/>
    <p style={{fontSize:14, color: '#f1f1f1', fontWeight:800, marginTop:40}}>
      {progress !==0 ?`${progress.toFixed(2)}` :'Loading ...'}

    </p>

    
   </html>
  )
}

export default CanvsLoader
