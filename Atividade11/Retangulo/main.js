function Retangulo(x, y)
{
    const base = x;
    const altura = y;

    this.calcArea = function()
    {
        return (base * altura); 
    }
     
}

const ret = new Retangulo(10, 5);

alert("Base: 10\nAltura: 5\nÁrea: " + ret.calcArea()); 