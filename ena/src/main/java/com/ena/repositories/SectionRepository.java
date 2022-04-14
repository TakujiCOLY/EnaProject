package com.ena.repositories;

import com.ena.entities.Section;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SectionRepository extends JpaRepository<Section, Integer> {
    @Query("SELECT CASE WHEN COUNT(s) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM Section s " +
            "WHERE s.nom = ?1")
    Boolean nomExist(String nom);
}
