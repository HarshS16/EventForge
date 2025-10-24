export const eventCategories = [
  { name: 'Music & Concerts', icon: '🎵', color: 'bg-purple-100 text-purple-700' },
  { name: 'Food & Drink', icon: '🍽️', color: 'bg-orange-100 text-orange-700' },
  { name: 'Sports & Fitness', icon: '⚽', color: 'bg-green-100 text-green-700' },
  { name: 'Arts & Culture', icon: '🎨', color: 'bg-pink-100 text-pink-700' },
  { name: 'Technology', icon: '💻', color: 'bg-blue-100 text-blue-700' },
  { name: 'Business', icon: '💼', color: 'bg-gray-100 text-gray-700' },
  { name: 'Health & Wellness', icon: '🧘', color: 'bg-teal-100 text-teal-700' },
  { name: 'Education', icon: '📚', color: 'bg-indigo-100 text-indigo-700' },
]

export const getCategoryIcon = (categoryName: string) => {
  const category = eventCategories.find(cat => 
    cat.name.toLowerCase().includes(categoryName.toLowerCase())
  )
  return category?.icon || '📅'
}

export const getCategoryColor = (categoryName: string) => {
  const category = eventCategories.find(cat => 
    cat.name.toLowerCase().includes(categoryName.toLowerCase())
  )
  return category?.color || 'bg-gray-100 text-gray-700'
}