package com.ena.repositories;

import com.ena.entities.Eleve;
import com.ena.entities.EleveCycle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface EleveCycleRepository extends JpaRepository<EleveCycle, Long> {
    @Query("SELECT CASE WHEN COUNT(e) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM EleveCycle e " +
            "WHERE e.cycle.id = ?1 AND e.eleve.id = ?2")
    Boolean nomExist(int cycle, Long eleve);
}
