package com.ena.entities;

import com.ena.deserializer.EleveSectionDeserializer;
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
@ToString
@JsonDeserialize(using = EleveSectionDeserializer.class)
public class EleveSection implements Serializable {
    @EmbeddedId
    private EleveSectionId eleveSectionId;
    @ManyToOne
    @MapsId("eleveId")
    @JsonBackReference
    private Eleve eleve;
    @ManyToOne
    @MapsId("sectionId")
    private Section section;
}
