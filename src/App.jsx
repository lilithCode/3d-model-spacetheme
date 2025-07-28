import { Routes, Route, useLocation } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import "./App.css";
import React, { Suspense, lazy, useState, useEffect } from "react";
import { NavigationProvider, useNavigation } from "./components/NavigationContext";

const WarpTunnel = lazy(() => import("./components/WarpEffect"));
const RotatingStars = lazy(() => import("./components/RotatingStars"));
const SpacecraftModel = lazy(() => import("./components/Spacecraft"));
const HolographicMsg = lazy(() => import("./components/HolographicMsg"));
const AboutPlanet = lazy(() => import("./components/AboutPlanet"));
const ProjectPlanet = lazy(() => import("./components/ProjectPlanet"));
const ContactPlanet = lazy(() => import("./components/ContactPlanet"));
const SkillsPlanet = lazy(() => import("./components/SkillsPlanet"));
const About = lazy(() => import("./components/AboutMe"));
const Project = lazy(() => import("./components/ProjectsPage"));
const Contact = lazy(() => import("./components/Contact"));
const Skills = lazy(() => import("./components/Skills"));

function Scene() {
  const location = useLocation();
  const { isNavigating, navigate } = useNavigation();
  const [key, setKey] = useState(0);
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
    setShowModel(true);
  }, [location.pathname, isNavigating]);

  useEffect(() => {
    import("./components/AboutMe");
    import("./components/ProjectsPage");
    import("./components/Skills");
    import("./components/Contact");
  }, []);

  return (
    <div className="bg-black w-full h-screen">
      <Navbar />
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={5} />
        <Suspense fallback={<Loader />}>
          {!showModel && (
            <WarpTunnel key={key} onComplete={() => setShowModel(true)} />
          )}
          {!isNavigating && showModel && (
            <>
              <SpacecraftModel />
              <RotatingStars />
              <HolographicMsg />
              <AboutPlanet onClick={() => navigate('/about')} />
              <ProjectPlanet onClick={() => navigate('/projects')} />
              <SkillsPlanet onClick={() => navigate('/skills')} />
              <ContactPlanet onClick={() => navigate('/contact')} />
            </>
          )}
        </Suspense>
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>
    </div>
  );
}

function App() {
  return (
    <NavigationProvider>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Scene />} />
          <Route path="/home" element={<Scene />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </NavigationProvider>
  );
}

export default App;
