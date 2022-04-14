package com.ena.deserializer;

import com.ena.entities.Eleve;
import com.ena.entities.Telephone;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.fasterxml.jackson.databind.node.IntNode;
import com.fasterxml.jackson.databind.node.LongNode;

import java.io.IOException;

public class TelephoneDeserializer extends StdDeserializer<Telephone> {
    protected TelephoneDeserializer(Class<?> vc) {
        super(vc);
    }

    public TelephoneDeserializer() {
        this(null);
    }

    @Override
    public Telephone deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        Telephone telephone = new Telephone();
        JsonNode node = p.getCodec().readTree(p);
        if (node.has("id") && node.get("id").asText() != "") {
            Long id = node.get("id").isInt() ? (long) ((IntNode) node.get("id")).longValue() : (long) ((LongNode) node.get("id")).longValue();
            telephone.setId(id);
        }
        Long eleve_id = node.get("eleve").isInt() ? (long) ((IntNode) node.get("eleve")).longValue() : (long) ((LongNode) node.get("eleve")).longValue();
        Eleve eleve = new Eleve();
        eleve.setId(eleve_id);
        telephone.setEleve(eleve);
        String mobile1 = node.get("mobile1").asText();
        telephone.setMobile1(mobile1);
        String mobile2 = node.get("mobile2").asText();
        telephone.setMobile2(mobile2);
        String mobile3 = node.get("mobile3").asText();
        telephone.setMobile3(mobile3);
        String domicile = node.get("domicile").asText();
        telephone.setDomicile(domicile);
        return telephone;
    }
}
