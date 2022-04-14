package com.ena.services;

import com.ena.entities.Memoire;
import com.ena.repositories.MemoireRepository;
import org.springframework.stereotype.Service;

@Service
public class MemoireService {
    private final MemoireRepository repository;

    public MemoireService(MemoireRepository memoireRepository) {
        this.repository = memoireRepository;
    }

    public Memoire add(Memoire memoire) {
        return this.repository.save(memoire);
    }

    public Memoire update(Memoire memoire) {
        return this.repository.save(memoire);
    }

    public void delete(Long id) {
        this.repository.deleteById(id);
    }
}
