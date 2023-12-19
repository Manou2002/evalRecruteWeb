export class Recruteur{
    id:number;
    nom:string;
    prenom:string;
    email:string;
    estActif:boolean;
    updatedBy:string;
    createdBy:string;

    constructor(){
        this.id=0;
        this.nom="";
        this.prenom="";
        this.email="";
        this.estActif=false;
        this.updatedBy="";
        this.createdBy="";
    }
}