package com.ena.repositories;

import com.ena.entities.Echelon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface EchelonRepository extends JpaRepository<Echelon, Integer> {
    @Query("SELECT CASE WHEN COUNT(e) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM Echelon e " +
            "WHERE e.nom = ?1")
    Boolean nomExist(String nom);
}
