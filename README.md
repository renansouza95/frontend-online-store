# Boas vindas ao repositório do projeto de Front-End Online Store!

Seja bem-vindo ao Projeto Front-End Online Store, realizado durante meu período de estudos durante a Trybe, com a finalidade de avaliar alguns aprendizados.

---

# Habilidades

Nesse projeto, eu fui capaz de:

* Entender o que são Métodos Ágeis
* Entender o que é Kanban
* Entender o que é Scrum
* Trabalhar em equipes utilizando Kanban ou Scrum de maneira eficaz
* Praticar todas as habilidades desenvolvidas até agora no módulo de Front-End

---

## Requisitos do projeto

### Grupos de prioridade

Os requisitos são organizados por grupos de prioridade. **Demandas de um grupo de prioridade podem ser realizadas em paralelo, e são pré-requisito para as demandas do grupo de prioridade seguinte.** Por exemplo:

- **Requisitos 1 e 2:** Prioridade 0 (Deve ser feito PRIMEIRO)
- **Requisitos 3 a 5:** Prioridade 1 (Devem ser feitos APÓS OS REQUISITO 1 E 2, mas podem ser feitos em paralelo)
- **Requisitos 5 a 7:** Prioridade 2 (Devem ser feitos APÓS OS REQUISITO 3 A 5, mas podem ser feitos em paralelo)
...

## Lista de requisitos
---

#### 1. Implemente o módulo de acesso à api do Mercado Livre

**PRIORIDADE 0** - Implemente um módulo que acessa a API do Mercado Livre

**Observações técnicas**

Você deve (**OBRIGATORIAMENTE**) utilizar o arquivo `src/services/api.js` para acessar a API do Mercado Livre em sua aplicação.  Utilize (**OBRIGATORIAMENTE**) o módulo **[Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)** para realizar as requisições. Sinta-se livre para criar novas funções, porém já deixamos 2 funções a serem implementadas para isso:

```javascript
export async function getCategories() {
  // Implemente aqui
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
```
Essas funções devem realizar uma chamada para a API do Mercado Livre e retornar uma [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) com os dados de resultado. Com essa implementação, o uso dessas funções deve ser algo parecido com o exemplo abaixo:

```javascript
import * as api from './services/api'

api.getCategories().then(categories => { console.log(categories) })
```

A variável `categories` deve conter o objeto JSON com as categorias obtidas através da chamada da API do Mercado Livre:

```json
[
  {
      "id": "MLB5672",
      "name": "Acessórios para Veículos"
  },
  {
      "id": "MLB271599",
      "name": "Agro"
  },
  {
      "id": "MLB1403",
      "name": "Alimentos e Bebidas"
  }
]
```
O que será verificado:
```
  - Implementa a função `getCategories`.
  - Implementa a função `getProductsFromCategoryAndQuery`.
```

#### 2. Crie uma página de listagem de produtos vazia

**PRIORIDADE 0** - Criar o campo de busca da tela principal, a listagem de produtos, inicialmente vazia. A listagem vazia deve conter a mensagem "Digite algum termo de pesquisa ou escolha uma categoria".

**Observações técnicas**

A tela básica da plataforma é a tela de **listagem de produtos**, onde quem usa buscará o que quer para adicionar ao carrinho e filtrará suas buscas.

  * Esta página deve ficar no path `/`, renderizável a partir do acesso ao componente `<App />`.
  * Mostre a mensagem `"Digite algum termo de pesquisa ou escolha uma categoria."`.
  * Adicione o atributo `data-testid` com o valor `home-initial-message` no elemento da mensagem.

O que será verificado:
```
  - A raiz da aplicação, em `<App />`, renderiza com sucesso
  - A tela contém a mensagem pedida: 'Digite algum termo de pesquisa ou escolha uma categoria.'
```

#### 3. Crie a página do carrinho de compras

**PRIORIDADE 1** - Criar o botão de carrinho de compras na tela principal, de listagem de produtos, e criar uma tela para o carrinho de compras, inicialmente vazio.

**Observações técnicas**

