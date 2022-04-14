package com.ena.deserializer;

import com.ena.entities.Dossier;
import com.ena.entities.Eleve;
import com.ena.entities.Engagement;
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

public class EngagementDeserializer extends StdDeserializer<Engagement> {
    protected EngagementDeserializer(Class<?> vc) {
        super(vc);
    }

    public EngagementDeserializer() {
        this(null);
    }

    @Override
    public Engagement deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        Engagement engagement = new Engagement();
        JsonNode node = p.getCodec().readTree(p);
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        if (node.has("id") && node.get("id").asText() != "") {
            Long id = node.get("id").isInt() ? (long) ((IntNode) node.get("id")).longValue() : (long) ((LongNode) node.get("id")).longValue();
            engagement.setId(id);
        }
        Long dossier_id = node.get("dossier").isInt() ? (long) ((IntNode) node.get("dossier")).longValue() : (long) ((LongNode) node.get("dossier")).longValue();
        Dossier dossier = new Dossier();
        dossier.setId(dossier_id);
        engagement.setDossier(dossier);
        String numero = node.get("numero").asText();
        engagement.setNumero(numero);
        String legislation = node.get("legislation").asText();
        engagement.setLegislation(legislation);
        int dureeLegislation = node.get("dureeLegislation").intValue();
        engagement.setDureeEngagement(dureeLegislation);
        try {
            Date dateLegislation = dateFormat.parse(node.get("dateLegislation").asText());
            engagement.setDateLegislation(dateLegislation);
            Date date = dateFormat.parse(node.get("date").asText());
            engagement.setDate(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return engagement;
    }
}
