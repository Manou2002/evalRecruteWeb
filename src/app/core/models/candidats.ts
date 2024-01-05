import { Offre } from "./offres";

export class Candidat {

    id: number;
    nom: string;
    prenom: string;
    email: string;
    estActif: boolean;
    offre: Offre;
    createdBy: string;
    updatedBy: string;

    constructor() {
        this.id = 0;
        this.nom = "";
        this.prenom = "";
        this.email = "";
        this.estActif = false;
        this.offre = new Offre();
        this.createdBy = "";
        this.updatedBy = "";
    }
}