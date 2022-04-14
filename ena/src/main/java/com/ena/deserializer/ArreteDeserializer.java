package com.ena.deserializer;

import com.ena.entities.Arrete;
import com.ena.entities.CertificatNationalite;
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

public class ArreteDeserializer extends StdDeserializer<Arrete> {
    protected ArreteDeserializer(Class<?> vc) {
        super(vc);
    }

    public ArreteDeserializer() {
        this(null);
    }

    @Override
    public Arrete deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        Arrete arrete = new Arrete();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        JsonNode node = p.getCodec().readTree(p);
        if (node.has("id") && node.get("id").asText() != "") {
            Long id = node.get("id").isInt() ? (long) ((IntNode) node.get("id")).longValue() : (long) ((LongNode) node.get("id")).longValue();
            arrete.setId(id);
        }
        String numero = node.get("numero").asText();
        arrete.setNumero(numero);
        String decret = node.get("decret").asText();
        Long dossier_id = node.get("dossier").isInt() ? (long) ((IntNode) node.get("dossier")).longValue() : (long) ((LongNode) node.get("dossier")).longValue();
        Dossier dossier = new Dossier();
        dossier.setId(dossier_id);
        arrete.setDossier(dossier);
        try {
            Date dateArrete = dateFormat.parse(node.get("dateArrete").asText());
            arrete.setDateArrete(dateArrete);
            Date dateDecret = dateFormat.parse(node.get("dateDecret").asText());
            arrete.setDateDecret(dateDecret);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return arrete;
    }

}
