import React from 'react'
import classnames from 'classnames/bind';
import style from './slider.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faHockeyPuck, faStar, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import MoviePost from './moviePost';
import Swipper from '~/component/swipper';

const cx = classnames.bind(style);

const posts = [
  {
    id: 1,
    title: 'Movie 1',
    poster: 'https://cdn.animevietsub.info/data/big_banner/2024/11/03/animevsub-sjO1EkwDz5.jpg',
    releaseDate: '2001',
    genre: ['Action', 'Adventure'],
    rating: 4.5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod purus eget neque bibendum, id fermentum velit gravida. Nulla facilisi. Sed vel velit id neque commodo placerat a ut lectus.',
  },
  {
    id: 2,
    title: 'Movie 1',
    poster: 'https://cdn.animevietsub.info/data/big_banner/2024/11/03/animevsub-sjO1EkwDz5.jpg',
    releaseDate: '2001',
    genre: ['Action', 'Adventure'],
    rating: 4.5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod purus eget neque bibendum, id fermentum velit gravida. Nulla facilisi. Sed vel velit id neque commodo placerat a ut lectus.',
  },
  {
    id: 3,
    title: 'Movie 1',
    poster: 'https://cdn.animevietsub.info/data/big_banner/2024/11/03/animevsub-sjO1EkwDz5.jpg',
    releaseDate: '2001',
    genre: ['Action', 'Adventure'],
    rating: 4.5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod purus eget neque bibendum, id fermentum velit gravida. Nulla facilisi. Sed vel velit id neque commodo placerat a ut lectus.',
  }
]

 function Slider() {
  return (
   <>
    <Swipper data={posts} slider pagiable />
   </>
  )
}

export default Slider;
