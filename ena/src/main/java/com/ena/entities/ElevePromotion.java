package com.ena.entities;

import com.ena.deserializer.ElevePromotionDeserializer;
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
@JsonDeserialize(using = ElevePromotionDeserializer.class)
public class ElevePromotion implements Serializable {
    @EmbeddedId
    private ElevePromotionId elevePromotionId;
    @ManyToOne
    @MapsId("eleveId")
    @JsonBackReference
    private Eleve eleve;
    @ManyToOne
    @MapsId("promotionId")
    private Promotion promotion;
}
