import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DataService } from '../data.service'
import { isObservable } from 'rxjs'

@Component({
	selector: 'app-reader',
	standalone: true,
	imports: [CommonModule],
	template: ` <span>Data: {{ isObservable ? ($any(data) | async) : data }}</span> `,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
/**You are not able to make any change on this component. */
export class ReaderComponent {
	data = inject(DataService).data
	isObservable = isObservable(this.data)
}
