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
public class ElevePromotionId implements Serializable {

    @Column(name = "eleve_id")
    private long eleveId;

    @Column(name = "promotion_id")
    private int promotionId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ElevePromotionId that = (ElevePromotionId) o;
        return eleveId == that.eleveId && promotionId == that.promotionId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(eleveId, promotionId);
    }
}
