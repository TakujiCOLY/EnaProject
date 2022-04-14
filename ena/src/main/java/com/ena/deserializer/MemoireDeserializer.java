package com.ena.deserializer;

import com.ena.entities.Dossier;
import com.ena.entities.Memoire;
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

public class MemoireDeserializer extends StdDeserializer<Memoire> {

    protected MemoireDeserializer(Class<?> vc) {
        super(vc);
    }

    public MemoireDeserializer() {
        this(null);
    }

    @Override
    public Memoire deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        Memoire memoire = new Memoire();
        JsonNode node = p.getCodec().readTree(p);
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        if (node.has("id") && node.get("id").asText() != "") {
            Long id = node.get("id").isInt() ? (long) ((IntNode) node.get("id")).longValue() : (long) ((LongNode) node.get("id")).longValue();
            memoire.setId(id);
        }
        Long dossier_id = node.get("dossier").isInt() ? (long) ((IntNode) node.get("dossier")).longValue() : (long) ((LongNode) node.get("dossier")).longValue();
        Dossier dossier = new Dossier();
        dossier.setId(dossier_id);
        memoire.setDossier(dossier);
        String sujet = node.get("sujet").asText();
        memoire.setSujet(sujet);
        String encadreur = node.get("encadreur").asText();
        memoire.setEncadreur(encadreur);
        Boolean soutenu = node.get("soutenu").asBoolean();
        memoire.setSoutenu(soutenu);
        String lieuStage = node.get("lieuStage").asText();
        memoire.setLieuStage(lieuStage);
        String emplacement = node.get("emplacement").asText();
        memoire.setEmplacement(emplacement);
        try {
            Date dateSoutenance = dateFormat.parse(node.get("dateSoutenance").asText());
            memoire.setDateSoutenance(dateSoutenance);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return memoire;
    }
}
