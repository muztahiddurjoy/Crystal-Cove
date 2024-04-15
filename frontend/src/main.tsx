import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import Preloader from './components/Preloader/Preloader.tsx'
import UserWrapper from './components/UserWrapper.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ChakraProvider>
        <Suspense fallback={<Preloader/>}>
          <UserWrapper>
            <RouterProvider router={router}/>
          </UserWrapper>
        </Suspense>
      </ChakraProvider>
  </React.StrictMode>,
)
