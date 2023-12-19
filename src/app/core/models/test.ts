import { Candidat } from "./candidats";

export class Test {
    id:number;
    libelle:string;
    description:string;
    estActif:boolean;
    candidat:Candidat
    updatedBy:string;
    createdBy:string;

    constructor(){
        this.id=0;
        this.libelle="";
        this.description="";
        this.estActif=false;
        this.candidat=new Candidat();
        this.updatedBy="";
        this.createdBy="";
    }
}

