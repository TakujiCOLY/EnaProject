package com.ena.deserializer;

import com.ena.entities.Region;
import com.ena.entities.Ville;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

import java.io.IOException;

public class VilleDeserializer extends StdDeserializer<Ville> {
    protected VilleDeserializer(Class<?> vc) {
        super(vc);
    }

    public VilleDeserializer() {
        this(null);
    }

    @Override
    public Ville deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        Ville ville = new Ville();
        JsonNode node = p.getCodec().readTree(p);
        if (node.has("id") && node.get("id").asText() != "") {
            int id = node.get("id").intValue();
            ville.setId(id);
        }
        String nom = node.get("nom").asText();
        ville.setNom(nom);
        Boolean active = node.get("active").asBoolean();
        ville.setActive(active);
        int region_id = node.get("region").intValue();
        Region region = new Region();
        region.setId(region_id);
        ville.setRegion(region);
        return ville;
    }
}
