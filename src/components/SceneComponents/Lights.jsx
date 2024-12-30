import React from 'react'
import useMousePosition from '../../utils/mousePosition';

export default function Lights() {
      const { x, y } = useMousePosition();
      const width = window.innerWidth; 
      const height = window.innerHeight;
      
      const normalizedX = x / width; 
      const normalizedY = y / height; 
      
      const mappedX = normalizedX * (-4.5 - -5.5) + -5.5; 
      const clampedX = Math.max(-5.5, Math.min(-4.5, mappedX));
      
      const mappedY = normalizedY * (6.5 - 4.5) + 2.5;  
      const clampedY = Math.max(4.5, Math.min(6.5, mappedY)); 
    
      const mappedX2 = normalizedX * (5 - -35) + -35; 
      const clampedX2 = Math.max(-35, Math.min(5, mappedX2));
      
      const mappedY2 = normalizedY * (100 - 150) + 150;  
      const clampedY2 = Math.max(100, Math.min(150, mappedY2));
  return (
<>
<directionalLight position={[clampedX, -clampedY, 10.0]} intensity={0.8} color={"#BDBDBD"} />
            <directionalLight position={[clampedX2, clampedY2, 150]} intensity={.9} color={"#BDBDBD"}/>
            <directionalLight position={[21.4, 33.3, 30.8]} intensity={.5} color={"#BDBDBD"} /> 
            
            <directionalLight position={[9.8, -11.6, 1.0]} intensity={1.5} />
            <directionalLight position={[80, -40.0, -9.7]} intensity={.6} />
            <directionalLight position={[-20.0, 80.8, -65.7]} intensity={.5} />

            <directionalLight position={[-39.6, -11.4, 150.0]} intensity={1.3} color={"#BFC6CC"} /> 
            </>
  )
}
