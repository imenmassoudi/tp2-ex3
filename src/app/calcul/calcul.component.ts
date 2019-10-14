import { Component, OnInit } from '@angular/core';
import { parse } from 'url';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {
  contenu="";
  carre:Number;
onClick(event:any){
    this.contenu=event.target.value;
    this.carre=parseInt(this.contenu)*parseInt(this.contenu);

}
s:number;
onSomme(case1,case2){
this.s=(parseInt(case1)+parseInt(case2));
}
  constructor() { }

  ngOnInit() {
  }

}
