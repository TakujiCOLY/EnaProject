package com.ena.deserializer;

import com.ena.entities.Pays;
import com.ena.entities.Region;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.fasterxml.jackson.databind.node.IntNode;
import com.fasterxml.jackson.databind.node.LongNode;

import java.io.IOException;

public class RegionDeserializer extends StdDeserializer<Region> {
    protected RegionDeserializer(Class<?> vc) {
        super(vc);
    }

    public RegionDeserializer() {
        this(null);
    }

    @Override
    public Region deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        Region region = new Region();
        JsonNode node = p.getCodec().readTree(p);
        if (node.has("id") && node.get("id").asText() != "") {
            int id = node.get("id").intValue();
            region.setId(id);
        }
        String nom = node.get("nom").asText();
        region.setNom(nom);
        Boolean active = node.get("active").asBoolean();
        region.setActive(active);
        int pays_id = node.get("pays").intValue();
        Pays pays = new Pays();
        pays.setId(pays_id);
        region.setPays(pays);
        return region;
    }
}
