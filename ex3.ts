class Lampada
{
    status: boolean

    constructor()
    {

    }

    Ligar()
    {
        this.status = true;
    }

    Desligar()
    {
        this.status = false;
    }

    Observar()
    {
        if(this.status == true)
        {
            console.log("Ligada");
        }
        else
        {
            console.log("Desligada");
        }
    }

}

let lampada = new Lampada();
lampada.Ligar()
lampada.Observar();
lampada.Desligar()
lampada.Observar();