import React from 'react'
import {css} from '@emotion/core'

const YouTube = ({videoId, title}) => (
  <iframe
    css={css`{
      display: block;
      margin: 0 auto 5px auto;
    }`}
    title={title}
    width="347"
    height="195"
    src={`https://www.youtube.com/embed/${videoId}`}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen />
)

export default YouTube
