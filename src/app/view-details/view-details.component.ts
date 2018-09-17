import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import{ Music} from '../musicObj';
import { DataService} from '../data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  musicDetails: Music;

  constructor(private route: ActivatedRoute,private location: Location,private _dataService: DataService) { }

  ngOnInit() {
    this.getMusicDetails();
  }
getMusicDetails():void{
  const id = this.route.snapshot.params['id'];
  this._dataService.getMusicDetailsID(id).subscribe((res: Music) => {console.log(res[0]); this.musicDetails= res[0];   console.log(this.musicDetails.title);});;
  //this._dataService.getMusicDetailsID(id);
 
}
}
