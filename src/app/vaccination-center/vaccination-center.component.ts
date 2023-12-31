import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VaccinationCenter } from './vaccination-center';
import { ActivatedRoute } from '@angular/router';
import { VaccinationService } from '../service/vaccination.service';


@Component({
  selector: 'app-vaccination-center',
  templateUrl: './vaccination-center.component.html',
  styleUrls: ['./vaccination-center.component.scss']
})

export class VaccinationCenterComponent implements OnInit {
  @Input() center?: VaccinationCenter;
  @Output() deleted = new EventEmitter<VaccinationCenter>();

  constructor(private route: ActivatedRoute, private vaccinationService: VaccinationService) {  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vaccinationService.getCenterById(id).subscribe(resultCenters=>{
      if (resultCenters && resultCenters.length > 0) {
        this.center = resultCenters[0];
      }
    });
  }

  selected?:VaccinationCenter
}
