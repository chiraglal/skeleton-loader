import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import Skeleton from './components/Skeleton'

const App = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className='flex justify-center items-center h-screen'>
      {loading ? <Skeleton /> : <Card />}
    </div>
  )
}

export default App