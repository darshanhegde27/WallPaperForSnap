import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const RedditServiceApi = createApi({
    reducerPath: 'RedditServiceApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.reddit.com/r/wallpapers.json?&limit=25&raw_json=1' }),
    endpoints: (builder) => (
        {
            load: builder.query<string, string>(
                {
                    query: (name) => `pokemon/${name}`,
                }),
        }),
})


export const { useLoadQuery } = RedditServiceApi