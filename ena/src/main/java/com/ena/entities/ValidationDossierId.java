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
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ValidationDossierId implements Serializable {

    @Column(name = "dossier_id")
    private Long dossierId;

    @Column(name = "etat_validation_id")
    private int etatValidationId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ValidationDossierId that = (ValidationDossierId) o;
        return etatValidationId == that.etatValidationId && Objects.equals(dossierId, that.dossierId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(dossierId, etatValidationId);
    }
}
