package com.ena.repositories;

import com.ena.entities.ValidationDossier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ValidationDossierRepository extends JpaRepository<ValidationDossier, Long> {
}
