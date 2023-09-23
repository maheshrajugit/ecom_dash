import { Component, Input, ViewChild } from '@angular/core';
import { GalleryRef, GalleryItem, ImageItem, Gallery } from 'ng-gallery';

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

  constructor(private gallery: Gallery)
  {

  }

  ngOnInit() {

    const galleryRef = this.gallery.ref('preview-gallery');
    galleryRef.reset();
    this.images = this.allImages.map((item:any)=>{
     return  new ImageItem({ src: item.src , thumb: item.thumb });

    })
    galleryRef.load(this.images);
    


    
  }

  ngOnChanges()
  {
    console.log(this.allImages);
  
    const galleryRef = this.gallery.ref('preview-gallery');
    galleryRef.reset();
    this.images = this.allImages.map((item:any)=>{
     return  new ImageItem({ src: item.src , thumb: item.thumb });

    })
    galleryRef.load(this.images);

    
  }

}
