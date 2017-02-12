import {LargeService} from './large_service';
import {SmallService} from './small_service';

export class ViewPortService {
	determineService(): any {
		let w: number = Math.max(document.documentElement.clientWidth,
			window.innerWidth || 0);

		if(w < 800) {
			return new SmallService();
		}
		return new LargeService();
	}
}