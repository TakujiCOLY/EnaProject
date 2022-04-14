package com.ena.entities;

import com.ena.deserializer.EngagementDeserializer;
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
@JsonDeserialize(using = EngagementDeserializer.class)
public class Engagement implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String numero;
    private String legislation;
    private int dureeEngagement;
    private Date dateLegislation;
    private Date date;
    @ManyToOne
    @JsonBackReference
    private Dossier dossier;
}
