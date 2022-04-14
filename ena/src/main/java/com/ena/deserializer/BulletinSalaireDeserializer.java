package com.ena.deserializer;

import com.ena.entities.*;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.fasterxml.jackson.databind.node.IntNode;
import com.fasterxml.jackson.databind.node.LongNode;

import java.io.IOException;

public class BulletinSalaireDeserializer extends StdDeserializer<BulletinSalaire> {
    protected BulletinSalaireDeserializer(Class<?> vc) {
        super(vc);
    }

    public BulletinSalaireDeserializer() {
        this(null);
    }

    @Override
    public BulletinSalaire deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        BulletinSalaire salaire = new BulletinSalaire();
        JsonNode node = p.getCodec().readTree(p);
        if (node.has("id") && node.get("id").asText() != "") {
            Long id = node.get("id").isInt() ? (long) ((IntNode) node.get("id")).longValue() : (long) ((LongNode) node.get("id")).longValue();
            salaire.setId(id);
        }
        String matricule = node.get("matricule").asText();
        salaire.setMatricule(matricule);
        String emploi = node.get("emploi").asText();
        salaire.setEmploi(emploi);
        Long dossier_id = node.get("dossier").isInt() ? (long) ((IntNode) node.get("dossier")).longValue() : (long) ((LongNode) node.get("dossier")).longValue();
        Dossier dossier = new Dossier();
        dossier.setId(dossier_id);
        salaire.setDossier(dossier);
        int classeGrade_id = node.get("classeGrade").intValue();
        ClasseGrade grade = new ClasseGrade();
        grade.setId(classeGrade_id);
        salaire.setClasseGrade(grade);
        int echelon_id = node.get("echelon").intValue();
        Echelon echelon = new Echelon();
        echelon.setId(echelon_id);
        salaire.setEchelon(echelon);
        int statut_id = node.get("statut").intValue();
        Statut statut = new Statut();
        statut.setId(statut_id);
        salaire.setStatut(statut);
        int corps_id = node.get("corps").intValue();
        Corps corps = new Corps();
        corps.setId(corps_id);
        salaire.setCorps(corps);
        return salaire;
    }
}
