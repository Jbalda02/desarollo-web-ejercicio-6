import { Component, OnInit } from '@angular/core';
import { PostService } from '../../Servicios/tabla-servicio.service';
import { Jsonplaceholder } from '../../Interfaces/jsonplaceholder';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-post-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  posts: Jsonplaceholder[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}