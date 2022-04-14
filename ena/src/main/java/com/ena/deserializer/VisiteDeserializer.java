package com.ena.deserializer;

import com.ena.entities.Dossier;
import com.ena.entities.Visite;
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

public class VisiteDeserializer extends StdDeserializer<Visite> {
    protected VisiteDeserializer(Class<?> vc) {
        super(vc);
    }

    public VisiteDeserializer() {
        this(null);
    }

    @Override
    public Visite deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        Visite visite = new Visite();
        JsonNode node = p.getCodec().readTree(p);
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        if (node.has("id") && node.get("id").asText() != "") {
            Long id = node.get("id").isInt() ? (long) ((IntNode) node.get("id")).longValue() : (long) ((LongNode) node.get("id")).longValue();
            visite.setId(id);
        }
        String medecin = node.get("medecin").asText();
        visite.setMedecin(medecin);
        String examensCliniques = node.get("examensCliniques").asText();
        visite.setExamensCliniques(examensCliniques);
        String resultats = node.get("resultats").asText();
        visite.setResultats(resultats);
        String lieu = node.get("lieu").asText();
        visite.setLieu(lieu);
        String medecinContreVisite = node.get("medecinContreVisite").asText();
        visite.setMedecinContreVisite(medecinContreVisite);
        String resultatContreVisite = node.get("resultatContreVisite").asText();
        visite.setResultatsContreVisite(medecinContreVisite);
        Long dossier_id = node.get("dossier").isInt() ? (long) ((IntNode) node.get("dossier")).longValue() : (long) ((LongNode) node.get("dossier")).longValue();
        Dossier dossier = new Dossier();
        dossier.setId(dossier_id);
        visite.setDossier(dossier);
        try {
            Date date = dateFormat.parse(node.get("date").asText());
            visite.setDate(date);
            Date dateContreVisite = dateFormat.parse(node.get("dateContreVisite").asText());
            visite.setDateContreVisite(dateContreVisite);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return visite;
    }
}
