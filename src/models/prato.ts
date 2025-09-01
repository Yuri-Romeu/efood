class Prato {
     id: number;
     imagem: string;
     titulo: string;
     botoesImagem: string[];
     nota: number;
     descricao: string;

     constructor(
          id: number,
          imagem: string,
          titulo: string,
          botoesImagem: string[],
          nota: number,
          descricao: string,
     ) {
          this.id = id;
          this.imagem = imagem;
          this.titulo = titulo;
          this.botoesImagem = botoesImagem;
          this.nota = nota;
          this.descricao = descricao;
     }
}

export default Prato;
