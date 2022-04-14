package com.ena.deserializer;

import com.ena.entities.Eleve;
import com.ena.entities.ElevePromotion;
import com.ena.entities.ElevePromotionId;
import com.ena.entities.Promotion;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.fasterxml.jackson.databind.node.IntNode;
import com.fasterxml.jackson.databind.node.LongNode;

import java.io.IOException;

public class ElevePromotionDeserializer extends StdDeserializer<ElevePromotion> {
    protected ElevePromotionDeserializer(Class<?> vc) {
        super(vc);
    }

    public ElevePromotionDeserializer() {
        this(null);
    }

    @Override
    public ElevePromotion deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        ElevePromotion elevePromotion = new ElevePromotion();
        JsonNode node = p.getCodec().readTree(p);
        Long eleve_id = node.get("eleve").isInt() ? (long) ((IntNode) node.get("eleve")).longValue() : (long) ((LongNode) node.get("eleve")).longValue();
        Eleve eleve = new Eleve();
        eleve.setId(eleve_id);
        elevePromotion.setEleve(eleve);
        int promotion_id = node.get("promotion").intValue();
        Promotion promotion = new Promotion();
        promotion.setId(promotion_id);
        elevePromotion.setPromotion(promotion);
        ElevePromotionId elevePromotionId = new ElevePromotionId(eleve_id, promotion_id);
        elevePromotion.setElevePromotionId(elevePromotionId);
        return elevePromotion;
    }
}
