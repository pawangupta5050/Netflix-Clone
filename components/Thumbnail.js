import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'
import { forwardRef } from 'react'
import styles from '../styles/Thumbnail.module.css'

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'
  return (
    <div ref={ref} className={styles.app__thumbnail}>
        <Image  
            layout='responsive'
            src={`${BASE_URL}${result.backdrop_path || result.poster_path }` || `${BASE_URL}${result.poster_path }`}
            height={1080}
            width={1920}
            alt={`Thumbnail-${result.title}`}
        />
        <div className={styles.app__thumbnail_content}>
          <p className={styles.app__thumbnail_overview}>{result.overview}</p>
          <h2 className={styles.app__thumbnail_title}>{result.title || result.original_name}</h2>
          <p className={styles.app__thumbnail_last}>
            { result.media_type && `${result.media_type} •`}{" "}
            { result.release_date || `${result.first_air_date}`}{" "}
            <ThumbUpIcon className={styles.app__thumbnail_icon} /> {result.vote_count}
          </p>
        </div>
    </div>
  )
})

export default Thumbnail