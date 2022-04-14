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
public class EleveCycleId implements Serializable {

    @Column(name = "eleve_id")
    private long eleveId;

    @Column(name = "cycle_id")
    private int cycleId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EleveCycleId that = (EleveCycleId) o;
        return eleveId == that.eleveId && cycleId == that.cycleId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(eleveId, cycleId);
    }
}
