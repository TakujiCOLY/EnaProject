package com.ena.repositories;

import com.ena.entities.Ville;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface VilleRepository extends JpaRepository<Ville, Integer> {
    List<Ville> findByRegionId(int id);

    @Query("SELECT CASE WHEN COUNT(v) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM Ville v " +
            "WHERE v.nom = ?1")
    Boolean nomExist(String nom);
}
