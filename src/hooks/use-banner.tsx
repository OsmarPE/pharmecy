import { Banner } from '@/lib/types/banner'
import { getBanners } from '@/services/banner.services'
import React, { useEffect, useState } from 'react'

export default function useBanner() {
  
    const [data, setData] = useState<Banner[]>([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
      getBanners()
        .then((data) => {
          setData(data)
          setLoading(false)
        })
        .catch((error) => {
                  })
    }, [])

    return {
      data,
      loading,
    }
}
