import '../styles/Home.css';
import Title from '../components/Title';
import Motivasion from '../components/Motivasion';
import Bucket from '../components/Bucket';
import Galeri from '../components/Galeri';
import whitebucket from '../img/whitebucket.png';
import blackbucket from '../img/blackbucket.png';
import bluebucket from '../img/blueBucket.png';
import galeri1 from '../img/galeriPutih.jpg';
import galeri2 from '../img/galeriHitam.jpg';
import galeri3 from '../img/galeriBiru.webp';
import {motion as m} from 'framer-motion';

function Home() {
    return (
        <m.div 
        className="App"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.75, ease: "easeOut"}}
        exit={{opacity: 1}}
        >
        <div className="background intro">
            <Motivasion className="motivasion" />
            <Title />
            
        </div>
        <div className="background bucket">
            <div className="water">
            <Bucket imgUrl={whitebucket}/>
            <Bucket imgUrl={blackbucket}/>
            </div>
        </div>
        <div className="background galeri">
            <h1 className="titleGaleri">Our Galeri</h1>
            <div className="isiGaleri">
                <Galeri 
                    bucket={whitebucket}
                    imgUrl={galeri1}
                    title="Snow White"
                />
                <Galeri 
                    bucket={bluebucket}
                    imgUrl={galeri3}
                    title="Dark Curelean"
                />
                <Galeri 
                    bucket={blackbucket}
                    imgUrl={galeri2}
                    title="Dark Jungle Green"
                />
            </div>
        </div>
    </m.div>
);
}

export default Home;
