export const formatPrice = (preco: number) => {
     if (preco !== undefined && preco !== null) {
          return 'R$ ' + preco.toFixed(2).replace('.', ',');
     }
     return '0,00';
};

export const getTotalPrice = (items: Cardapio[]) => {
     return items.reduce((acc, cur) => {
          if (cur.preco) {
               return acc + cur.preco;
          }
          return 0;
     }, 0);
};
