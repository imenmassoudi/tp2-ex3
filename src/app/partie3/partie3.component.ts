import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partie3',
  templateUrl: './partie3.component.html',
  styleUrls: ['./partie3.component.css']
})
export class Partie3Component implements OnInit {
 nom="imen";
 contenu;
  onAfficher()
  { console.log(this.nom); }
  onKeyUp(event:KeyboardEvent)
  {this.contenu = 'Bonjour '+(<HTMLInputElement>event.target).value; 
console.log(this.contenu); }
onAfficherContenu(val:string)
{ console.log(val); }
  constructor() { }

  ngOnInit() {
  }

}
