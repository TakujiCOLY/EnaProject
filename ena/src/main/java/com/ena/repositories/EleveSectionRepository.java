package com.ena.repositories;

import com.ena.entities.EleveSection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface EleveSectionRepository extends JpaRepository<EleveSection, Long> {
    @Query("SELECT CASE WHEN COUNT(e) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM EleveSection e " +
            "WHERE e.section.id = ?1 AND e.eleve.id = ?2")
    Boolean nomExist(int section, Long eleve);
}
