import { Component, EventEmitter, Output } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center/vaccination-center';
import { VaccinationService } from '../service/vaccination.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-page-super-admin',
  templateUrl: './page-super-admin.component.html',
  styleUrls: ['./page-super-admin.component.scss']
})
export class PageSuperAdminComponent {
  centers: VaccinationCenter[] = [];
  newCenter = {name: '', city: '', address: ''};
  selected?: VaccinationCenter;
  searchedCenters: VaccinationCenter[] = [];
  token: string = '';

  admins: User[] = [];
  newAdmin = {login: '', password: '', centerId: 0};
  selectedA?: User;
  searchedAdmins: User[] = [];
  isEditing = false;

  @Output() searchAdmin: EventEmitter<User[]> = new EventEmitter<User[]>();
  searchQuery: string = '';

  constructor(private service: VaccinationService, 
              private route: ActivatedRoute,
              private authService: AuthService,
              private userService: UserService) {  }

  ngOnInit(): void {
    this.service.getAllCenters().subscribe(resultCenters=>{
      this.centers=resultCenters;
    });
    this.token = String(this.route.snapshot.paramMap.get('token'));
    this.userService.getAllAdmins(this.token).subscribe(resultAdmins => {
      this.admins = resultAdmins;
    })
  }

  selectCenter(center: VaccinationCenter){
    this.selected=center;
  }

  handleSearch(event: VaccinationCenter[]){
    this.searchedCenters = event;
  }

  addCenter() {
    if (!(this.newCenter.name === '' || this.newCenter.address === '' || this.newCenter.city === '')){
      this.service.addCenter(this.newCenter.name, this.newCenter.address, this.newCenter.city).subscribe(response => {
        console.log('Centre ajouté :', response);
        this.service.getAllCenters().subscribe(resultCenters => {
          this.centers = resultCenters;
        })
      }, error => {
        console.error('Erreur lors de l\'ajout du centre :', error);
      });
    }
  }

  deleteCenter(center: VaccinationCenter){
  this.service.deleteCenter(center.id).subscribe(response => {
    this.service.getAllCenters().subscribe(resultCenters => {
      this.centers = resultCenters;
    })
  }, error => {
    this.service.getAllCenters().subscribe(resultCenters => {
      this.centers = resultCenters;
    })
  });
  }

  selectAdmin(admin: User){
    this.selectedA=admin;
  }

  handleSearchAdmin(eventA: User[]){
    this.searchedAdmins = eventA;
  }

  addAdmin() {
    //if (!(this.newAdmin.login === '' || this.newAdmin.password === '' || this.newAdmin.centerId === 0)){
    this.userService.createNewAdmin(this.newAdmin.login, this.newAdmin.password, this.newAdmin.centerId, this.token).subscribe(response => {
      this.userService.getAllAdmins(this.token).subscribe(resultAdmins => {
        this.admins = resultAdmins;
      })
    }, error => {
      this.userService.getAllAdmins(this.token).subscribe(resultAdmins => {
        this.admins = resultAdmins;
      })
    });
  }

  deleteAdmin(admin: User){
  this.userService.deleteAdmin(admin.id,this.token).subscribe(response => {
    this.userService.getAllAdmins(this.token).subscribe(resultAdmins => {
      this.admins = resultAdmins;
    })
  }, error => {
    this.userService.getAllAdmins(this.token).subscribe(resultAdmins => {
      this.admins = resultAdmins;
    })
  });
  }

  SearchAdmin(token: string){
    this.userService.getAllAdmins(token).subscribe(admins => {
      const filteredAdmins = admins.filter(admin => 
        admin.login.toLowerCase().includes(this.searchQuery.toLowerCase()) 
      );
      this.searchAdmin.emit(filteredAdmins);
    }); 
  }
/*
  modifyAdmin(admin: User){
    this.userService.modifyAdmin(admin)
  }

  editAdmin(admin: User) {
    this.isEditing = true;
    this.selectedA = admin;
    // Mettez à jour les valeurs de newAdmin avec les valeurs de l'administrateur sélectionné
    this.newAdmin.login = admin.login;
    this.newAdmin.password = admin.password;
    this.newAdmin.centerId = admin.centerId;
    // ... (autres propriétés à mettre à jour selon vos besoins)
  }

  // Ajoutez cette méthode pour quitter le mode édition
  cancelEdit() {
    this.isEditing = false;
    // Réinitialisez les valeurs de newAdmin si nécessaire
    this.newAdmin = { login: '', password: '', centerId: 0 };
  }*/
}
