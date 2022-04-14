package com.ena.entities;

import com.ena.deserializer.MemoireDeserializer;
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
@JsonDeserialize(using = MemoireDeserializer.class)
public class Memoire implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String sujet;
    private String encadreur;
    private Boolean soutenu;
    private Date dateSoutenance;
    private String lieuStage;
    private String emplacement;
    @ManyToOne
    @JsonBackReference
    private Dossier dossier;
}
