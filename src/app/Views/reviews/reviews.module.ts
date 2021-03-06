import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* ngx-bootstrap */
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
/* ngx-pagination */
import { NgxPaginationModule } from 'ngx-pagination';
/* modules & components */
import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsViewComponent } from './reviews-view/reviews-view.component';
import { TableComponent }   from './table/table.component'; 
import { ModalComponent } from './modal/modal.component';
import { ReviewsItSearchComponent } from './reviews-it-search/reviews-it-search.component';
import { beautifyStringPipe } from '../../Pipes/beautifyStringPipe'
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ReviewsViewComponent,
    TableComponent,
    ModalComponent, 
    ReviewsItSearchComponent,
    beautifyStringPipe,
  ],
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    NgxPaginationModule,
    ReviewsRoutingModule,
    TranslateModule,
    TooltipModule.forRoot()
    ]
})
export class ReviewsModule { }
