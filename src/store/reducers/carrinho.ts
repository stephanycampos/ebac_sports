import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Produto = {
  id: number
  titulo: string
  preço: number
  imagem: string
}

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    addAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const adicionados = state.itens.find((item) => item.id === produto.id)

      if (!adicionados) {
        state.itens.push(produto)
      }
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})

export const { addAoCarrinho, removerDoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
