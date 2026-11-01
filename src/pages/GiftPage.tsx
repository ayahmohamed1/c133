import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'
import NotFound from './NotFound'

export default function GiftPage() {
  const { id } = useParams<{ id: string }>()
  const giftKey = id ? id.toLowerCase() : ''
  const data = giftData[giftKey]

  useEffect(() => {
    if (data) {
      document.title = `Happy Birthday ${data.name}! 🎂`
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute('content', `A special birthday message for ${data.name}`)
      }
    } else {
      document.title = 'Gift Not Found'
    }
  }, [data])

  if (!data) {
    return <NotFound />
  }

  return <GiftClient data={data} />
}
