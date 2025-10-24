'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface WishlistButtonProps {
  eventId: string
  isWishlisted?: boolean
}

export const WishlistButton = ({ eventId, isWishlisted = false }: WishlistButtonProps) => {
  const [wishlisted, setWishlisted] = useState(isWishlisted)

  const toggleWishlist = () => {
    setWishlisted(!wishlisted)
    // Add API call here to save to database
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleWishlist}
      className={`transition-all ${
        wishlisted 
          ? 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100' 
          : 'hover:bg-gray-50'
      }`}
    >
      {wishlisted ? '❤️ Saved' : '🤍 Save'}
    </Button>
  )
}