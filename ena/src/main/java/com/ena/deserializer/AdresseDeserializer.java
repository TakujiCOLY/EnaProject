package com.ena.deserializer;

import com.ena.entities.Adresse;
import com.ena.entities.Eleve;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.fasterxml.jackson.databind.node.IntNode;
import com.fasterxml.jackson.databind.node.LongNode;

import java.io.IOException;

public class AdresseDeserializer extends StdDeserializer<Adresse> {
    protected AdresseDeserializer(Class<?> vc) {
        super(vc);
    }

    public AdresseDeserializer() {
        this(null);
    }

    @Override
    public Adresse deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        Adresse adresse = new Adresse();
        JsonNode node = p.getCodec().readTree(p);
        if (node.has("id") && node.get("id").asText() != "") {
            Long id = node.get("id").isInt() ? (long) ((IntNode) node.get("id")).longValue() : (long) ((LongNode) node.get("id")).longValue();
            adresse.setId(id);
        }
        String dakar = node.get("dakar").asText();
        adresse.setDakar(dakar);
        String horsDakar = node.get("horsDakar").asText();
        adresse.setHorsDakar(horsDakar);
        Long eleve_id = node.get("eleve").isInt() ? (long) ((IntNode) node.get("eleve")).longValue() : (long) ((LongNode) node.get("eleve")).longValue();
        Eleve eleve = new Eleve();
        eleve.setId(eleve_id);
        adresse.setEleve(eleve);
        return adresse;
    }
}
