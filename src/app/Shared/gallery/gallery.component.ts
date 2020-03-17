import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { PagesService } from 'src/app/pages/pages.service';

@Component({
  selector: 'sy-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images: any[];
  filterBy?: any = 'all';
  @Input() allImages: any[] = [];
}
