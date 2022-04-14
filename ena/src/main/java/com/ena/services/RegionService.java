package com.ena.services;

import com.ena.entities.Region;
import com.ena.repositories.RegionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegionService {
    private final RegionRepository repository;

    public RegionService(RegionRepository regionRepository) {
        this.repository = regionRepository;
    }

    public Region add(Region region) {
        return repository.save(region);
    }

    public Region update(Region region) {
        return repository.save(region);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    public List<Region> findAll() {
        return this.repository.findAll();
    }

    public List<Region> findByPaysId(int id) {
        return repository.findByPaysId(id);
    }
}
