package com.ena.entities;

import com.ena.deserializer.VisiteDeserializer;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@JsonDeserialize(using = VisiteDeserializer.class)
public class Visite implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String medecin;
    private String examensCliniques;
    private String resultats;
    private String lieu;
    private Date date;
    private String medecinContreVisite;
    private String resultatsContreVisite;
    private Date dateContreVisite;
    @ManyToOne
    @JsonBackReference
    private Dossier dossier;
}
