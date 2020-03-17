import { Component, OnInit } from '@angular/core';
import { IImage } from 'src/app/Shared/slideshow/IImage';

@Component({
  selector: 'sy-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  imageUrls: (string | IImage)[] = [
    { url: 'assets/images/babys.jpg', href: '#config' },
    { url: 'assets/images/family.jpeg', href: '#config' },
    { url: 'assets/images/occasions.jpg', href: '#config' },
    { url: 'assets/images/pregnency.jpg', href: '#config' },
];

height = '650px';
minHeight: string;
arrowSize = '30px';
showArrows: boolean = true;
disableSwiping: boolean = false;
autoPlay: boolean = true;
autoPlayInterval: number = 3333;
stopAutoPlayOnSlide: boolean = true;
debug: boolean = false;
backgroundSize: string = 'cover';
backgroundPosition: string = 'center center';
backgroundRepeat: string = 'no-repeat';
showDots: boolean = true;
dotColor: string = '#FFF';
showCaptions: boolean = true;
captionColor: string = '#FFF';
captionBackground: string = 'rgba(0, 0, 0, .35)';
lazyLoad: boolean = false;
hideOnNoSlides: boolean = false;
width: string = '100%';
fullscreen: boolean = false;
enableZoom: boolean = false;
enablePan: boolean = false;
noLoop: boolean = false;
ngOnInit(): void {

}
}
