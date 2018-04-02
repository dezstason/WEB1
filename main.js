class animal{
	constructor(rasa, culoare, virsta, foame, energy){
		this.rasa = rasa;
		this.culoare = culoare;
		this.virsta = virsta;
		this.foame = foame;
		this.energy = energy;
	}

	maninca(){
		this.foame = 0;
		console.log('Animal a mincat');
		this.misca();
	}

	misca(){
		if (this.foame > 7){
			console.log('Animal nu poate misca, trebuie sa manince');
			this.maninca();
		} else if(this.energy == 0){
			console.log('Animal nu poate misca, trebuie sa doarme');
			this.doarme();
		} else {
			console.log('Animal se misca');
			this.energy = 0;
		}
	}

	doarme(){
		if(this.energy == 0){
			this.energy = 10;
			console.log('Animal doarme');
			this.misca();
		} else {
			console.log('Animal nu este obosit');
		}
	}
}

window.onload = function(){

	let cat = new animal('Siam', 'Sur', 7, 8, 0);
	
	cat.misca();
	
}