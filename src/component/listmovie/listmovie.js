import React from 'react'
import Button from '../button'
import { NavLink } from 'react-router-dom'
import Swipper from '../swipper';
import classnames from 'classnames/bind';
import style from './listmovie.module.scss'

const cx = classnames.bind(style);

export default function Listmovie({title, optionsTitle , comicSoon}) {

    

    const movies = [
        {
          id: 1,
          name: "Movie 1",
          poster:
            "https://cdn.animevietsub.info/data/poster/2024/10/08/animevsub-Zamz0ogXSH.jpg",
          rating: 4.5,
        },
        {
          id: 2,
          name: "Movie 2",
          poster:
            "https://cdn.animevietsub.info/data/poster/2024/10/10/animevsub-IT2ME00Q9U.jpg",
          rating: 3.7,
        },
        {
          id: 3,
          name: "Movie 3",
          poster:
            "https://cdn.animevietsub.info/data/poster/2024/09/30/animevsub-3BTNytMLlx.jpg",
          rating: 3.6,
        },
        {
          id: 4,
          name: "Movie 4",
          poster:
            "https://cdn.animevietsub.info/data/poster/2024/10/08/animevsub-dzovA3gksj.jpg",
          rating: 3.6,
        },
        {
          id: 5,
          name: "Movie 5",
          poster:
            "https://cdn.animevietsub.info/data/poster/2024/09/29/animevsub-DkxfU5x1v2.jpg",
          rating: 3.6,
        },
        {
          id: 6,
          name: "Movie 6",
          poster:
            "https://cdn.animevietsub.info/data/poster/2024/09/29/animevsub-ahvnEEBOdj.jpg",
          rating: 3.6,
        },
        {
          id: 7,
          name: "Movie 7",
          poster:
            "https://cdn.animevietsub.info/data/poster/2024/10/06/animevsub-3y1TWMYcIQ.jpg",
          rating: 3.6,
        },
        {
          id: 8,
          name: "Movie 8",
          poster:
            "https://cdn.animevietsub.info/data/poster/2024/10/13/animevsub-TIHly52n6l.jpg",
          rating: 3.6,
        },
        {
          id: 9,
          name: "Movie 8",
          poster:
            "https://cdn.animevietsub.info/data/poster/2024/10/13/animevsub-TIHly52n6l.jpg",
          rating: 3.6,
        },
        {
          id: 10,
          name: "Movie 8",
          poster:
            "https://cdn.animevietsub.info/data/poster/2024/10/13/animevsub-TIHly52n6l.jpg",
          rating: 3.6,
        },
        {
          id: 11,
          name: "Movie 8",
          poster:
            "https://cdn.animevietsub.info/data/poster/2024/10/13/animevsub-TIHly52n6l.jpg",
          rating: 3.6,
        },
        {
          id: 12,
          name: "Movie 8",
          poster:
            "https://cdn.animevietsub.info/data/poster/2024/10/13/animevsub-TIHly52n6l.jpg",
          rating: 3.6,
        },
        {
          id: 13,
          name: "Movie 8",
          poster:
            "https://cdn.animevietsub.info/data/poster/2024/10/13/animevsub-TIHly52n6l.jpg",
          rating: 3.6,
        },
      ];
    
      const newMovies = movies.slice(0,5);
      const newMovies1 = movies.slice(5,10);

  return (
    <div className={cx('wrapper')}>
        <div className={cx('title')}>
            <Button classname={cx('title-btn')} primary large>{title}</Button>
            {optionsTitle && (
              optionsTitle.items.map((items , index) => {
                  return (
                    <NavLink key={index} className={({isActive }) => (isActive ? cx('active'): '')} to={items.to}>{items.title}</NavLink>
                  )
              })
            )}
        </div>

        <div className={cx('list-items')}>
            <Swipper data={newMovies} slidersPerview={5} spaceSilder='20' width={142} height={212} described comicSoon={comicSoon}/>

        </div>
        <div>
            <Swipper data={newMovies1} slidersPerview={5} spaceSilder='20'  width={142} height={212} described comicSoon={comicSoon}/>
        </div>
        <Button classname={cx('more-btn')} primary>Xem thêm</Button>

    </div>
  )
}
