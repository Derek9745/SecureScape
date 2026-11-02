
import './App.css'
import Login from './Login'
import Signup from './Signup'
import UserProfile from './UserProfile'
import CheckList from './CheckList'
import { useEffect, useRef,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'
import Email_phishing from './email_phishing'
import "bootstrap/dist/css/bootstrap.min.css";






export default function App() {
  const mountRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    // 1. Scene, Camera, and Renderer
    const scene = new THREE.Scene();

    scene.background = new THREE.Color(0x080b10);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);

    
    // Clear out any old canvas befoare appending a new one 
    if (mountRef.current) {
      mountRef.current.innerHTML = ''
      mountRef.current.appendChild(renderer.domElement)
    }

  // General ambient lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  // Green security light from the front
  const securityLight = new THREE.PointLight(0x19dc20, 50, 20);
  securityLight.position.set(2, 2, 5);
  scene.add(securityLight);

  // White light from the front-left
  const frontLight = new THREE.DirectionalLight(0xffffff, 2);
  frontLight.position.set(-3, 3, 5);
  scene.add(frontLight);

    // 2. Create a Cube
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    camera.position.z = 5

    // 3. Animation Loop
    let animationFrameId
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    animate()

    // 4. Handle Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // 5. Cleanup on Unmount
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      // Safely clean up DOM elements
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, []) 



  return (
  <div className="app">
    <div
      ref={mountRef}
      style={{ width: '100vw', height: '100vh' }}
    />

    
    <div className = "upperMenuBar">
      <h3>Securescape</h3>
      <div className = "upperMenuBarVBox">
        <button class = "menuButton" onClick={() => navigate('Login')}> <div>User Profile</div></button>
        <button class = "menuButton"><div>LeaderBoard</div></button>
        <button class = "menuButton"onClick= {()=> navigate('/Load')}><div>Load/Save </div></button>
        <button class = "menuButton" onClick= {()=> navigate('/Checklist')}><div>Challenges Completed List</div></button>
         <button class = "menuButton" onClick={() => navigate('/email_phishing')}><div>Email Phishing</div></button>
        </div>
    </div>

        <div className="hud">
        <div className="typewriter">
          <p>Welcome to SecureScape......</p>
        </div>

        <button className="startButton" onClick={()=> navigate('/Game')}>
          Begin Escape
        </button>
      </div>

    </div>


  
)



}
