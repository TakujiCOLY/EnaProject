import { Adresse } from "./adresse";
import { Dossier } from "./dossier";
import { EleveCycle } from "./eleve-cycle";
import { ElevePromotion } from "./eleve-promotion";
import { EleveSection } from "./eleve-section";
import { Telephone } from "./telephone";
import { Urgence } from "./urgence";

export class Eleve {
    public id!: number;
    public nom!: string;
    public prenom!: string;
    public dateNaiss!: Date;
    public sexe!: string;
    public nci!: string;
    public typeEleve!: string;
    public lieuNaiss!: string;
    public nationalite!: string;
    public matricule!: string;
    public numDosCandidat!: string;
    public emailPrive!: string;
    public emailPro!: string;
    public prenomPere!: string;
    public prenomMere!: string;
    public nomPere!: string;
    public nomMere!: string;
    public ville!: any;
    public adresses!: Adresse[];
    public telephones!: Telephone[];
    public dossiers!: Dossier[];
    public urgences!: Urgence[];
    public eleveSections!: any;
    public eleveCycles!: any;
    public elevePromotions!: any;
}
