import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center';
import { ActivatedRoute } from '@angular/router';
import { VaccinationService } from '../vaccination.service';


@Component({
  selector: 'app-vaccination-center',
  templateUrl: './vaccination-center.component.html',
  styleUrls: ['./vaccination-center.component.scss']
})

export class VaccinationCenterComponent implements OnInit {
  @Input() center?: VaccinationCenter;
  @Output() deleted = new EventEmitter<VaccinationCenter>();
  
  delete(){
    this.deleted.emit(this.center);
  }

  constructor(private route: ActivatedRoute, private vaccinationService: VaccinationService) {  }

  ngOnInit(): void {
    //const id = Number(this.route.snapshot.paramMap.get('id'));
    //this.center = this.vaccinationService.getCenterById(id);
  }

  selected?:VaccinationCenter

  isSpecialCenter(center: VaccinationCenter){
    return center.city == "Nancy"
  }
}

