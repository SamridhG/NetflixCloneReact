import { Navigate, RouteObject } from 'react-router-dom';
import { ROUTE, ROUTE_CONFIG } from './constant';
import Header from '../components/Header';
import Home from '../View/Home';
export const PRIVATE_ROUTE:Array<RouteObject>=[
 {
    path:`${ROUTE_CONFIG.HOME.path}`,
    element:<Home/>
 },
 {
    path:`${ROUTE_CONFIG.TVSHOW.path}`,
    element:<Header/>
 },
 {
   path:`${ROUTE_CONFIG.MOVIES.path}`,
   element:<Header/>
},
{
   path:`${ROUTE_CONFIG.MYLIST.path}`,
   element:<Header/>
},
 {
   path:`*`,
   element:<Navigate to={ROUTE.HOME}/>
}
]