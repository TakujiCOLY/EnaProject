package com.ena.repositories;

import com.ena.entities.Statut;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface StatutRepository extends JpaRepository<Statut, Integer> {
    @Query("SELECT CASE WHEN COUNT(s) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM Statut s " +
            "WHERE s.nom = ?1")
    Boolean nomExist(String nom);
}
