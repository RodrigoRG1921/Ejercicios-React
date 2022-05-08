import { useState, useEffect } from 'react';

import MOVIES from '../data';
import Button from './Button';

const customSortByKey = ({
  keyToSort,
  arrayToSort,
  isAscendent
}) => arrayToSort.sort((element1, element2) => {
  if(element1[keyToSort] < element2[keyToSort]) {
    return isAscendent ? -1 : 1;
  }
  if(element1[keyToSort] > element2[keyToSort]) {
    return isAscendent ? 1 : -1;
  }
  if(element1[keyToSort] === element2[keyToSort]) {
    return 0;
  }
});

const Movies = () => {
  const [moviesSorted, setMoviesSorted] = useState([]);
  const [isAscendent, setIsAscendent] = useState(true);

  useEffect(() => {
    if (moviesSorted.length === 0) {
      setMoviesSorted(MOVIES);
    }
  }, []);

  const handleClick = (by) => {
    let sorted = [];

    if (by === 'name') {
      sorted = customSortByKey({
        arrayToSort: MOVIES,
        keyToSort: 'name',
        isAscendent: isAscendent
      });
    } else if (by === 'duration') {
      sorted = customSortByKey({
        arrayToSort: MOVIES,
        keyToSort: 'duration',
        isAscendent: isAscendent
      });
    } else { // by = year
      sorted = customSortByKey({
        arrayToSort: MOVIES,
        keyToSort: 'year',
        isAscendent: isAscendent
      });
    }

    setMoviesSorted([...sorted]);
  }

  return (
    <div>
      <Button name='Name' onClick={() => { handleClick('name')} }/>
      <Button name='Duration' onClick={() =>{ handleClick('duration')} }/>
      <Button name='Year' onClick={() =>{ handleClick('year')} }/>
      <Button
        isSort={ false }
        name='Ascendent'
        onClick={ () => setIsAscendent(!isAscendent) }/>
      <ul>
        { moviesSorted.map((movie) => {
          return(
            <li
              key={movie.name}
              style={{marginTop:'30px'}}>
                Movie: {movie.name} Duration: {movie.duration} Year: {movie.year}
            </li> )
        })} 
      </ul>
    </div>
  )
}

export default Movies;