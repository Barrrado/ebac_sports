import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducer/carrinho'
import favoritosReducer from './reducer/favoritos'

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    Favoritos: favoritosReducer
  }
})
export type RootReducer = ReturnType<typeof store.getState>
export default store // exportando o store para ser usado em outros arquivos
