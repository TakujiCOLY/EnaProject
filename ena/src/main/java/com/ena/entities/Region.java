package com.ena.entities;

import com.ena.deserializer.RegionDeserializer;
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
@AllArgsConstructor
@NoArgsConstructor
@ToString
@JsonDeserialize(using = RegionDeserializer.class)
public class Region implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nom;
    private Boolean active;
    @ManyToOne
    private Pays pays;
    @OneToMany(mappedBy = "region")
    @JsonBackReference
    private List<Ville> villes;
}
