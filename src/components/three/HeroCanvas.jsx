import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

const vertexShader = `
  varying vec3 v_position;
  varying vec3 v_normal;
  
  void main() {
    v_position = position;
    v_normal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float u_time;
  uniform vec3 u_color;
  varying vec3 v_position;
  varying vec3 v_normal;

  // 2D Random
  float random (vec2 st) {
      return fract(sin(dot(st.xy,
                           vec2(12.9898,78.233)))*
          43758.5453123);
  }

  // 2D Noise
  float noise (vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);

      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));

      vec2 u = f*f*(3.0-2.0*f);
      return mix(a, b, u.x) +
              (c - a)* u.y * (1.0 - u.x) +
              (d - b) * u.x * u.y;
  }

  void main() {
    float time = u_time * 0.2;
    vec3 pos = v_position * 2.0;

    float pattern = noise(pos.xy + time) * 0.5 + noise(pos.yz + time) * 0.5;
    float fresnel = 1.0 - dot(normalize(v_normal), vec3(0.0, 0.0, 1.0));
    fresnel = pow(fresnel, 2.0);

    float finalPattern = mix(pattern, fresnel, 0.5);

    vec3 color = u_color * finalPattern;
    
    gl_FragColor = vec4(color, finalPattern * 0.8);
  }
`;

const TechIcon = React.memo(({ iconPath, position, speed, rotationIntensity, floatIntensity }) => {
  const texture = useLoader(THREE.TextureLoader, iconPath);
  
  return (
    <Float
      speed={speed}
      rotationIntensity={rotationIntensity}
      floatIntensity={floatIntensity}
      position={position}
    >
      <mesh>
        <planeGeometry args={[0.6, 0.6]} />
        <meshStandardMaterial 
          map={texture}
          transparent
          opacity={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
});

const Scene = () => {
  const groupRef = useRef();
  
  // ALL tech icons from directory
  const techIcons = [
    '/icons/anthropic.png',
    '/icons/astro.png',
    '/icons/canva.png',
    '/icons/chatGPT.png',
    '/icons/css.png',
    '/icons/deepseek.png',
    '/icons/docker.png',
    '/icons/express.png',
    '/icons/figma.png',
    '/icons/framer-motion.png',
    '/icons/gh-copilot.png',
    '/icons/git.png',
    '/icons/github.png',
    '/icons/html.png',
    '/icons/huggingface.png',
    '/icons/illustrator.png',
    '/icons/jamstack.png',
    '/icons/jasmine.png',
    '/icons/jenkins.png',
    '/icons/jest.png',
    '/icons/js.png',
    '/icons/nextjs.png',
    '/icons/node.png',
    '/icons/nodejs.png',
    '/icons/openrouter.png',
    '/icons/photoshop.png',
    '/icons/playwright.png',
    '/icons/pnpm.png',
    '/icons/postgreSQL.png',
    '/icons/react-router.png',
    '/icons/react.png',
    '/icons/sketch.png',
    '/icons/supabase.png',
    '/icons/tailwind.png',
    '/icons/typescript.png',
    '/icons/ubuntu.png',
    '/icons/vite.png',
    '/icons/webhooks.png'
  ];

  // Memoize positions and animation properties to prevent recalculation on every render
  const iconProps = useMemo(() => 
    techIcons.map(() => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
      ],
      speed: 1.5 + Math.random() * 2,
      rotationIntensity: 1 + Math.random(),
      floatIntensity: 1.5 + Math.random()
    })), [techIcons.length]
  );

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.05;
      groupRef.current.rotation.x = time * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      
      {techIcons.map((iconPath, i) => (
        <TechIcon
          key={iconPath}
          iconPath={iconPath}
          position={iconProps[i].position}
          speed={iconProps[i].speed}
          rotationIntensity={iconProps[i].rotationIntensity}
          floatIntensity={iconProps[i].floatIntensity}
        />
      ))}
      
      <Float
        speed={1}
        rotationIntensity={0.2}
        floatIntensity={0.4}
      >
        <CentralObject />
      </Float>
    </group>
  );
};

const CentralObject = () => {
  const meshRef = useRef();
  const uniforms = useMemo(
    () => ({
      u_time: { value: 0.0 },
      u_color: { value: new THREE.Color('#88aaff') },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    if (meshRef.current) {
      meshRef.current.material.uniforms.u_time.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={3.5}>
      <icosahedronGeometry args={[1, 6]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={true}
        transparent={true}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};

const HeroCanvas = () => {
  return (
    <Canvas dpr={[1, 2]} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#050505', 10, 30]} />
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
      <Scene />
      <Environment preset="night" />
    </Canvas>
  );
};

export default HeroCanvas;