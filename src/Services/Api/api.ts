import { createApi,fetchBaseQuery,BaseQueryFn,BaseQueryApi } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL, token } from "./constant";

const baseQuery:BaseQueryFn=fetchBaseQuery({
    baseUrl:API_BASE_URL,
    prepareHeaders:async (headers:Headers)=>{
        headers.append('authorization',`${token}`)
        return headers
    },
})
const baseQueryWithInterceptor = async (
    args: unknown,
    api: BaseQueryApi,
    extraOptions: object
  ) => {
    const result = await baseQuery(args, api, extraOptions);
    return result;
  };
  const api = createApi({
    baseQuery: baseQueryWithInterceptor,
    endpoints: () => ({}),
  });
  
  export default api;