import { DomaineActivite } from "./domaineActivites";
import { NiveauEtudes } from "./niveau-etudes";
import { NiveauExperiences } from "./niveau-experiences";
import { TypesContrats } from "./types-contrats";

export class Offre {
    id:number;
    titre:string;
    mission:string;
    niveau:string;
    competence:string;
    dateOffre: string;
    nombreOffre: number;
    dateFin: string;
    estActif:boolean;
    domaineActivite:DomaineActivite;
    niveauExperience:NiveauExperiences;
    niveauEtude:NiveauEtudes;
    TypesContrats:TypesContrats;
    createdBy:string;
    updatedBy:string;

    constructor(){
        this.id=0;
        this.titre="";
        this.mission="";
        this.niveau="";
        this.competence="";
        this.dateOffre="";
        this.nombreOffre=0;
        this.dateFin="";
        this.estActif=false;
        this.domaineActivite=new DomaineActivite();
        this.niveauExperience=new NiveauExperiences();
        this.niveauEtude=new NiveauEtudes();
        this.TypesContrats=new TypesContrats();
        this.createdBy="";
        this.updatedBy="";
    }
}