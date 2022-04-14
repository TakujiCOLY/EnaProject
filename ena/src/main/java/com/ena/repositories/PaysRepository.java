package com.ena.repositories;

import com.ena.entities.Pays;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface PaysRepository extends JpaRepository<Pays, Integer> {
    @Query("SELECT CASE WHEN COUNT(p) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM Pays p " +
            "WHERE p.nom = ?1")
    Boolean nomExist(String nom);
}
