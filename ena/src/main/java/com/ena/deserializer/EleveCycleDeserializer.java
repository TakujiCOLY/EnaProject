package com.ena.deserializer;

import com.ena.entities.Cycle;
import com.ena.entities.Eleve;
import com.ena.entities.EleveCycle;
import com.ena.entities.EleveCycleId;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.fasterxml.jackson.databind.node.IntNode;
import com.fasterxml.jackson.databind.node.LongNode;

import java.io.IOException;

public class EleveCycleDeserializer extends StdDeserializer<EleveCycle> {
    protected EleveCycleDeserializer(Class<?> vc) {
        super(vc);
    }

    public EleveCycleDeserializer() {
        this(null);
    }

    @Override
    public EleveCycle deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        EleveCycle eleve = new EleveCycle();
        JsonNode node = p.getCodec().readTree(p);
        Long eleve_id = node.get("eleve").isInt() ? (long) ((IntNode) node.get("eleve")).longValue() : (long) ((LongNode) node.get("eleve")).longValue();
        Eleve eleve1 = new Eleve();
        eleve1.setId(eleve_id);
        eleve.setEleve(eleve1);
        int cycle_id = node.get("cycle").intValue();
        Cycle cycle = new Cycle();
        cycle.setId(cycle_id);
        eleve.setCycle(cycle);
        EleveCycleId eleveCycleId = new EleveCycleId(eleve_id, cycle_id);
        eleve.setEleveCycleId(eleveCycleId);
        return eleve;
    }
}
