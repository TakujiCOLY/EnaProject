package com.ena.repositories;

import com.ena.entities.Eleve;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource
public interface EleveRepository extends JpaRepository<Eleve, Long> {

    @Query("SELECT CASE WHEN COUNT(e) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM Eleve e " +
            "WHERE e.nci = ?1")
    Boolean nciExist(String nci);

    Optional<Eleve> findEleveById(Long aLong);
}
