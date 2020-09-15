class Carro 
{
    marca: string;
    modelo: string;
    placa: string;
    valocidade: number = 0;
    velocidadeMax: number;

    constructor(marca: string, modelo: string, placa: string, valocidade: number, velocidadeMax: number)
    {
        this.marca = marca
        this.modelo = modelo
        this.placa = placa
        this.valocidade = valocidade
        this.velocidadeMax = velocidadeMax
    }

    Acelerar(vel)
    {
        if(vel > 10 || vel > this.velocidadeMax)
        {
            return console.log("Não é possível acelerar o veículo nessas condições");
        }
        else
        {
            this.valocidade += vel;
            return console.log("Acelerou "+vel+"km/h. Velocidade atual: "+this.valocidade);
        }
    }

    Frear()
    {
        if(this.valocidade <= 0)
        {
            return console.log("O carro ja está parado");
        }
        else
        {
            let tempo: number = 0;
            while(this.valocidade > 0 )
            {
                this.valocidade = this.valocidade - 10;
                tempo ++;
            }
            return console.log("O carro demorou "+ tempo + " segundos para parar completamente o carro");
        }
    }

    ImprimirDados()
    {
        console.log("Marca: "+this.marca);
        console.log("Modelo: "+this.modelo);
        console.log("Placa: "+this.placa);
        console.log("Velocidade: "+this.valocidade);
        console.log("Velocidade Máxima: "+this.velocidadeMax);
    }
    

}

let carro = new Carro("Chevrolet","Onix","xxx-0000", 100, 220)
carro.ImprimirDados();
carro.Acelerar(10);
carro.Frear();
