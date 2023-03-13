## Explicações importatntes sobre este projeto

## 1 - Eu quero adicionar os dados no carrinbo e mesmo assim apos esse carrinho ser adicionado com os produtos, eu quero que se eu atualizar a pagina os produtos continuem lá , por isso vou utilizar o localStorage

## 2 - Vou utilizar o react-toastfy para as mensagens de erro

## 3 - uma boa prática é não rodar todos os testes unitários de uma só vez, pq vai vir muitos erros e pode confudir (Pega uma coisa pequena tenta resolver e depois faz o teste e depois roda o teste para voce ver algum progresso) começa do menor para o maior

## 4 -Vou começar pelo header => o yarn test roda todos os testes da aplicação, sendo assim , eu tenho um metodo para rodar teste por teste (yarn test src/**tests**/componenents/Header.spec.tsx ) este é o endereço de um dos testes em especifico os asteriscos sao dois underlines de cada lado

## 5 - porque neste caso eu possuo 4 testes dentro da minha pasta teste, um do header , outro do car , home e etc , neste caso eu estou pegando so do Header.spec.tsx

## 6 - a gente utilizou esta estrategia acima porque, pq so tinha um teste neste componente , no caso do useCart , tem 11 testes e a gente vai fazer assim :

yarn test -t 'Nome do teste unitario'

ai voce utiliza o menos t, pode abrir aspas e executar o nome do teste, para realizar um teste de forma individual ( ele vai mostrar skipando todos os testes e indo para o especifico que voce selecionou)
