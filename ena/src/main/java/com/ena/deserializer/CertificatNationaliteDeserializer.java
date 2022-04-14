package com.ena.deserializer;

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

public class CertificatNationaliteDeserializer extends StdDeserializer<CertificatNationalite> {
    protected CertificatNationaliteDeserializer(Class<?> vc) {
        super(vc);
    }

    public CertificatNationaliteDeserializer() {
        this(null);
    }

    @Override
    public CertificatNationalite deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        CertificatNationalite nationalite = new CertificatNationalite();
        JsonNode node = p.getCodec().readTree(p);
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        if (node.has("id") && node.get("id").asText() != "") {
            Long id = node.get("id").isInt() ? (long) ((IntNode) node.get("id")).longValue() : (long) ((LongNode) node.get("id")).longValue();
            nationalite.setId(id);
        }
        String numero = node.get("numero").asText();
        nationalite.setNumero(numero);
        String courAppel = node.get("courAppel").asText();
        nationalite.setCourAppel(courAppel);
        String presidentInstance = node.get("presidentInstance").asText();
        nationalite.setPresidentInstance(presidentInstance);
        String tribunalInstance = node.get("tribunalInstance").asText();
        nationalite.setTribunalInstance(tribunalInstance);
        Long dossier_id = node.get("dossier").isInt() ? (long) ((IntNode) node.get("dossier")).longValue() : (long) ((LongNode) node.get("dossier")).longValue();
        Dossier dossier = new Dossier();
        dossier.setId(dossier_id);
        nationalite.setDossier(dossier);
        try {
            Date date = (dateFormat).parse(node.get("date").asText());
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return nationalite;
    }
}
