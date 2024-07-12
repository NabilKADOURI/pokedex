import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-picture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.css'
})
export class PictureComponent {

  mangas = [ 
    { title: 'Naruto', image: "https://fr.web.img6.acsta.net/pictures/19/07/29/15/50/2364027.jpg", author: 'Masashi Kishimoto', genre: 'Shonen', volumes: 72, published: '1999-2014' }, 

    { title: 'One Piece',image:"https://fr.web.img6.acsta.net/pictures/19/07/29/15/50/2364027.jpg", author: 'Eiichiro Oda', genre: 'Shonen', volumes: 100, published: '1997-present' }, 

    { title: 'Attack on Titan',image: "https://fr.web.img6.acsta.net/pictures/19/07/29/15/50/2364027.jpg", author: 'Hajime Isayama', genre: 'Seinen', volumes: 34, published: '2009-2021' },
    
    { title: 'Death Note',image: "https://fr.web.img6.acsta.net/pictures/19/07/29/15/50/2364027.jpg", author: 'Tsugumi Ohba', genre: 'Shonen', volumes: 12, published: '2003-2006' }, 
    
    { title: 'Fullmetal Alchemist',image:"https://fr.web.img6.acsta.net/pictures/19/07/29/15/50/2364027.jpg", author: 'Hiromu Arakawa', genre: 'Shonen', volumes: 27, published: '2001-2010' } 
  ];

}
