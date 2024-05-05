import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constant";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL, credentials: "include" })

export const apiSlice = createApi({
    baseQuery,
    reducerPath: "api",
    endpoints: () => ({}),
    tagTypes: ["User", "Product", "Order", "Category", "Blog"]
})

