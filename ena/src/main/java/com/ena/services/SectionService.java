package com.ena.services;

import com.ena.entities.Section;
import com.ena.repositories.SectionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SectionService {
    private final SectionRepository repository;

    public SectionService(SectionRepository sectionRepository) {
        this.repository = sectionRepository;
    }

    public Section add(Section section) {
        return repository.save(section);
    }

    public Section update(Section section) {
        return repository.save(section);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    public List<Section> findAll() {
        return repository.findAll();
    }
}
