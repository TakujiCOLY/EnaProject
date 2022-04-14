package com.ena.services;

import com.ena.entities.VoieAcces;
import com.ena.repositories.VoieAccesRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VoieAccesService {
    private final VoieAccesRepository voieAccesRepository;

    public VoieAccesService(VoieAccesRepository voieAccesRepository) {
        this.voieAccesRepository = voieAccesRepository;
    }

    public VoieAcces add(VoieAcces acces) {
        return this.voieAccesRepository.save(acces);
    }

    public VoieAcces update(VoieAcces acces) {
        return this.voieAccesRepository.save(acces);
    }

    public void delete(Integer id) {
        this.voieAccesRepository.deleteById(id);
    }

    public List<VoieAcces> findAll() {
        return this.voieAccesRepository.findAll();
    }
}
