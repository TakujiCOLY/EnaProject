package com.ena.entities;

import com.ena.deserializer.DiplomeDeserializer;
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
@JsonDeserialize(using = DiplomeDeserializer.class)
public class Diplome implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String numero;
    private String type;
    private String mention;
    private String specialite;
    private String serie;
    private Date dateObtention;
    private Date dateDelivrance;
    @ManyToOne
    @JsonBackReference
    private Dossier dossier;
}
