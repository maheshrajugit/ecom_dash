import { Component, Input, ViewChild } from '@angular/core';
import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.scss'],


})
export class GalleryViewComponent {



  images: GalleryItem[] = [
    new ImageItem({ }),
  ];

  @Input() allImages: any=[{ src: '', thumb: '' }];

  ngOnInit() {
    this.images.pop();
    this.allImages.map((item:any)=>{
      this.images.push(
        new ImageItem(item)
      );
    })
    

    console.log(this.images);
    
  }

}
