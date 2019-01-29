import React from 'react'
import {css} from '@emotion/core'
import Link from './Link'
import code from '../../assets/code.ico'
import atom from '../../assets/atom.ico'
import sublime from '../../assets/sublime.ico'

const InlineImage = ({src, alt}) => (
  <img
    css={css`{
      height: 20px;
      width: 20px;
      margin: 2px;
    }`}
    alt={alt}
    src={src}
  />
)

export default InlineImage

export const VSCode = () => (
  <Link to="https://code.visualstudio.com/">
    <InlineImage src={code} alt="Visual Studio Code" />
  </Link>
)

export const Atom = () => (
  <Link to="https://atom.io/">
    <InlineImage src={atom} alt="Atom" />
  </Link>
)

export const Sublime = () => (
  <Link to="https://www.sublimetext.com/">
    <InlineImage src={sublime} alt="Sublime Text" />
  </Link>
)
