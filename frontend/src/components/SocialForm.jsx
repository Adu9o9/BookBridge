import React from 'react'
import "./SocialForm.css"
import useBackground from '../hooks/useBackground';

export const SocialForm = () => {
  const {isDark} = useBackground();
  return (
    <div className={`card ${!isDark?"bg-slate-500":""}`}>
      <span>If you wish to mail the book yourself, here's our address</span>
  <div className={`card__content ${!isDark?"bg-slate-500":""}`}>
    <p className="card__title">Card Title</p>
    <p className="card__description">BookBridge HQ,</p>
    <p className="card__description">Random Street,</p>
    <p className="card__description">Random City,</p>
    <p className="card__description">Random State,</p>
    <p className="card__description">PIN: 123456</p>
  </div>
</div>

  )
}
