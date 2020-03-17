import { Component, OnInit } from '@angular/core';
import { IImage } from '../slideshow/IImage';
import { Router } from '@angular/router';
@Component({
    selector: 'sy-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private router: Router) { }

    navLinks: any[] = [
        {
            path: '/pregnency',
            label: 'PREGNENCY'
        },
        {
            path: '/babies',
            label: 'BABIES'
        },
        {
            path: '/family',
            label: 'FAMILY'
        },
        {
            path: '/occasions',
            label: 'OCCASIONS'
        },
        {
            path: '/birthdays',
            label: 'BIRTHDAY'
        },
        // {
        //     path: '/booksession',
        //     label: 'BOOK A SESSION'
        // },
    ];
    imageUrls: (string | IImage)[] = [
        { url: 'assets/images/babys.jpg', href: '#config' },
        { url: 'assets/images/family.jpg', href: '#config' },
        { url: 'assets/images/occasions.jpg', href: '#config' },
        { url: 'assets/images/pregnency.jpg', href: '#config' },
    ];

    height: string = '650px';
    minHeight: string;
    arrowSize: string = '30px';
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

    onClick(ev, link) {
        this.router.navigate([link.path]);
    }

}
