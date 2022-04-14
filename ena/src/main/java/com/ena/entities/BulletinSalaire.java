package com.ena.entities;

import com.ena.deserializer.BulletinSalaireDeserializer;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@JsonDeserialize(using = BulletinSalaireDeserializer.class)
public class BulletinSalaire implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String matricule;
    private String emploi;
    @ManyToOne
    @JsonBackReference
    private Dossier dossier;
    @ManyToOne
    private ClasseGrade classeGrade;
    @ManyToOne
    private Echelon echelon;
    @ManyToOne
    private Statut statut;
    @ManyToOne
    private Corps corps;
}
