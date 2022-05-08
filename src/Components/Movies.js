import PropTypes from "prop-types"
import MOVIES from '../data'
import Button from "./Button"
import { useState } from "react"
const Movies = (props) => {
    
    const [moviesSorted, setMoviesSorted] = useState([])
    const [isAscendent, setIsAscendent] = useState(true)

    const handleClick = (by) => {
        let sorted=[];


        if(by=="duration"){
           setIsAscendent(!isAscendent)
            if (isAscendent){
            sorted = MOVIES.sort((element1,element2)=>{
                    if(element1.duration < element2.duration) {
                        return -1
                    }
                    if(element1.duration > element2.duration) {
                        return 1
                    }
                    if(element1.duration == element2.duration) {
                        return 0
                    }
                })} else{
                    sorted = MOVIES.sort((element1,element2)=>{
                        if(element1.duration < element2.duration) {
                            return 1
                        }
                        if(element1.duration > element2.duration) {
                            return -1
                        }
                        if(element1.duration == element2.duration) {
                            return 0
                        }
                    })}
                }
            setMoviesSorted([...sorted])
        }
        if(by=="name"){
            sorted= MOVIES.sort((element1,element2)=>{
                if(element1.name < element2.name) {
                    return -1
                }
                if(element1.name > element2.name) {
                    return 1
                }
                if(element1.name == element2.name) {
                    return 0
                }
            })
            
            setMoviesSorted([...sorted]);
        }
        if (by=="year"){
            sorted= MOVIES.sort((element1,element2)=>{
                if(element1.year < element2.year) {
                    return -1
                }
                if(element1.year > element2.year) {
                    return 1
                }
                if(element1.year == element2.year) {
                    return 0
                }
            })
            setMoviesSorted([...sorted]);
        }
    }

    return (
        <div>
        <Button name="Name" onClick={() =>{handleClick("name")}}/>
        <Button name="Duration" onClick={() =>{handleClick("duration")}}/>
        <Button name="Year" onClick={() =>{handleClick("year")}}/>
        <ul>
           {moviesSorted.map((movie) => {
               return(<li key={movie.name} style={{marginTop:"30px"}}>Movie: {movie.name} Duration: {movie.duration} Year: {movie.year}</li> )
            })} 
        </ul>
        </div>

    )
}

Movies.propTypes = {
    movie: PropTypes.array,

}

export default Movies