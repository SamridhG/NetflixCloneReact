import { RouteObject } from 'react-router-dom';
import { ROUTE_CONFIG } from './constant';
import BaseComponent from '../View/Auth/component/BaseComponent';
export const PUBLIC_ROUTE:Array<RouteObject>=[
 {
    path:`${ROUTE_CONFIG.LOGIN.path}`,
    element:<BaseComponent/>
 },
 {
   path:`${ROUTE_CONFIG.REGISTER.path}`,
   element:<BaseComponent/>
},
 {
    path:`*`,
    element:<BaseComponent/>
 }
]