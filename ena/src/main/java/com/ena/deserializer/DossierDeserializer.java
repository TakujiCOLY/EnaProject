package com.ena.deserializer;

import com.ena.entities.Dossier;
import com.ena.entities.Eleve;
import com.ena.entities.VoieAcces;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.fasterxml.jackson.databind.node.IntNode;
import com.fasterxml.jackson.databind.node.LongNode;

import java.io.IOException;

public class DossierDeserializer extends StdDeserializer<Dossier> {
    protected DossierDeserializer(Class<?> vc) {
        super(vc);
    }

    public DossierDeserializer() {
        this(null);
    }

    @Override
    public Dossier deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        Dossier dossier = new Dossier();
        JsonNode node = p.getCodec().readTree(p);
        if (node.has("id") && node.get("id").asText() != "") {
            Long id = node.get("id").isInt() ? (long) ((IntNode) node.get("id")).longValue() : (long) ((LongNode) node.get("id")).longValue();
            dossier.setId(id);
        }
        Long eleve_id = node.get("eleve").isInt() ? (long) ((IntNode) node.get("eleve")).longValue() : (long) ((LongNode) node.get("eleve")).longValue();
        Eleve eleve = new Eleve();
        eleve.setId(eleve_id);
        dossier.setEleve(eleve);
        int access_id = node.get("voieAcces").intValue();
        VoieAcces voieAcces = new VoieAcces();
        voieAcces.setId(access_id);
        dossier.setVoieAcces(voieAcces);
        return dossier;
    }
}
