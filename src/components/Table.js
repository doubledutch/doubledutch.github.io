import React from 'react'
import { css } from '@emotion/core'

const Table = ({ children, columns, ...other }) => {
  return (
    <div {...other} css={css`{
      display: flex;
    }`}>
      {children.map(child => (
        <div css={css`{
          width: ${100/columns}%;
        }`}>
          {child}
        </div>
      ))}
    </div>
  )
}

export default Table
