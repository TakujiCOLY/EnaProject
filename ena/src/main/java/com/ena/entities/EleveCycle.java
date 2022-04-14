package com.ena.entities;

import com.ena.deserializer.EleveCycleDeserializer;
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
@NoArgsConstructor
@AllArgsConstructor
@ToString
@JsonDeserialize(using = EleveCycleDeserializer.class)
public class EleveCycle implements Serializable {
    @EmbeddedId
    private EleveCycleId eleveCycleId;
    @ManyToOne
    @MapsId("eleveId")
    @JsonBackReference
    private Eleve eleve;
    @ManyToOne
    @MapsId("cycleId")
    private Cycle cycle;
}
