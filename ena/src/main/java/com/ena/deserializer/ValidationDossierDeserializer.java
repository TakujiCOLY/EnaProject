package com.ena.deserializer;

import com.ena.entities.Dossier;
import com.ena.entities.EtatValidation;
import com.ena.entities.ValidationDossier;
import com.ena.entities.ValidationDossierId;
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

public class ValidationDossierDeserializer extends StdDeserializer<ValidationDossier> {
    protected ValidationDossierDeserializer(Class<?> vc) {
        super(vc);
    }

    public ValidationDossierDeserializer() {
        this(null);
    }

    @Override
    public ValidationDossier deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        ValidationDossier dossier = new ValidationDossier();
        JsonNode node = p.getCodec().readTree(p);
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String nom = node.get("nom").asText();
        dossier.setNom(nom);
        String prenom = node.get("prenom").asText();
        dossier.setPrenom(prenom);
        String fonction = node.get("fonction").asText();
        dossier.setFonction(fonction);
        int etatValidation_id = node.get("etatValidation").intValue();
        EtatValidation etatValidation = new EtatValidation();
        etatValidation.setId(etatValidation_id);
        dossier.setEtatValidation(etatValidation);
        Long dossier_id = node.get("dossier").isInt() ? (long) ((IntNode) node.get("dossier")).longValue() : (long) ((LongNode) node.get("dossier")).longValue();
        Dossier dossierR = new Dossier();
        dossierR.setId(dossier_id);
        dossier.setDossier(dossierR);
        try {
            Date date = dateFormat.parse(node.get("dateValidation").asText());
            dossier.setDateValidation(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        ValidationDossierId validationDossierId = new ValidationDossierId(dossier_id, etatValidation_id);
        dossier.setValidationDossierId(validationDossierId);
        return dossier;
    }
}
