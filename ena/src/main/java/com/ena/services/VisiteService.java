package com.ena.services;

import com.ena.entities.Visite;
import com.ena.repositories.VisiteRepository;
import org.springframework.stereotype.Service;

@Service
public class VisiteService {
    private final VisiteRepository visiteRepository;

    public VisiteService(VisiteRepository visiteRepository) {
        this.visiteRepository = visiteRepository;
    }

    public Visite add(Visite visite) {
        return this.visiteRepository.save(visite);
    }

    public Visite update(Visite visite) {
        return this.visiteRepository.save(visite);
    }

    public void delete(Long id) {
        this.visiteRepository.deleteById(id);
    }
}
