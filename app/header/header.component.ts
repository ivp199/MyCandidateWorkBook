import { Component } from '@angular/core';

import { CandidateModel } from '../candidate.model';
import { CandidatesService } from '../candidates.service';
@Component({
  selector: 'HeaderBar',
  templateUrl: './app/header/header.component.html',
  providers: [CandidatesService]
})
export class HeaderBarComponent {

  candidates: CandidateModel[];
  totalCandidates: number;
  selectedCandidates: number;
  rejectedCandidates: number;
  constructor(private _candidatesService: CandidatesService) {}

  ngOnInit(): void {
    this.candidates = this._candidatesService.getCandidates();

    this.totalCandidates = this.candidates.length;
    this.selectedCandidates = this.candidates.filter(e => e.status === 'Selected').length;
    this.rejectedCandidates = this.candidates.filter(e => e.status === 'Rejected').length;
  }

}