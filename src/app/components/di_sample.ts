import { Component, ReflectiveInjector } from '@angular/core';

class MyService {
	getValue(): string {
		return 'a value';
	}
}

@Component({
	selector: 'di-sample-app',
	template: `
	<button (click)="invokeService()">Get Value</button>
	`
})

export class DisSampleApp {
	myService: MyService;

	constructor(){
		let injector: any = ReflectiveInjector.resolveAndCreate([MyService]);
		this.myService = injector.get(MyService);
		console.log('Same instance?', this.myService === injector.get(MyService));
	}

	invokeService(): void {
		console.log(this.myService.getValue());
	}
}