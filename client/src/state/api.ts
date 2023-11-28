import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { GetKpisResponse } from "./types";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}),
    reducerPath: "main",
    tagTypes: ["Kpis", "Products"],
    endpoints: (build)=> ({
        getKpies: build.query<GetKpisResponse, string>({
            query: () =>"kpi/kpis/",
            providesTags: ["Kpis"]
        }),
        getProducts: build.query<GetKpisResponse, string>({
            query: () =>"kpi/kpis/",
            providesTags: ["Products"]
        })
    })
})
export const {useGetKpiesQuery, useGetProductsQuery} = api;