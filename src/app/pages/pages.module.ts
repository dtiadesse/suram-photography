import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
// import { PagesService } from '../providers/index';
import { PAGES_COMPONENTS, PAGES_ROUTES } from './pages.routes';
import { SharedModule } from '../Shared/shared.module';
import { MaterialModule } from '../Shared/material/material.module';
import { SlideshowModule } from '../Shared/slideshow/slideshow.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        SharedModule,
        SlideshowModule,
        RouterModule.forChild(PAGES_ROUTES),
    ],
    declarations: [
        ...PAGES_COMPONENTS
    ],
    providers: [
        //PagesService,
    ],

})
export class PagesModule { }
