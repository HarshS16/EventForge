'use client'

import { useState } from 'react'

interface EventRatingProps {
  eventId: string
  initialRating?: number
  onRate?: (rating: number) => void
}

export const EventRating = ({ eventId, initialRating = 0, onRate }: EventRatingProps) => {
  const [rating, setRating] = useState(initialRating)
  const [hover, setHover] = useState(0)

  const handleRate = (value: number) => {
    setRating(value)
    onRate?.(value)
  }

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          className={`text-xl transition-colors ${
            star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
          }`}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          onClick={() => handleRate(star)}
        >
          ★
        </button>
      ))}
      <span className="ml-2 text-sm text-gray-600">
        {rating > 0 ? `${rating}/5` : 'Rate this event'}
      </span>
    </div>
  )
}