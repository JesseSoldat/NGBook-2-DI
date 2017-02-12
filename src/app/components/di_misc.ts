import { Component } from '@angular/core';

export class SimpleService {
	constructor(){
		console.log('Simple Service is being created');
	}
	getValue(): string {
		return 'Hi I am the Simple Service @ your service';
	}
}

export class ParamsService {
	constructor(private phrase: string){
		console.log('Params Service is being created with phrase', phrase);
	}

	getValue(): string {
		return  'Hi I am the Params Service @ your service';
	}
}

@Component({
	selector: 'di-misc',
	template: `
  <button (click)="invokeService()">Get Value</button>
  `
})

export class DiMisc {
	constructor(private simpleService: SimpleService, private paramService: ParamsService){

	}

	invokeService(): void {
		console.log('SimpleService returned', this.simpleService.getValue());
    console.log('ParamService returned', this.paramService.getValue());
	}
}