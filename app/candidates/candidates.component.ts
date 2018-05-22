import { Component } from '@angular/core';
import { CandidateModel } from '../candidate.model';
import { CandidatesService } from '../candidates.service';

@Component({
  selector: 'Candidates',
  templateUrl: './app/candidates/candidates.component.html',
  providers: [CandidatesService]
})
export class CandidatesComponent {

  candidates: CandidateModel[];
  candidates_original: CandidateModel[];

  showPopUp: boolean = false;
  newName: string;
  newCity: string;
  newGender: string;

  constructor(private _candidatesService: CandidatesService) {}

  ngOnInit(): void {
    this.candidates = this._candidatesService.getCandidates();
    this.candidates_original = this._candidatesService.getCandidates();
  }

  selectCandidate(id: number) {
    this._candidatesService.changeStatus(id, 'Selected');
  }

  rejectCandidate(id:number) {
    this._candidatesService.changeStatus(id, 'Rejected');
  }

  filterNames(searchText: string) {
    if(searchText == null) {
      this.candidates = this.candidates_original;
    } else {
      this.candidates = this.candidates_original.filter(function(c){
        return c.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      })
    }
  }

  showConfirm() {
    this.showPopUp = true;
  }

  closePopUp() {
    this.showPopUp = false;
  }

  saveNewCandidate() {
    this.showPopUp = false;
    this._candidatesService.addCandidate(this.newName, this.newCity, this.newGender);
    alert('New candidate added.')
  }

}