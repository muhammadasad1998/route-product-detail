import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'

const Router_App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path='' element={<Products/>}/>
                <Route path='products' element={<Products/>}/>
                <Route path='Product/:id' element={<ProductDetail/>}/>
            </Route>
        )
    )
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default Router_App