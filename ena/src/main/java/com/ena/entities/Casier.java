package com.ena.entities;

import com.ena.deserializer.CasierDeserializer;
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
@JsonDeserialize(using = CasierDeserializer.class)
public class Casier implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String numero;
    private String courAppel;
    private String tribunalInstance;
    private String presidentInstance;
    private Date date;
    @ManyToOne
    @JsonBackReference
    private Dossier dossier;
}
