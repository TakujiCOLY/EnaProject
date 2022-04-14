package com.ena.entities;

import com.ena.deserializer.EleveDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@JsonDeserialize(using = EleveDeserializer.class)
public class Eleve implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String prenom;
    private Date dateNaiss;
    private String sexe;
    private String nci;
    private String typeEleve;
    private String lieuNaiss;
    private String nationalite;
    private String matricule;
    private String numDosCandidat;
    private String emailPrive;
    private String emailPro;
    private String prenomPere;
    private String nomPere;
    private String prenomMere;
    private String nomMere;
    @ManyToOne
    private Ville ville;
    @OneToMany(mappedBy = "eleve")
    private List<Adresse> adresses;
    @OneToMany(mappedBy = "eleve")
    private List<Telephone> telephones;
    @OneToMany(mappedBy = "eleve")
    private List<Urgence> urgences;
    @OneToMany(mappedBy = "eleve")
    private List<EleveCycle> eleveCycles;
    @OneToMany(mappedBy = "eleve")
    private List<ElevePromotion> elevePromotions;
    @OneToMany(mappedBy = "eleve")
    private List<EleveSection> eleveSections;
    @OneToMany(mappedBy = "eleve")
    private List<Dossier> dossiers;

    public void addEleveCycle(EleveCycle eleveCycle) {
        if (!eleveCycles.contains(eleveCycle)) {
            eleveCycles.add(eleveCycle);
        }
    }

    public void removeEleveCycle(EleveCycle eleveCycle) {
        if (eleveCycles.contains(eleveCycle)) {
            eleveCycles.remove(eleveCycle);
        }
    }

    public void addEleveSection(EleveSection eleveSection) {
        if (!eleveSections.contains(eleveSection)) {
            eleveSections.add(eleveSection);
        }
    }

    public void removeEleveSection(EleveSection eleveSection) {
        if (eleveSections.contains(eleveSection)) {
            eleveSections.remove(eleveSection);
        }
    }

    public void addElevePromotion(ElevePromotion elevePromotion) {
        if (!elevePromotions.contains(elevePromotion)) {
            elevePromotions.add(elevePromotion);
        }
    }

    public void removeElevePromotion(ElevePromotion elevePromotion) {
        if (elevePromotions.contains(elevePromotion)) {
            elevePromotions.remove(elevePromotion);
        }
    }
}
