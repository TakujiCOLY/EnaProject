package com.ena.deserializer;

import com.ena.entities.CertificatAdministratif;
import com.ena.entities.ClasseGrade;
import com.ena.entities.Dossier;
import com.ena.entities.Hierarchie;
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

public class CertificatAdministratifDeserializer extends StdDeserializer<CertificatAdministratif> {
    protected CertificatAdministratifDeserializer(Class<?> vc) {
        super(vc);
    }

    public CertificatAdministratifDeserializer() {
        this(null);
    }

    @Override
    public CertificatAdministratif deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        CertificatAdministratif certificat = new CertificatAdministratif();
        JsonNode node = p.getCodec().readTree(p);
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        if (node.has("id") && node.get("id").asText() != "") {
            Long id = node.get("id").isInt() ? (long) ((IntNode) node.get("id")).longValue() : (long) ((LongNode) node.get("id")).longValue();
            certificat.setId(id);
        }
        String numero = node.get("numero").asText();
        certificat.setNumero(numero);
        String lieu = node.get("lieu").asText();
        certificat.setLieu(lieu);
        String ancienneteEmploi = node.get("ancienneteEmploi").asText();
        certificat.setAncienneteEmploi(ancienneteEmploi);
        String ancienneteCorps = node.get("ancienneteCorps").asText();
        certificat.setAncienneteCorps(ancienneteCorps);
        Long dossier_id = node.get("dossier").isInt() ? (long) ((IntNode) node.get("dossier")).longValue() : (long) ((LongNode) node.get("dossier")).longValue();
        Dossier dossier = new Dossier();
        dossier.setId(dossier_id);
        certificat.setDossier(dossier);
        int hierarchie_id = node.get("hierarchie").intValue();
        Hierarchie hierarchie = new Hierarchie();
        hierarchie.setId(hierarchie_id);
        certificat.setHierarchie(hierarchie);
        int classe_id = node.get("classeGrade").intValue();
        ClasseGrade grade = new ClasseGrade();
        grade.setId(classe_id);
        certificat.setClasseGrade(grade);
        try {
            Date date = dateFormat.parse(node.get("date").asText());
            certificat.setDate(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return certificat;
    }
}
