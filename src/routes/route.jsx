import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../components/root";
import Main from '../pages/main';
import {CardDetail} from "../components/CardDetail/details-card";
import { loader as movieLoader } from "../components/api/api";
import Login from "../components/ModalPoppup/Login";
import Token from "../components/ModalPoppup/Token";

import { RequireAuth } from "../context/Auth";
import Header from "../header";
import Unauthorrized from "../pages/Unauthorrized";

const router = createBrowserRouter([
    {
      path:'/',
      element: <App/>,
      children:[
        {
        path:'/header',
        element:<Header/>
        },
        {
          path:'/unauthorized',
          element:<Unauthorrized/>
        }
          ,
          {
            path:'/login',
            element:<Login/>
          },
        {
          path:'/token',
          element:<Token/>
        },
        {
          element:<RequireAuth/>,
          children:[
            {
              path:'/',
              element:<Main/>},
               {
                  path: '/movie/:movieId',
                  element: <CardDetail/>,
                  loader: movieLoader,
                },    
          ]
        }
       
        ]
    },
    
  ]);

  export {router}