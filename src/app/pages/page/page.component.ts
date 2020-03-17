import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sy-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  allImages: any[];
  url = '';
  pageTitle = '';
  isBookSession = false;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private imageService: PagesService) { }
  ngOnInit(): void {
    this.url = this.router.url;
    this.pageTitle = this.url.replace('/', '');
    if (this.pageTitle == 'booksession') {
      this.isBookSession = true;
    } else {
      this.allImages = this.imageService.getImages(this.url);
    }
  }
}
