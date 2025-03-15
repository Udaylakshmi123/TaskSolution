import { useEffect, useState } from 'react';

const ProgressBar = ({progress})=>{
    const [animatedProgress, setAnimatedprogress] = useState(0);
    useEffect(()=>{
       setTimeout(()=>setAnimatedprogress(progress),100);
    },[progress]);
    
    return (<div className='outer'>
      {/* <div className='inner' style={{width: `${progress}%`}}>{progress}%</div> */}
      <div className='inner' style={{transform:`translateX(${animatedProgress - 100}%)`}} role='progressbar' aria-valuenow={animatedProgress} aria-valuemax="100" aria-valuemin="0">{animatedProgress}%</div>
    </div>)
}
export default ProgressBar;