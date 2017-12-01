import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
  title1 = "Retro barcode generator"
  colors = ['#F08080','#FF1493', '#228B22', '#FF8C00','#FF00FF', '#F0E68C'];
  myArray = [];

  ColorGenerate(){
    for (var i = 0; i< this.colors.length; i++){
      this.myArray.push(this.colors[Math.floor(Math.random()*7)])
    }
  }
  ngOnInit(){
    this.ColorGenerate();
  }
  
}