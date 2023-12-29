import { Poste } from "./postes";

export class DomaineActivite{

    id:number;
    libelle:string;
    description:string;
    estActif:boolean;
    createdBy:string;
    updatedBy:string;

    constructor(){

        this.id=0;
        this.libelle="";
        this.description=""
        this.estActif=false;
        this.createdBy="";
        this.updatedBy="";
    
        }
}