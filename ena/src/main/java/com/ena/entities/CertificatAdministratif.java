package com.ena.entities;

import com.ena.deserializer.CertificatAdministratifDeserializer;
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
@JsonDeserialize(using = CertificatAdministratifDeserializer.class)
public class CertificatAdministratif implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String matricule;
    private String numero;
    private String lieu;
    private Date date;
    private String ancienneteEmploi;
    private String ancienneteCorps;
    @ManyToOne
    @JsonBackReference
    private Dossier dossier;
    @ManyToOne
    private Hierarchie hierarchie;
    @ManyToOne
    private ClasseGrade classeGrade;
}
