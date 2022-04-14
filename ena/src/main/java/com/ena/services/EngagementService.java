package com.ena.services;

import com.ena.entities.Engagement;
import com.ena.repositories.EngagementRepository;
import org.springframework.stereotype.Service;

@Service
public class EngagementService {
    private final EngagementRepository repository;

    public EngagementService(EngagementRepository engagementRepository) {
        this.repository = engagementRepository;
    }

    public Engagement add(Engagement engagement) {
        return repository.save(engagement);
    }

    public Engagement update(Engagement engagement) {
        return repository.save(engagement);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
