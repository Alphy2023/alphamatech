import React from 'react'
import {MainNavbar} from "@/components/common/main-navbar"

const MainLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
          <MainNavbar/>
          <main>
          {children}
          </main>
      </div>
  )
}

export default MainLayout