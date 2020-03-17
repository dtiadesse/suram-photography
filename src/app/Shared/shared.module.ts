import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../Shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GalleryComponent } from './gallery/gallery.component';
import { FilterimagesPipe  } from './filterimages.pipe';
import { PagesService } from '../pages/pages.service';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SlideshowModule } from './slideshow/slideshow.module';
export const SHARED_COMPONENTS = [
    GalleryComponent,
    FilterimagesPipe,
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        FlexLayoutModule,
    ],
    declarations: [
        ...SHARED_COMPONENTS,
    ],
    exports: [
        ...SHARED_COMPONENTS
    ],
    providers: [PagesService, FilterimagesPipe],

})
export class SharedModule { }
