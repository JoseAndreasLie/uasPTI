import './Home.css';
import Title from '../components/Title';
import Bucket from '../components/Bucket';
import Subtitle from '../components/Subtitle';
import Galeri from '../components/Galeri'
import whitebucket from '../img/whitebucket.png';
import blackbucket from '../img/blackbucket.png';

function Home() {
  return (
    <div className="App">
      <div className="background intro">
          <Title />
      </div>
      <div className="background bucket">
        <div className="water">
          <Bucket imgUrl={whitebucket}/>
          <Bucket imgUrl={blackbucket}/>
        </div>
      </div>
      <div className="background galeri">
        <Galeri />
      </div>
      <div className="background paint">
      </div>
    </div>
  );
}

export default Home;
