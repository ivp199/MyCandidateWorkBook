import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CandidateModel } from '../app/candidate.model';

@Injectable()
export class CandidatesService {
    private candidates: CandidateModel[] = [
        { "id": 1, "name": "Devland Richel", "gender": "Male", "city": "Bangalore", "technologies": ['Java', 'C++', 'VB', 'JS'], "status": "Interview" },
        { "id": 2, "name": "Axel Ramberg", "gender": "Male", "city": "Bangalore", "technologies": ['C', 'JS'], "status": "Rejected" },
        { "id": 3, "name": "Janith Webborn", "gender": "Female", "city": "Delhi", "technologies": ['Java'], "status": "Interview" },
        { "id": 4, "name": "Brennan Maier", "gender": "Male", "city": "Mumbai", "technologies": ['.Net', 'C++'], "status": "Interview" },
        { "id": 5, "name": "Orbadiah Raynton", "gender": "Male", "city": "Delhi", "technologies": ['Java', 'C++', 'VB', 'JS'], "status": "Interview" },
        { "id": 6, "name": "Lusa Gilham", "gender": "Female", "city": "Bangalore", "technologies": ['Java'], "status": "Selected" },
        { "id": 7, "name": "Saunder Everley", "gender": "Male", "city": "Mumbai", "technologies": ['Angular', 'NodeJS', 'JS'], "status": "Interview" },
        { "id": 8, "name": "Xylia Latore", "gender": "Female", "city": "Chennai", "technologies": ['Java', 'C++', 'VB', 'JS'], "status": "Interview" },
        { "id": 9, "name": "Rodger Bendell", "gender": "Male", "city": "Delhi", "technologies": ['Java', 'C++', 'VB', 'JS'], "status": "Interview" },
        { "id": 10, "name": "Worthy Scoon", "gender": "Male", "city": "Bangalore", "technologies": ['Java', 'C++', 'VB', 'JS'], "status": "Selected" }];
        
    getCandidates(): any[] {
        //let candidates = this.candidates.map(e => Observable<CandidateModel> e);

        return this.candidates;
    }

    changeStatus(id: number, status: string) {
        this.candidates.forEach(candidate => {
            if (candidate.id === id) {
                candidate.status = status;
            }
        })
    }

    addCandidate(name: string, city:string, gender: string) {
        let curr_count = this.candidates.length;
        this.candidates.push( {
            id: curr_count + 1,
            name: name,
            city: city,
            gender: 'Male',
            technologies: ['Java', 'C#'],
            status: 'Interview'
        })
    }

}