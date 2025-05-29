import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types/ProdutoTypes'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    alternar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const existe = state.itens.find((p) => p.id === produto.id)
      if (existe) {
        state.itens = state.itens.filter((p) => p.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { alternar } = favoritosSlice.actions
export default favoritosSlice.reducer
