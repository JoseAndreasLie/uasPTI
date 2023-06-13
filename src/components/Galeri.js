import '../styles/Galeri.css';


function Galeri(nama) {
  return(
    <div className="Galeri">
      <figure className="snip1321"><img className="tembok" src={nama.imgUrl} alt=""/>
    <figcaption>
      <img className="ember" src={nama.bucket} alt=""/>
      <h2>{nama.title}</h2>
    </figcaption>
  </figure>
  </div>
  );
}

export default Galeri