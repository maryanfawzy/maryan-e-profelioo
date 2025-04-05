import { useGLTF } from '@react-three/drei'
import React from 'react'

const Target = () => {
  const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',)
  return (
    <div>
      
    </div>
  )
}

export default Target
