import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselPage from './Carrousel';
import { SideBarBoutique } from './SideBarBoutique';
import Footer from './Footer';
import NavBar from './Navbar';
import { PanierContextProvider } from './panier-context';
import { Article } from './Article';
import React from 'react';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';

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