package com.ena.services;

import com.ena.entities.Ville;
import com.ena.repositories.VilleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VilleService {
    private final VilleRepository repository;

    public VilleService(VilleRepository villeRepository) {
        this.repository = villeRepository;
    }

    public Ville add(Ville ville) {
        return this.repository.save(ville);
    }

    public Ville update(Ville ville) {
        return this.repository.save(ville);
    }

    public void delete(Integer id) {
        this.repository.deleteById(id);
    }

    public List<Ville> findAll() {
        return this.repository.findAll();
    }

    public List<Ville> findByRegionId(int id) {
        return repository.findByRegionId(id);
    }
}
