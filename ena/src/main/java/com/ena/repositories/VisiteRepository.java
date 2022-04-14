package com.ena.repositories;

import com.ena.entities.Visite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface VisiteRepository extends JpaRepository<Visite, Long> {
}
