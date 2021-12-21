import { angularPath, cssPath, htmlPath, jsPath, reactPath, sveltePath, vuePath } from './paths';

export function useIcon(icon){
  function createSVG(viewBox, path){
    return(<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
    <path fill="currentColor" d={path} />
    </svg>)
  }
  
  switch (icon){
    case 'angular': return createSVG("0 0 448 512", angularPath);
    case 'css': return createSVG("0 0 384 512", cssPath);
    case 'html5': return createSVG("0 0 384 512", htmlPath);
    case 'javascript': return createSVG("0 0 448 512", jsPath);
    case 'react': return createSVG("0 0 512 512", reactPath);
    case 'svelte': return createSVG("0 0 32 32", sveltePath);
    case 'vue': return createSVG("0 0 448 512", vuePath);
    default: return '';
  }
}
