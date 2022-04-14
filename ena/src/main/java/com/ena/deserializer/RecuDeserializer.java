package com.ena.deserializer;

import com.ena.entities.Dossier;
import com.ena.entities.Recu;
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

public class RecuDeserializer extends StdDeserializer<Recu> {
    protected RecuDeserializer(Class<?> vc) {
        super(vc);
    }

    public RecuDeserializer() {
        this(null);
    }

    @Override
    public Recu deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        Recu recu = new Recu();
        JsonNode node = p.getCodec().readTree(p);
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        if (node.has("id") && node.get("id").asText() != "") {
            Long id = node.get("id").isInt() ? (long) ((IntNode) node.get("id")).longValue() : (long) ((LongNode) node.get("id")).longValue();
            recu.setId(id);
        }
        Long dossier_id = node.get("dossier").isInt() ? (long) ((IntNode) node.get("dossier")).longValue() : (long) ((LongNode) node.get("dossier")).longValue();
        Dossier dossier = new Dossier();
        dossier.setId(dossier_id);
        recu.setDossier(dossier);
        String numero = node.get("numero").asText();
        recu.setNumero(numero);
        int montant = node.get("montant").intValue();
        recu.setMontant(montant);
        String annee = node.get("annee").asText();
        recu.setAnnee(annee);
        try {
            Date date = dateFormat.parse(node.get("date").asText());
            recu.setDate(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return recu;
    }
}
