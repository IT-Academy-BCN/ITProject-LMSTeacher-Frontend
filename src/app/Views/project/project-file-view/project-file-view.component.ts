import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';
import { PerProjects, Itinerary } from '../project-view/model/perprojects.model';
import { ProjectsService } from './../../../Services/projects.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-project-file-view',
  templateUrl: './project-file-view.component.html',
  styleUrls: ['./project-file-view.component.scss']
})
export class ProjectFileViewComponent implements OnInit {

  modalRef: BsModalRef; // modal
  projects: PerProjects[] = [];
  iterations: Itinerary[] = [];
  singleProject: number;

  constructor( 
    private modalService: BsModalService, // modal
    private projectsService: ProjectsService,
    private route: ActivatedRoute
    ) { }
    public page: number = 1;
    public today: Date = new Date();
    public prova: number = 3;
    public idIteration: number;

    ngOnInit() {

      this.projectsService.get_projects()
      .subscribe((projects: PerProjects[])=>{
          this.projects = projects;
          });
      
      // collect idProject by the url (project-view.component.ts --> toProject())
      // and put it into a instance to refer it in HTML. 
      // Then, we can compare each project id with our project id. 
      let idProject = +this.route.snapshot.paramMap.get("id");
      this.singleProject = idProject;

      // To get iterations by itinerary
      this.projectsService.getItineraryById(idProject)
         .subscribe(
             (data) => {
               this.iterations = data['iterations'];
             },
             (error) => {
               console.log(error);
             }
           );
    }

  

  getDevelopers(iteration){
    this.page = 2;
    this.idIteration = iteration.id;
    //console.log("Id de la iteració: " + this.idIteration);
  }
  
  //
  // NEED IT TO RUN MODAL. IF MODAL ISN'T ACTIVE, THIS IS USELESS.
  //
  // seeDevelopers(template) {
  //    this.modalRef = this.modalService.show(template);
  //  }

  closeModal() {
    this.modalService._hideModal(1);
  }

}