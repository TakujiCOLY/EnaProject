package com.ena.repositories;

import com.ena.entities.Hierarchie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface HierarchieRepository extends JpaRepository<Hierarchie, Integer> {
    @Query("SELECT CASE WHEN COUNT(h) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM Hierarchie h " +
            "WHERE h.nom = ?1")
    Boolean nomExist(String nom);
}
