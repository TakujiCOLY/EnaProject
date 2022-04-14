package com.ena.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class EleveSectionId implements Serializable {

    @Column(name = "eleve_id")
    private long eleveId;

    @Column(name = "section_id")
    private int sectionId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EleveSectionId that = (EleveSectionId) o;
        return eleveId == that.eleveId && sectionId == that.sectionId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(eleveId, sectionId);
    }
}
