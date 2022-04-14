package com.ena.repositories;

import com.ena.entities.Corps;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CorpsRepository extends JpaRepository<Corps, Integer> {
    @Query("SELECT CASE WHEN COUNT(c) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM Corps c " +
            "WHERE c.nom = ?1")
    Boolean nomExist(String nom);
}
