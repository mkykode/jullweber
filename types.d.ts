declare module 'react-particles-webgl';
// create global types for ParticleField
declare module 'react-particles-webgl' {
  export interface ParticleFieldConfig {
    showCube: boolean;
    dimension: string;
    boundaryType: string;
    velocity: number;
    antialias: boolean;
    direction: {
      xMin: number;
      xMax: number;
      yMin: number;
      yMax: number;
      zMin: number;
      zMax: number;
    };
    lines: {
      colorMode: string;
      color: string;
      transparency: number;
      limitConnections: boolean;
      maxConnections: number;
      minDistance: number;
      visible: boolean;
    };
    particles: {
      colorMode: string;
      color: string;
      transparency: number;
      shape: string;
      count: number;
      minSize: number;
      maxSize: number;
      visible: boolean;
    };
    cameraControls: {
      enabled: boolean;
      enableDamping: boolean;
      dampingFactor: number;
      enableZoom: boolean;
      autoRotate: boolean;
      autoRotateSpeed: number;
      resetCameraFlag: boolean;
    };
  }
}
