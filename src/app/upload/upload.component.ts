import { Component, OnInit } from '@angular/core';
import {Music} from '../musicObj'
import { DataService} from '../data.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  musicDetails:Music={
    id:'',
    title:'',
    type:'Devotional',
    file:'',
    image:null
  };
  fileContent:any;
  fileContentImg:File;
  constructor(private _dataService: DataService) {
     
   }

  ngOnInit() {
  }
   guidGenerator():string {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
  fileChanged(e) {
      this.fileContent = e.target.files[0];
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        console.log(fileReader.result);
        this.musicDetails.file = fileReader.result;
        console.log(this.musicDetails);
      }
      fileReader.readAsText(this.fileContent);
  }
  fileChangedImg(e){
    this.fileContentImg = <File>e.target.files[0];
  }
submit():void{
 const fd = new FormData();
 const id = this.guidGenerator();
 fd.append('image', this.fileContentImg, this.fileContentImg.name);
 fd.append('id',id);
 fd.append('title',this.musicDetails.title);
 fd.append('type', this.musicDetails.type);
 fd.append('file', this.musicDetails.file);
  this._dataService.postMusicDetails(fd);
 

}
}
