package com.ena.deserializer;

import com.ena.entities.Diplome;
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

public class DiplomeDeserializer extends StdDeserializer<Diplome> {
    protected DiplomeDeserializer(Class<?> vc) {
        super(vc);
    }

    public DiplomeDeserializer() {
        this(null);
    }

    @Override
    public Diplome deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        Diplome diplome = new Diplome();
        JsonNode node = p.getCodec().readTree(p);
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        if (node.has("id") && node.get("id").asText() != "") {
            Long id = node.get("id").isInt() ? (long) ((IntNode) node.get("id")).longValue() : (long) ((LongNode) node.get("id")).longValue();
            diplome.setId(id);
        }
        String numero = node.get("numero").asText();
        diplome.setNumero(numero);
        String type = node.get("type").asText();
        diplome.setType(type);
        String mention = node.get("mention").asText();
        diplome.setMention(mention);
        String specialite = node.get("specialite").asText();
        diplome.setSpecialite(specialite);
        String serie = node.get("serie").asText();
        diplome.setSerie(serie);
        Long dossier_id = node.get("dossier").isInt() ? (long) ((IntNode) node.get("dossier")).longValue() : (long) ((LongNode) node.get("dossier")).longValue();
        Dossier dossier = new Dossier();
        dossier.setId(dossier_id);
        diplome.setDossier(dossier);
        try {
            Date dateObtention = dateFormat.parse(node.get("dateObtention").asText());
            diplome.setDateObtention(dateObtention);
            Date dateDelivrance = dateFormat.parse(node.get("dateDelivrance").asText());
            diplome.setDateDelivrance(dateDelivrance);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return diplome;
    }
}