Quem usa o site irá adicionar produtos em seu carrinho de compras e finalizar a compra. A listagem de produtos deve ter um ícone de carrinho que, ao ser clicado, leva à página do carrinho. Inicialmente, o carrinho deverá estar vazio.

  * O elemento com o ícone de carrinho de compras deve ficar visível na página inicial (listagem de produtos) e também na página de detalhes de um produto (descrita posteriormente)
  * Adicione o atributo `data-testid` com o valor `shopping-cart-button` no elemento com o ícone de carrinho de compras. **Atenção!** O **elemento** que faz o direcionamento para a página do carrinho é quem deve conter o `data-testid`. Se você fizer isso com um `<Link />`, por exemplo, é este quem deve conter o `data-testid`.
  * Mostre a mensagem `"Seu carrinho está vazio"` na página de carrinho de compras quando não existirem produtos no carrinho de compras.
  * Adicione o atributo `data-testid` com o valor `shopping-cart-empty-message` no elemento da mensagem.

O que será verificado:
```
  - A home deve ter o botão do carrinho de compras
  - Clicar no botão deve levar à página do carrinho vazio, com a mensagem 'Seu carrinho está vazio' nela
```

#### 4. Liste as categorias de produtos disponíveis via API na página principal

**PRIORIDADE 1** - Listar filtros de categoria obtidos da API na tela principal, de listagem do produto. A requisição da API para recuperar as categorias deve ser feita uma única vez após o carregamento da tela.

**Observações técnicas**

Um endpoint da API do Mercado Livre retorna as categorias de produto disponíveis para busca. Em um momento posterior tais categorias serão usadas para realizar requisições para a listagem de produtos, ou seja, elas serão clicáveis para aplicar tais filtros, para isso você pode utilizar o elemento do tipo `button` ou do tipo `radio button` para renderizar as categorias. Por hora, elas devem ser listadas na tela da listagem, conforme protótipo.

  * Adicione o atributo `data-testid` com o valor `category` nos elementos clicáveis que receberão o nome da categoria. **Atenção!** No caso dos `radio buttons` as `labels` dos elementos que deverão receber o `data-testid`, e não se esqueça da propriedade `htmlFor`.

O que será verificado:
```
  - Exibe as categorias retornadas pela API na página de listagem de produtos
```

#### 5. Liste os produtos buscados por termos, com os dados resumidos, associados a esses termos

**PRIORIDADE 1** - Criar a listagem de produtos. Fazer a exibição resumida do produto (o "card" que aparece na listagem). A exibição deve ter título, foto e preço. Fazer requisição à API do Mercado Livre enviando os termos buscados por quem usa e usar o retorno para fazer a listagem dos produtos. Se a busca não retornar resultados, gerar a tela correspondente com o texto "Nenhum produto foi encontrado".

**Observações técnicas**

A alma do site é a sua lógica de busca e listagem de produtos. Após digitar seus termos na caixa de busca uma requisição deverá ser feita à API do Mercado Livre utilizando a ação de um botão, tendo como parâmetros a frase digitada, e tais produtos deverão aparecer na tela numa exibição resumida, conforme protótipo anexo.

  * Adicione o atributo `data-testid` com o valor `query-input` no elemento `input` que servirá para a pessoa que usa sua aplicação digitar o termo de busca.
  * Adicione o atributo `data-testid` com o valor `query-button` no elemento que dispara a chamada para a API com o termo de busca pesquisado.
  * Adicione o atributo `data-testid` com o valor `product` nos elementos que possuem os dados dos produtos.

O que será verificado:
```
  - Exibe todos os produtos retornados pela API, dado um determinado filtro
```

#### 6. Selecione uma categoria e mostre somente os produtos daquela categoria

**PRIORIDADE 2** - Como pessoa usuária, eu quero clicar em uma categoria e ver a listagem de produtos de acordo com os produtos daquela categoria.

O que será verificado:

