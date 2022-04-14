package com.ena.entities;

import com.ena.deserializer.DossierDeserializer;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@JsonDeserialize(using = DossierDeserializer.class)
public class Dossier implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JsonBackReference
    private Eleve eleve;
    @ManyToOne
    private VoieAcces voieAcces;
    @OneToMany(mappedBy = "dossier")
    private List<Arrete> arretes;
    @OneToMany(mappedBy = "dossier")
    private List<BulletinSalaire> bulletinSalaires;
    @OneToMany(mappedBy = "dossier")
    private List<Casier> casiers;
    @OneToMany(mappedBy = "dossier")
    private List<CertificatAdministratif> certificatAdministratifs;
    @OneToMany(mappedBy = "dossier")
    private List<CertificatNationalite> certificatNationalites;
    @OneToMany(mappedBy = "dossier")
    private List<Diplome> diplomes;
    @OneToMany(mappedBy = "dossier")
    private List<Engagement> engagements;
    @OneToMany(mappedBy = "dossier")
    private List<Memoire> memoires;
    @OneToMany(mappedBy = "dossier")
    private List<ValidationDossier> validationDossiers;
    @OneToMany(mappedBy = "dossier")
    private List<Visite> visites;
}
