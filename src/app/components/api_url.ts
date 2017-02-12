import { Component } from '@angular/core';

import { ApiValueService, API_URL } from '../services/api_value_service';

@Component({
	selector: 'api-url',
	template: `
  <button (click)="invokeApi()">Invoke API URL</button>
  `
})

export class ApiValueUrl {
	constructor(private apiValueService: ApiValueService){}

	invokeApi(): void {
		this.apiValueService.get();
	}
}