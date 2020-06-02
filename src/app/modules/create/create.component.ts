import { Component, OnInit } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { LoadingComponent } from 'src/app/components/loading/loading.component'
import { createEventService } from 'src/providers/createEvent.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(public dialog: MatDialog, public createEventService: createEventService) { }

  ngOnInit() {
  }

  createEvent() {
    const dialogRef = this.dialog.open(LoadingComponent, {
    })
    dialogRef.afterClosed()
      .subscribe(result => {
      })
    // this.createEventService.createEvent()
  }

}
