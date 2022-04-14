package com.ena.repositories;

import com.ena.entities.Dossier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource
public interface DossierRepository extends JpaRepository<Dossier, Long> {
    List<Dossier> findByEleveId(Long id);

    Optional<Dossier> findDossierById(Long id);
}
