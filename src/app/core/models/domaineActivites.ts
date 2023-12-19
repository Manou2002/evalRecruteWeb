import { Poste } from "./postes";

export class DomaineActivite{

    id:string;
    libelle:string;
    description:string;
    estActif:boolean;
    createdBy:string;
    updatedBy:string;

    constructor(){

        this.id="";
        this.libelle="";
        this.description=""
        this.estActif=false;
        this.createdBy="";
        this.updatedBy="";
    
        }
}