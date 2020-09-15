class Produto {
    codigo: number;
    descricao: string;
    uniMedida: string;
    qtdEstoque: number;
    
	constructor(codigo: number, descricao: string, uniMedida: string, qtdEstoque: number){
        this.codigo = codigo;
        this.descricao = descricao;
        this.uniMedida = uniMedida;
        this.qtdEstoque = qtdEstoque;
	}

	RetornaEstoque(){
		return console.log("Quantidade disponível em estoque:"+this.qtdEstoque);
	}
	ImplantaEstoque(qtd){
        this.qtdEstoque += qtd;
		return console.log("Quantidade disponível em estoque:"+this.qtdEstoque);
    }
    
    BaixaEstoque(qtd){
        if(qtd > this.qtdEstoque){
            console.log("Não há quantidade suficiente no estoque")
            return;
        }
        else
        {
            this.qtdEstoque -= qtd;
            return console.log("Quantidade disponível em estoque:"+this.qtdEstoque);
        }
      
    }

    ImprimirDados()
    {
        console.log("Codigo: "+this.codigo);
        console.log("Descricao: "+this.descricao);
        console.log("unidade de medida: "+this.uniMedida);
        console.log("Quantidade: "+this.qtdEstoque);
    }
}

let prod = new Produto(1, "Agua", "ML", 50);
prod.ImprimirDados();
prod.RetornaEstoque();
prod.ImplantaEstoque(5);
prod.BaixaEstoque(5);
prod.ImprimirDados();


