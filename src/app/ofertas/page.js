import React from 'react'
import Image from 'next/image'

import SaleProducts from "@/components/uiSales/SaleProducts"

const page = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-[70px]"></div>
      <Image src="/banner-ofertas.jpg" alt="Todas nuestra ofertas" width={1100} height={100} className="w-full h-25 mb-2 mt-6" />
      <SaleProducts/>
    </div>
  )
}

export default page