import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  listProdcut = [
    { id: 1, titre: "T-shirt 1", prix: 18, quantite: 0, aime: 0 },
    { id: 2, 

titre  : "T-shirt 2", 

prix  : 21, 

quantite  : 10, aime: 0 },
    { id: 3, 

titre  : "T-shirt 3", 

prix  : 16, 

quantite  : 8, aime: 0 },
  ]

  id=0
constructor(private activateroute:ActivatedRoute){

}

ngOnInit(): void {
  
  this.id=this.activateroute.snapshot.params['id']
}
}
