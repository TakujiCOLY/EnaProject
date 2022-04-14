package com.ena.services;

import com.ena.entities.Corps;
import com.ena.repositories.CorpsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CorpsService {
    private final CorpsRepository repository;

    public CorpsService(CorpsRepository corpsRepository) {
        this.repository = corpsRepository;
    }

    public Corps add(Corps corps) {
        return this.repository.save(corps);
    }

    public Corps update(Corps corps) {
        return this.repository.save(corps);
    }

    public void delete(Integer id) {
        this.repository.deleteById(id);
    }

    public List<Corps> findAll() {
        return this.repository.findAll();
    }
}
