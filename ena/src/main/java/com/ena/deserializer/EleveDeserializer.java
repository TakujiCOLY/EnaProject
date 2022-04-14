package com.ena.deserializer;

import com.ena.entities.Eleve;
import com.ena.entities.Ville;
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

public class EleveDeserializer extends StdDeserializer<Eleve> {
    protected EleveDeserializer(Class<?> vc) {
        super(vc);
    }

    public EleveDeserializer() {
        this(null);
    }

    @Override
    public Eleve deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        Eleve eleve = new Eleve();
        JsonNode node = p.getCodec().readTree(p);
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        if (node.has("id") && node.get("id").asText() != "") {
            Long id = node.get("id").isInt() ? (long) ((IntNode) node.get("id")).longValue() : (long) ((LongNode) node.get("id")).longValue();
            eleve.setId(id);
        }
        String nom = node.get("nom").asText();
        eleve.setNom(nom);
        String prenom = node.get("prenom").asText();
        eleve.setPrenom(prenom);
        String sexe = node.get("sexe").asText();
        eleve.setSexe(sexe);
        String nci = node.get("nci").asText();
        eleve.setNci(nci);
        String typeEleve = node.get("typeEleve").asText();
        eleve.setTypeEleve(typeEleve);
        String lieuNaiss = node.get("lieuNaiss").asText();
        eleve.setLieuNaiss(lieuNaiss);
        String nationalite = node.get("nationalite").asText();
        eleve.setNationalite(nationalite);
        String matricule = node.get("matricule").asText();
        eleve.setMatricule(matricule);
        String numDosCandidat = node.get("numDosCandidat").asText();
        eleve.setNumDosCandidat(numDosCandidat);
        String emailPrive = node.get("emailPrive").asText();
        eleve.setEmailPrive(emailPrive);
        String emailPro = node.get("emailPro").asText();
        eleve.setEmailPro(emailPro);
        String prenomPere = node.get("prenomPere").asText();
        eleve.setPrenomPere(prenomPere);
        String nomPere = node.get("nomPere").asText();
        eleve.setNomPere(nomPere);
        String prenomMere = node.get("prenomMere").asText();
        eleve.setPrenomMere(prenomMere);
        String nomMere = node.get("nomMere").asText();
        eleve.setNomMere(nomMere);
        int ville_id = node.get("ville").intValue();
        Ville ville = new Ville();
        ville.setId(ville_id);
        eleve.setVille(ville);
        try {
            Date dateNaiss = dateFormat.parse(node.get("dateNaiss").asText());
            eleve.setDateNaiss(dateNaiss);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return eleve;
    }
}
