import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../rickMorty.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  providers: [RickMortyService],
})
export class RootComponent implements OnInit {
  locations: any[] = [];
  constructor(private rickMortyService: RickMortyService, private router: Router) {}
  ngOnInit() {
    this.rickMortyService.getLocations().subscribe({
      next: (data: any) => (this.locations = data.results)
    });
  }

  goToCharacters() {
    this.router.navigate(['/characters']);
  }
}
