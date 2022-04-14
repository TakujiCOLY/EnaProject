package com.ena.deserializer;

import com.ena.entities.Eleve;
import com.ena.entities.Urgence;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.fasterxml.jackson.databind.node.IntNode;
import com.fasterxml.jackson.databind.node.LongNode;

import java.io.IOException;

public class UrgenceDeserializer extends StdDeserializer<Urgence> {
    protected UrgenceDeserializer(Class<?> vc) {
        super(vc);
    }

    public UrgenceDeserializer() {
        this(null);
    }

    @Override
    public Urgence deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        Urgence urgence = new Urgence();
        JsonNode node = p.getCodec().readTree(p);
        if (node.has("id") && node.get("id").asText() != "") {
            Long id = node.get("id").isInt() ? (long) ((IntNode) node.get("id")).longValue() : (long) ((LongNode) node.get("id")).longValue();
            urgence.setId(id);
        }
        String nom = node.get("nom").asText();
        urgence.setNom(nom);
        String prenom = node.get("prenom").asText();
        urgence.setPrenom(prenom);
        String adresse = node.get("adresse").asText();
        urgence.setAdresse(adresse);
        String telephone = node.get("telephone").asText();
        urgence.setTelephone(telephone);
        Long eleve_id = node.get("eleve").isInt() ? (long) ((IntNode) node.get("eleve")).longValue() : (long) ((LongNode) node.get("eleve")).longValue();
        Eleve eleve = new Eleve();
        eleve.setId(eleve_id);
        urgence.setEleve(eleve);
        return urgence;
    }
}
