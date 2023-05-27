import '../styles/Bucket.css';
import {motion as m} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import { useAnimation } from 'framer-motion';

function Bucket(color) {
    const {ref, inView} = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();

    useEffect(() =>{
        if(inView){
            animation.start({
                y:0,
                transition:{
                    type: 'keyframes', duration: 0.5, bounce: 0.3
                }
            });
        }
        if (!inView){
            animation.start({y: '100vh'})
        }
    },[inView]);
    return(
        <div ref={ref} className="bucket">
            <div  className="card1">
                <div  className="content">
                    <m.h2 animate={animation} className="nama">Our Product</m.h2>
                    <img src={color.imgUrl} alt="" className="img"/>
                </div>
            </div>
        </div>
    );
}

export default Bucket;