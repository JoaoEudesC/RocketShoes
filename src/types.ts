//Aqui é onde eu fiz uma pasta para as interfaces e exportei, pq é uma boa pratica fazer uma pasta so para as interfaces e importalas(Implementar nos outros apps)



export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

export interface Stock {
  id: number;
  amount: number;
}
