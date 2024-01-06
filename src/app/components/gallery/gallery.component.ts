import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @ViewChild('scroll') scroll!: ElementRef;
  gallery = [
    {
      img: 'tv.jpg',
      hover:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. ',
    },
    { img: 'tv.jpg', hover: '2' },
    { img: 'tv.jpg', hover: '3' },
    { img: 'tv.jpg', hover: '4' },
  ];
  next() {
    const wrapper: HTMLElement = this.scroll.nativeElement;
    wrapper.scrollBy({ left: 300, top: 0, behavior: 'smooth' });
    console.log(this.scroll.nativeElement);
  }
  prev() {
    const wrapper: HTMLElement = this.scroll.nativeElement;
    wrapper.scrollBy({ left: -300, top: 0, behavior: 'smooth' });
  }
}
