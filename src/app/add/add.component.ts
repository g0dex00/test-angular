import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  appartform!:FormGroup

  id=0
constructor( private acr : ActivatedRoute){

}
ngOnInit(): void {
  this.id=this.acr.snapshot.params['id']
  this.appartform=new FormGroup({
    titre:new FormControl('',Validators.required),
    quantite:new FormControl('',Validators.required),
    prix:new FormControl('',Validators.required),
    aime:new FormControl('',Validators.required),


  })
}

get titre(){return this.appartform.get('titre')}
get quantite(){return this.appartform.get('quantite')}
get prix(){return this.appartform.get('prix')}
get aime(){return this.appartform.get('aime')}

add(){
  console.log("my form: "+JSON.stringify(this.appartform.value))
}
}
