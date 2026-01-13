import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { useGetProdutosQuery } from './services/api'
import { adicionar } from './store/reducers/carrinho'
import { alternar } from './store/reducers/favoritos'
import { RootState, AppDispatch } from './store'
import { Produto } from './types/ProdutoTypes'

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const carrinho = useSelector((state: RootState) => state.carrinho.itens)
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  if (isLoading) {
    return <div>Carregando...</div>
  }

  function adicionarAoCarrinho(produto: Produto) {
    dispatch(adicionar(produto))
  }

  function favoritar(produto: Produto) {
    dispatch(alternar(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos || []}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
