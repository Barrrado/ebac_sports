import * as S from './styles'
import { useSelector } from 'react-redux'
import { Produto } from '../../App'
import { RootReducer } from '../../store'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

const Header = () => {
  const itensNoCarrinho = useSelector(
    (state: RootReducer) => state.carrinho.itens
  )
  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)
  const Favorito = useSelector((state: RootReducer) => state.Favoritos.Favorito)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{Favorito.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
