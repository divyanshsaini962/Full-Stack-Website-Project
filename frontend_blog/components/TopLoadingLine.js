import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function TopLoadingLine(){
    const router = useRouter();
    const [loadingProgress,setLoadingProgress] = useState(0);

    useEffect(()=>{
     const handleStart = ()=>{
        setLoadingProgress(80);
     }
     const handleComplate =()=>{
        setLoadingProgress(1000);
        setTimeout(()=>{
           setLoadingProgress(0);
        },500);
     }
     //add event listernes for page loading 
     router.events.on('routeChangeStart',handleStart);
     router.events.on('routeChangeComplate',handleComplate);
     router.events.on('routeChangeError',handleComplate);

     //clean up event listenrs
     return()=>{
        router.events.off('routeChangeStart',handleStart);
        router.events.off('routeChangeComplate',handleComplate);
        router.events.off('routeChangeError',handleComplate);
     }
    },[router.events])
    return<>
       <div className="topLoadingLine" style={{width:`${loadingProgress}%`}}>
           
       </div>
    </>
}