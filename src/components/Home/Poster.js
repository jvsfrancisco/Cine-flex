import {Link} from "react-router-dom";

export default function Poster({id, posterURL, title }){
    
    return (
        <div class = "Posters">
            <div className = "Poster">
                {/* <Link to = {`/movies/${id}`}> */}
                    <img src = {posterURL} alt = {title}/>
                {/* </Link> */}
            </div>
        </div> )
}

