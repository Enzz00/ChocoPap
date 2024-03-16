import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselPage from './components/Carrousel';
import { Link, NavLink, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SideBarBoutique } from './PAGES/SideBarBoutique';
import Footer from './PAGES/Footer';
import NavBar from './PAGES/Navbar';
import React, { useState } from 'react';
import { PanierContextProvider } from './store/panier-context';
import Products from './PAGES/Products';
import { Article } from './PAGES/Article';



const router = createBrowserRouter ( [
 

  {
    path:'/',
    element: <PanierContextProvider>
      <NavBar/> 
      <Footer/>
      </PanierContextProvider>,
    children: [
      {
        path:'/',
        element:<div>       
            <CarouselPage/>
        </div>
      },
      {
        path:'boutique',
        children: [
          {
            path:'',
            element: <div className='pageboutique'> 
            <h1>BOUTIQUE</h1>
            <div className='pagecontent'>
              <SideBarBoutique/>      
            </div>
        </div>,
          },        
          { 
            path: ':id',
          element:<Article/>
          },
        ]
       
      }
    ]
  }
    ])
  

    function App() {
  
      return <RouterProvider router={router}/>
    
    }
     export default App