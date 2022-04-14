package com.ena.repositories;

import com.ena.entities.Cycle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CycleRepository extends JpaRepository<Cycle, Integer> {
    @Query("SELECT CASE WHEN COUNT(c) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM Cycle c " +
            "WHERE c.nom = ?1")
    Boolean nomExist(String nom);
}
