import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types/Produto'

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
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const jaExiste = state.itens.find((p) => p.id === produto.id)
      if (!jaExiste) {
        state.itens.push(produto)
      } else {
        alert('Item já adicionado')
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
