package com.ena.repositories;

import com.ena.entities.VoieAcces;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface VoieAccesRepository extends JpaRepository<VoieAcces, Integer> {
    @Query("SELECT CASE WHEN COUNT(v) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM VoieAcces v " +
            "WHERE v.nom = ?1")
    Boolean nomExist(String nom);
}
