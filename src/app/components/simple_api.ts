import { Component } from '@angular/core';

import { ApiService } from '../services/api_service'


@Component({
	selector: 'simple-api',
	template: `
  <button (click)="invokeApi()">Invoke API</button>
  `
})

export class SimpleApi {

	constructor(private apiService: ApiService){

	}

	invokeApi(): void{
		this.apiService.get();
	}
}