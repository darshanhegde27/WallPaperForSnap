import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const RedditServiceApi = createApi({
    reducerPath: 'RedditServiceApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.reddit.com/' }),
    endpoints: (builder) => (
        {
            load: builder.query<any, Number>(
                {
                    query: (limit) => 'r/wallpapers.json?&limit=' + limit + '&raw_json=1',
                }),
        }),
})


export const { useLoadQuery } = RedditServiceApi