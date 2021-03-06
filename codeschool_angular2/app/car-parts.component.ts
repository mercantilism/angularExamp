import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mocks';

@Component({
	selector: 'car-parts',
	templateUrl: 'app/car-parts.component.html',
	styleUrls:['app/car-parts.component.css']
})
export class CarPartsComponent{
	carParts: CarPart[];

	ngOnInit() {
		this.carParts = CARPARTS;
	}

	totalCarParts(){
		let sum = 0;

		for (let carPart of this.carParts){
			sum += carPart.inStock;
		}

		return sum;
	}

	upQuantity(carPart:CarPart){
		if (carPart.quantity < carPart.inStock){
			carPart.quantity++;
		}
	}

	downQuantity(carPart:CarPart){
		if (carPart.quantity > 0){
			carPart.quantity--;	
		}
	}

	restrictTypeQuant(event, carPart:CarPart){
		console.log("target val is " + event.target.value + " carPart.inStock is " + carPart.inStock);
		if (event.target.value > carPart.inStock){
			alert("Sorry, we only have " + carPart.inStock + " of this part in stock.");
			carPart.quantity = carPart.inStock;
		}
	}
}