package com.ena.entities;

import com.ena.deserializer.TelephoneDeserializer;
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
@JsonDeserialize(using = TelephoneDeserializer.class)
public class Telephone implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String mobile1;
    private String mobile2;
    private String mobile3;
    private String domicile;
    @ManyToOne
    @JsonBackReference
    private Eleve eleve;
}
