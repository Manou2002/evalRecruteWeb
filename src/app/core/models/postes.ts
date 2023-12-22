import { DomaineActivite } from "./domaineActivites";

export class Poste {
    id:number;
    titre:string;
    mission:string;
    niveau:string;
    competence:string;
    estActif:boolean;
    domaineActivite:DomaineActivite;
    createdBy:string;
    updatedBy:string;

    constructor(){
        this.id=0;
        this.titre="";
        this.mission="";
        this.niveau="";
        this.competence="";
        this.estActif=false;
        this.domaineActivite=new DomaineActivite();
        this.createdBy="";
        this.updatedBy="";
    }
}