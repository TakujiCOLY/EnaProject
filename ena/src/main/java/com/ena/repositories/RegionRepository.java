package com.ena.repositories;

import com.ena.entities.Region;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface RegionRepository extends JpaRepository<Region, Integer> {
    List<Region> findByPaysId(int id);

    @Query("SELECT CASE WHEN COUNT(r) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM Region r " +
            "WHERE r.nom = ?1")
    Boolean nomExist(String nom);
}
