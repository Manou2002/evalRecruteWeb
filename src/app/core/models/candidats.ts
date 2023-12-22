import { Poste } from "./postes";

export class Candidat {

    id:number;
    nom:string;
    prenom:string;
    email:string;
    estActif:boolean;
    poste:Poste;
    createdBy:string;
    updatedBy:string;

    constructor(){
        this.id=0;
        this.nom="";
        this.prenom="";
        this.email="";
        this.estActif=false;
        this.poste=new Poste();
        this.createdBy="";
        this.updatedBy="";
    }
}