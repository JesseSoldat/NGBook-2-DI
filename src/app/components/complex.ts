import {
	Component,
	Inject,
	ReflectiveInjector
} from '@angular/core';

import { ApiService } from '../services/api_service';
import { ViewPortService } from '../services/viewport_service';

@Component({
	selector: 'complex-app',
	template: `
  <button (click)="invokeApi()">Invoke API 2</button>
  <button (click)="useInjectors()">Use Injectors</button>
  `
})

export class ComplexApp {
	constructor(private apiService: ApiService,
						@Inject('ApiServiceAlias') private aliasService: ApiService,
						@Inject('SizeService') private sizeService: any) {

	}
	invokeApi(): void {
		this.apiService.get();
		this.aliasService.get();
		this.sizeService.run();
	}

	useInjectors(): void {
		let injector: any = ReflectiveInjector.resolveAndCreate([
			ViewPortService,
			{
				provide: 'OtherSizeService',
				useFactory: (viewport: any) => {
					return viewport.determineService();
				},
				deps: [ViewPortService]
			}
		]);
		let sizeService: any = injector.get('OtherSizeService');
		sizeService.run();
	}
}