import { LightningElement } from "lwc";

export default class App extends LightningElement {
   cod = "c-00125";
   name = "Daniel";
   phone = "115985223";
   email = "sf_great@gamil.com";
   rating = "Sim";


alteraValores(){
   this.cod = "d-001597";
   this.name = "Anna Carolina";
   this.phone = "5489853234";
   this.email = "sf_done@hotmail.com";
   this.rating = "Yes";
}
}