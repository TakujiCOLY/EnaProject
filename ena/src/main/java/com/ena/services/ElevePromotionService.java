package com.ena.services;

import com.ena.entities.ElevePromotion;
import com.ena.repositories.ElevePromotionRepository;
import org.springframework.stereotype.Service;

@Service
public class ElevePromotionService {
    private final ElevePromotionRepository repository;

    public ElevePromotionService(ElevePromotionRepository promotionRepository) {
        this.repository = promotionRepository;
    }

    public ElevePromotion add(ElevePromotion promotion) {
        return this.repository.save(promotion);
    }

    public ElevePromotion update(ElevePromotion promotion) {
        return this.repository.save(promotion);
    }

    public void delete(Long id) {
        this.repository.deleteById(id);
    }
}
