import { Component, OnInit } from '@angular/core';
import { Ritual } from 'src/app/models/ritual';
import { RitualService } from 'src/app/services/ritual.service';

@Component({
  selector: 'app-ritual',
  templateUrl: './ritual.component.html',
  styleUrls: ['./ritual.component.css']
})
export class RitualComponent implements OnInit {

  title = 'ngWitchual';
  selected: Ritual | null = null;

  newRitual: Ritual = new Ritual();

  editRitual: Ritual | null = null;


  rituals: Ritual[] = [];

showComplete: boolean = false;

  constructor(private ritualService: RitualService) { }

  reload() {
    this.ritualService.index().subscribe(
    {
      next: (data) => {
        this.rituals = data
      },
      error: (err) => {
        console.error('RitualsListComponent.reload(): error loading ritual:');
        console.error(err);
      }
    }
    );
  }

  ngOnInit(): void {
    this.reload();
  }

  getNumOfRituals() {
    return this.rituals.length;

  }

  displayRitual(ritual: Ritual) {
  this.selected = ritual;
  }

  displayTable() {
    this.selected = null;
  }
addRitual() {
this.ritualService.create(this.newRitual).subscribe(
  {
    next: (data) => {
      this.newRitual = new Ritual();
      this.reload();
    },
    error: (err) => {
      console.error('TodoListComponent.create(): error creating todo:');
      console.error(err);
    }
  }
);

}



setEditRitual() {
  this.editRitual = Object.assign({}, this.selected);
}

updateRitual(updatedRitual: Ritual) {
this.ritualService.update(updatedRitual).subscribe(
  {
    next: (data) => {
      this.selected = data;
      this.editRitual = null;
      this.reload();
    },
    error: (err) => {
      console.error('RitualListComponent.updateRitual(): error updating ritual:');
      console.error(err);
    }
  }
);
}

deleteRitual(id: number) {
this.ritualService.destroy(id).subscribe(
  {
    next: () => {
      this.reload();
    },
    error: (err) => {
      console.error('RitualListComponent.deleteRitual(): error deleting ritual:');
      console.error(err);
    }
  }
);
}
//this method is so that the browser updates and doesn't show detail view when checking the 'mark' boxes.
updateCompleted(updatedRitual: Ritual) {
  this.ritualService.update(updatedRitual).subscribe(
    {
      next: (data) => {
        this.reload();
      },
      error: (err) => {
        console.error('RitualListComponent.updateRitual(): error updating ritual:');
        console.error(err);
      }
    }
  );
  }

  getBadgeColor() {
    let count = this.getNumOfRituals();
    if(count > 10) { return 'bg-danger'; }
    else if (count > 5) { return 'bg-warning'; }
    else {return 'bg-success'; }
  }
}



