import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
val="essai";
titre="Produit de 2 nombres";
  constructor() { }

  ngOnInit() {
  }

}
