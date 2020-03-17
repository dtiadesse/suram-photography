import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PagesService {
    allImages = [];
    constructor(private http: HttpClient) {
    }
    getPregnencyImages() {
        return this.allImages = Imagesdelatils.slice(0);
    }

    getImage(id: number) {
        return Imagesdelatils.slice(0).find(Images => Images.id == id)
    }

    getImages(imagesType) {
        const imgs = [];

        for (let i = 1; i < 10; i++) {
            const img: any = {};
            img.url = `assets/images${imagesType}/${i}.jpg`;
            img.type = `${imagesType}`;
            img.id = i;
            imgs.push(img);
        }
        return imgs;
    }
}
const Imagesdelatils = [
    { id: 1, type: 'Pregnency', url: 'assets/images/pregnency/1.jpg' },
    { id: 2, type: 'Pregnency', url: 'assets/images/pregnency/2.jpg' },
    { id: 3, type: 'Pregnency', url: 'assets/images/pregnency/3.jpg' },
    { id: 4, type: 'Pregnency', url: 'assets/images/pregnency/4.jpg' },
    { id: 5, type: 'Pregnency', url: 'assets/images/pregnency/5.jpg' },
    { id: 7, type: 'Pregnency', url: 'assets/images/pregnency/7.jpg' },
    { id: 6, type: 'Pregnency', url: 'assets/images/pregnency/6.jpg' }
];
