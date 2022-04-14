package com.ena.entities;

import com.ena.deserializer.ValidationDossierDeserializer;
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
@NoArgsConstructor
@AllArgsConstructor
@ToString
@JsonDeserialize(using = ValidationDossierDeserializer.class)
public class ValidationDossier implements Serializable {
    @EmbeddedId
    private ValidationDossierId validationDossierId;
    private String nom;
    private String prenom;
    private Date dateValidation;
    private String fonction;
    @ManyToOne
    @MapsId(value = "etatValidationId")
    private EtatValidation etatValidation;
    @ManyToOne
    @MapsId(value = "dossierId")
    @JsonBackReference
    private Dossier dossier;
}
