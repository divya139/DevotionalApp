import { Component, OnInit } from '@angular/core';
import{ Music} from '../musicObj';
import { DataService} from '../data.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  songs:Music[];
  selectedMusic : Music;
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getAllSongs();
  }
getAllSongs():void{
 this._dataService.getMusicDetails().subscribe(res => {this.songs= res});
 console.log(this.songs);

}
}
