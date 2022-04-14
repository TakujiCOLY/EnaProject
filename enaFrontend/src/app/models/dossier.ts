import { Arrete } from "./arrete";
import { BulletinSalaire } from "./bulletin-salaire";
import { Casier } from "./casier";
import { CertificatAdministratif } from "./certificat-administratif";
import { CertificatNationalite } from "./certificat-nationalite";
import { Diplome } from "./diplome";
import { Engagement } from "./engagement";
import { Memoire } from "./memoire";
import { ValidationDossier } from "./validation-dossier";
import { Visite } from "./visite";

export class Dossier {
    public id!: number;
    public eleve!: number;
    public voieAcces!: any;
    public arretes!: Arrete[];
    public bulletins!: BulletinSalaire[];
    public casiers!: Casier[];
    public certificatAdministratifs!: CertificatAdministratif[];
    public certificatNationalites!: CertificatNationalite[];
    public diplomes!: Diplome[];
    public engagements!: Engagement[];
    public memoires!: Memoire[];
    public validationDossiers!: ValidationDossier[];
    public visites!: Visite[];
}
