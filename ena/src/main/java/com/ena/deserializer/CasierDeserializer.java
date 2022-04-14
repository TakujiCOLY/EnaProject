package com.ena.deserializer;

import com.ena.entities.Casier;
import com.ena.entities.Dossier;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.fasterxml.jackson.databind.node.IntNode;
import com.fasterxml.jackson.databind.node.LongNode;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CasierDeserializer extends StdDeserializer<Casier> {
    protected CasierDeserializer(Class<?> vc) {
        super(vc);
    }

    public CasierDeserializer() {
        this(null);
    }

    @Override
    public Casier deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        Casier casier = new Casier();
        JsonNode node = p.getCodec().readTree(p);
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        if (node.has("id") && node.get("id").asText() != "") {
            Long id = node.get("id").isInt() ? (long) ((IntNode) node.get("id")).longValue() : (long) ((LongNode) node.get("id")).longValue();
            casier.setId(id);
        }
        String numero = node.get("numero").asText();
        casier.setNumero(numero);
        String courAppel = node.get("courAppel").asText();
        casier.setCourAppel(courAppel);
        String tribunal = node.get("tribunalInstance").asText();
        casier.setTribunalInstance(tribunal);
        String president = node.get("presidentInstance").asText();
        casier.setPresidentInstance(president);
        Long dossier_id = node.get("dossier").isInt() ? (long) ((IntNode) node.get("dossier")).longValue() : (long) ((LongNode) node.get("dossier")).longValue();
        Dossier dossier = new Dossier();
        dossier.setId(dossier_id);
        casier.setDossier(dossier);
        try {
            Date date = dateFormat.parse(node.get("date").asText());
            casier.setDate(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return casier;
    }
}
