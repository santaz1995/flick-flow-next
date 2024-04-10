'use client';
import React, { useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { MovieVideo } from '@/services/tmdb/movie/types';
import { generateYoutubeUrlByTMDBKey } from '@/libs/utils/generateYoutubeUrlByTMDBKey';

type PropType = {
  videos: MovieVideo[]
  options?: EmblaOptionsType
}

const YoutubeCarousel: React.FC<PropType> = (props) => {
  const { videos, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [scrollProgress, setScrollProgress] = useState(0)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onScroll(emblaApi)
    emblaApi.on('reInit', onScroll)
    emblaApi.on('scroll', onScroll)
  }, [emblaApi, onScroll])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {videos.map((video, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <embed
                  src={generateYoutubeUrlByTMDBKey(video.key)}
                  type="video/mp4"
                  width="100%" height="100%"
                  title={video.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>
        </div>
      </div>
    </div>
  )
}

export default YoutubeCarousel;
