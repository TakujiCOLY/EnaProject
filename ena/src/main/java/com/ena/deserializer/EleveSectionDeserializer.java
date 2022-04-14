package com.ena.deserializer;

import com.ena.entities.Eleve;
import com.ena.entities.EleveSection;
import com.ena.entities.EleveSectionId;
import com.ena.entities.Section;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.fasterxml.jackson.databind.node.IntNode;
import com.fasterxml.jackson.databind.node.LongNode;

import java.io.IOException;

public class EleveSectionDeserializer extends StdDeserializer<EleveSection> {
    protected EleveSectionDeserializer(Class<?> vc) {
        super(vc);
    }

    public EleveSectionDeserializer() {
        this(null);
    }

    @Override
    public EleveSection deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        EleveSection eleveSection = new EleveSection();
        JsonNode node = p.getCodec().readTree(p);
        Long eleve_id = node.get("eleve").isInt() ? (long) ((IntNode) node.get("eleve")).longValue() : (long) ((LongNode) node.get("eleve")).longValue();
        Eleve eleve = new Eleve();
        eleve.setId(eleve_id);
        eleveSection.setEleve(eleve);
        int section_id = node.get("section").intValue();
        Section section = new Section();
        section.setId(section_id);
        eleveSection.setSection(section);
        EleveSectionId eleveSectionId = new EleveSectionId(eleve_id, section_id);
        eleveSection.setEleveSectionId(eleveSectionId);
        return eleveSection;
    }
}
