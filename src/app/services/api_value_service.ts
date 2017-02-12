import { Inject } from '@angular/core';

export const API_URL: string = 'API_URL';

export class ApiValueService {
	constructor(@Inject(API_URL) private apiUrl: string){}

	get(): void {
		console.log(`Calling ${this.apiUrl}/endpoint....`);
	}
}