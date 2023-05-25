import './Bucket.css'

function Bucket(color) {
    return(
        <div className="bucket">
            <div className="card1">
                <div className="content">
                    <img src={color.imgUrl} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Bucket;