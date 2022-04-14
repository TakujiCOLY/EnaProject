package com.ena.repositories;

import com.ena.entities.Casier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CasierRepository extends JpaRepository<Casier, Long> {
}
