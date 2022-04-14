package com.ena.repositories;

import com.ena.entities.ElevePromotion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ElevePromotionRepository extends JpaRepository<ElevePromotion, Long> {
    @Query("SELECT CASE WHEN COUNT(e) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM ElevePromotion e " +
            "WHERE e.promotion.id = ?1 AND e.eleve.id = ?2")
    Boolean nomExist(int promotion, Long eleve);
}
