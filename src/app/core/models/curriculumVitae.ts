import { Recruteur } from "./recruteurs";

export class CurriculumVitae{

    id:number;
    presentation:string;
    niveau:string;
    competence:string;
    experienceProfessionnelle:string;
    estActif:boolean;
    recruteur:Recruteur;
    createdBy:string;
    updated:string;


    constructor(){
        this.id=0;
        this.presentation="";
        this.niveau="";
        this.competence="";
        this.experienceProfessionnelle="";
        this.estActif=false;
        this.recruteur=new Recruteur();
        this.createdBy="";
        this.updated="";


    }
}