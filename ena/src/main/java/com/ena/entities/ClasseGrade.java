package com.ena.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
public class ClasseGrade implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nom;
    private Boolean active;
    @OneToMany(mappedBy = "classeGrade")
    @JsonBackReference(value = "classeGrade-bulletinSalaire")
    private List<BulletinSalaire> bulletinSalaires;
    @OneToMany(mappedBy = "classeGrade")
    @JsonBackReference(value = "classeGrade-certificatAdministratif")
    private List<CertificatAdministratif> certificatAdministratifs;
}
