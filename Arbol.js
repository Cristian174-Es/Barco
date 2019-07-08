class Arbol{
	constructor(c, al, an, x, y, rr, h, vel){
		this.Color = c;
		this.Altura = al;
		this.Ancho = an;
		this.X = x;
		this.Y = y;
        var radio = this.Ancho/2;
        this.RadioCopa = radio;
        this.RadioRueda = rr;
        this.DistanciaCP = h;
        this.Velocidad = vel;
	}

	Dibujar(contextoDeDibujo){

		contextoDeDibujo.strockStyle = this.Color;

         //Barco

          var radio=this.Ancho/2;
         contextoDeDibujo.fillStyle = this.Color; 
         contextoDeDibujo.fillRect(this.X, this.Y, this.Ancho/3 *4 + 3.5, this.Altura/2);
         contextoDeDibujo.fill();

         //Triangulos
         contextoDeDibujo.beginPath();
         contextoDeDibujo.fillStyle =this.Color;
         contextoDeDibujo.moveTo(this.X, this.Y + this.Altura/2.5 + 6);
         contextoDeDibujo.lineTo(this.X-30, this.Y)
         contextoDeDibujo.lineTo(this.X, this.Y)
         contextoDeDibujo.lineTo(this.X, this.Y + 50)
         contextoDeDibujo.fill(); 
        
         contextoDeDibujo.beginPath();
         contextoDeDibujo.fillStyle = this.Color;
         contextoDeDibujo.moveTo(this.X + 3* this.Ancho/2 -4 , this.Y + this.Altura/2);
         contextoDeDibujo.lineTo(this.X+ 4* this.Ancho/2 + 10, this.Y)
         contextoDeDibujo.lineTo(this.X + 3 * this.Ancho/2-7 , this.Y)
         contextoDeDibujo.lineTo(this.X + 3* this.Ancho/2 -7 , this.Y + this.Altura/2)
         contextoDeDibujo.fill(); 

        }
	}