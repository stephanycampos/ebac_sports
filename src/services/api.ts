import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../types'

export const produtosApi = createApi({
  reducerPath: 'produtosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-tau.vercel.app/api' }),
  endpoints: (builder) => ({
    obterProdutos: builder.query<Produto[], void>({
      query: () => 'ebac_sports'
    })
  })
})

export const { useObterProdutosQuery } = produtosApi
// RTK Query e Redux Toolkit concluidos
