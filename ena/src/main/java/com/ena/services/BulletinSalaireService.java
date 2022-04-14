package com.ena.services;

import com.ena.entities.BulletinSalaire;
import com.ena.repositories.BulletinSalaireRepository;
import org.springframework.stereotype.Service;

@Service
public class BulletinSalaireService {
    private final BulletinSalaireRepository repository;

    public BulletinSalaireService(BulletinSalaireRepository repository) {
        this.repository = repository;
    }

    public BulletinSalaire add(BulletinSalaire bulletinSalaire) {
        return this.repository.save(bulletinSalaire);
    }

    public BulletinSalaire update(BulletinSalaire bulletinSalaire) {
        return this.repository.save(bulletinSalaire);
    }
}
