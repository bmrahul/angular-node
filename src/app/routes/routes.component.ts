import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoutesService } from './routes.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  constructor(private route: RoutesService) { }

  ngOnInit() {
    this.route.get()
    .subscribe(response => {
      console.log(response);
    });
  }

}