- O usuário, agora, deve poder usar as categorias recuperadas da API para exibir os produtos de apenas uma categoria. Os termos e as categoria selecionada por quem usa, devem ser usados em conjunto para filtragens mais específicas (Lembre-se de consultar os [endpoints](#Documentação-da-API-do-Mercado-Livre) da API para realizar o requisito).

O que será verificado:
```
  - Exibe corretamente na página somente os produtos da categoria clicada
```

#### 7. Redirecione para uma tela com a exibição detalhada ao clicar na exibição resumida de um produto

PRIORIDADE 3 - Como pessoa usuária, eu quero clicar no card do produto e visualizar a exibição detalhada do produto com nome do produto, imagem, preço e especificação técnica. A tela também deve possuir um botão que leve ao carrinho de compras.

**Observações técnicas**

A exibição detalhada de um produto será a página para exibir tudo o que se tem acerca de um produto específico.

  * Adicione o atributo `data-testid` com o valor `product-detail-link` no elemento que ao ser clicado, enviará a pessoa que usa a aplicação para a página de detalhes do produto. Você deve adicionar esse atributo para todos os produtos.
  * Adicione o atributo `data-testid` com o valor `product-detail-name` no elemento que possui o nome do produto na tela de detalhes.

O que será verificado:
```
  - Clicar no card produto leva à página com seus detalhes
```

#### 8. Adicione produtos a partir da tela de listagem de produtos

**PRIORIDADE 3** - Na tela de listagem de produtos, permitir adicionar o produto ao carrinho.

**Observações técnicas**

Configure uma forma de adicionar produtos ao carrinho de compras a partir da tela de listagem de produtos.

  * Adicione o atributo `data-testid` com o valor `product-add-to-cart` nos elementos que executam a ação de adicionar os produtos ao carrinho de compras.
  * Desenvolva algo da forma simples: um elemento adiciona um produto.
  * Adicione o atributo `data-testid` com o valor `shopping-cart-product-name` no elemento que possui o nome do produto na tela do carrinho de compras. Você deve adicionar esse atributo para todos os produtos.
  * Adicione o atributo `data-testid` com o valor `shopping-cart-product-quantity` no elemento que possui a quantidade do produto na tela do carrinho de compras. Você deve adicionar esse atributo para todos os produtos.

O que será verificado:
```
  - Adiciona da tela de listagem um produto que aparece no carrinho
```

#### 9. Adicione um produto ao carrinho a partir de sua tela de exibição detalhada

**PRIORIDADE 3** - Na tela de exibição detalhada do produto, permitir adicionar o produto ao carrinho.

**Observações técnicas**

Poder adicionar produtos ao carrinho a partir de sua tela de exibição detalhada será um canal importante de conversões de venda.

  * Adicione o atributo `data-testid` com o valor `product-detail-add-to-cart` no elemento que possui a ação de adicionar o produto ao carrinho de compras.
  * Adicione o atributo `data-testid` com o valor `shopping-cart-product-name` no elemento que possui o nome do produto na tela do carrinho de compras. Você deve adicionar esse atributo para todos os produtos.
  * Adicione o atributo `data-testid` com o valor `shopping-cart-product-quantity` no elemento que possui a quantidade do produto na tela do carrinho de compras. Você deve adicionar esse atributo para todos os produtos.

O que será verificado:
```
  - Adiciona um produto ao carrinho da sua tela de detalhes
```

#### 10. Visualize a lista de produtos adicionados ao carrinho em sua página e permita a manipulação da sua quantidade

**PRIORIDADE 3** - Adicionar lista de produtos ao carrinho, com valor total ao final. Criar botões (-) e (+) para cada produto do carrinho, permitindo alterar a quantidade desejada de cada produto. A quantidade não pode ser negativa. Criar também botão (X) para remover produtos do carrinho e botão para finalizar a compra.

**Observações técnicas**

São operações básicas de carrinho a alteração da quantidade de um determinado produto nele e a visualização de tudo o que foi adicionado, com a soma dos valores.

  * Adicione elementos na página do carrinho de compras para aumentar ou diminuir a quantidade de cada produto presente no carrinho.
  * Adicione o atributo `data-testid` com o valor `product-increase-quantity` no elemento que aumenta a quantidade de um produto. Adicione esse atributo para todos os produtos.
  * Adicione o atributo `data-testid` com o valor `product-decrease-quantity` no elemento que diminui a quantidade de um produto. Adicione esse atributo para todos os produtos.

O que será verificado:
```
  - Adiciona produtos ao carrinho e manipula suas quantidades
```

#### 11. Avalie e comente acerca de um produto em sua tela de exibição detalhada

**PRIORIDADE 3** - Adicionar formulário ao produto, em sua exibição detalhada, para permitir adicionar avaliações com nota de 1 a 5 estrelas e comentários (o comentário deve ser opcional, sendo possível enviar apenas a nota). Exibir a lista de avaliações já feitas. Se quem usa sai e volta da tela, a nota e as avaliações não devem ser apagadas.

**Observações técnicas**

Avaliações positivas de um produto contribuem para boas vendas e nos dão insumos para, no tempo, destacarmos os produtos melhores e fazermos anúncios direcionados. Produtos ruins, de forma análoga, podem eventualmente ser penalizados por avaliações ruins.

  * Adicione um campo de texto para que a pessoa que utiliza a aplicação possa escrever algo sobre o produto.
  * Adicione o atributo `data-testid` com o valor `product-detail-evaluation` no campo de texto.

O que será verificado:
```
  - Avalia um produto na sua tela de detalhes
```

#### 12. Finalize a compra vendo um resumo dela, preenchendo os seus dados e escolhendo a forma de pagamento

**PRIORIDADE 4** - Implementar tela para a finalização da compra. A tela deve conter uma seção para revisão dos produtos com o valor total da compra, um formulário para ter as informações do comprador e um a seção para escolher o método de pagamento. Ao se clicar em "Comprar", deve-se validar que o formulário está preenchido e que a forma de pagamento foi escolhida e, em caso positivo, deve-se zerar o estado, redirecionar para a tela inicial (listagem de produtos). Caso algo não tenha sido preenchido, mantém-se na mesma tela com o dados sem apagar e destaca-se os campos não preenchidos em vermelho.

**Observações técnicas**

O último grande passo do fluxo do e-commerce é a finalização da compra por parte de quem usa.

  * Adicione um botão para finalizar a compra. Este botão ao ser clicado, deve enviar os dados referente à lista para uma página de "_checkout_".
  * Adicione o atributo `data-testid` com o valor `checkout-products` no botão que leva a pessoa à página de "_checkout_".
  * A página de "_checkout_" deve apresentar a listagem dos produtos e o valor total da compra.
  * A página de "_checkout_" também deve possuir elementos para que a pessoa insira os dados e finalize a compra.
  * Elemento "Nome completo" deve possuir o atributo `data-testid` com o valor `checkout-fullname`.
  * Elemento "Email" deve possuir o atributo `data-testid` com o valor `checkout-email`.
  * Elemento "CPF" deve possuir o atributo `data-testid` com o valor `checkout-cpf`.
  * Elemento "Telefone" deve possuir o atributo `data-testid` com o valor `checkout-phone`.
  * Elemento "CEP" deve possuir o atributo `data-testid` com o valor `checkout-cep`.
  * Elemento "Endereço" deve possuir o atributo `data-testid` com o valor `checkout-address`.
  * (**Não avaliativo**) Você pode criar um botão que simule a compra desses produtos, na verdade, esse botão não precisa realizar nenhuma função específica.

O que será verificado:
```
  - Faz os passos da compra com sucesso: recupera produtos de uma categoria; adiciona-os ao carrinho; faz o checkout; insere todos os dados
```

---

# Disclaimer

Este projeto foi feito em grupo e teve a contribuição de Fernando Mós Pereira Figueiredo (@FernandoMos92), Guilherme Augusto Ferreira Santos (@oguiaugusto) e Renan Arruda de Souza (minha pessoa).

O mesmo foi disponibilizado pela Trybe como forma de avaliação do aprendizado do bloco, a descrição de todos os requisitos foram feitas por eles, sendo somente a solução dos requisitos 1, 2, 3 e 4 foram realizados por mim. É importante frisar que eu não tive participação no CSS deste projeto :D
