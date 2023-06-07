import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../rickMorty.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RickMortyService],
}) export class AppComponent implements OnInit {
  characters: any[] = [];
constructor(
    private rickMortyService: RickMortyService,
    private router: Router
  ) {}
  ngOnInit() {
    this.rickMortyService.getcharacters().subscribe({
      next: (data: any) => (this.characters = data.results),
    });
  }
}
