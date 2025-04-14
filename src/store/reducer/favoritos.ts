import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  Favorito: Produto[]
}
const initialState: FavoritosState = {
  Favorito: []
}
const FavoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    Favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const produtoExistente = state.Favorito.find(
        (item) => item.id === produto.id
      )

      if (produtoExistente) {
        state.Favorito = state.Favorito.filter((item) => item.id !== produto.id)
      } else {
        state.Favorito.push(produto)
      }
    }
  }
})

export const { Favoritar } = FavoritosSlice.actions
export default FavoritosSlice.reducer
