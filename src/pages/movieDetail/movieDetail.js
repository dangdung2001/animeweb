import React from 'react'
import { movie } from '.';
import { getMovie } from '~/services/movieService';

export default function movieDetail() {

  const handleMovie = async () => {
    console.log('Movie clicked');
    const response = await getMovie();
    console.log(response);
  }

  return (
    <div onClick={handleMovie}>movieDetail</div>
  )
}
