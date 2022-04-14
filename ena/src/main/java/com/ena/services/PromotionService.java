package com.ena.services;

import com.ena.entities.Promotion;
import com.ena.repositories.PromotionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PromotionService {
    private final PromotionRepository repository;

    public PromotionService(PromotionRepository promotionRepository) {
        this.repository = promotionRepository;
    }

    public Promotion add(Promotion promotion) {
        return this.repository.save(promotion);
    }

    public Promotion update(Promotion promotion) {
        return this.repository.save(promotion);
    }

    public void delete(Integer id) {
        this.repository.deleteById(id);
    }

    public List<Promotion> findAll() {
        return this.repository.findAll();
    }
}
