import React from 'react'
import Lazyload from 'react-lazyload'
import MainWrapper from './styles'

export default function LazyloadImg({ url }) {
  return (
    <MainWrapper>
      <Lazyload throttle={1000} height={300}>
        <img src={url} alt=""/>
      </Lazyload>
    </MainWrapper>
  )
}