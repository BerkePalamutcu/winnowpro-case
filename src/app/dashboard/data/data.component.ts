import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { ReaderComponent } from './reader/reader.component';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [FormsModule, ReaderComponent],
  providers: [DataService],
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataComponent {
  dataService = inject(DataService);
  data: string = '';

  ngOnInit(): void {}

  editDataOnChange() {
    this.dataService.editData(this.data);
  }
}
