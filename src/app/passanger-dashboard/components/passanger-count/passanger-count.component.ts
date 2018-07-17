import { Component, OnInit, Input } from '@angular/core';
import { Passanger } from '../../models/passanger.interface';

@Component({
  selector: 'app-passanger-count',
  templateUrl: './passanger-count.component.html',
  styleUrls: ['./passanger-count.component.css']
})
export class PassangerCountComponent  {
  @Input()
  items: Passanger[];


  checkInCount(): number {
    if (!this.items) return;
    // Return all passangers who are checked in
    return (this.items.filter((passanger: Passanger) => {
      return passanger.checkedIn
    })).length;

  }
}
