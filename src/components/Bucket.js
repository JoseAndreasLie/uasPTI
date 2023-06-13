import '../styles/Bucket.css';

function Bucket(color) {
    return(
        <div className="bucket">
            <div  className="card1">
                <div  className="content">
                    <img src={color.imgUrl} alt="" className="img"/>
                </div>
            </div>
        </div>
    );
}

export default Bucket;