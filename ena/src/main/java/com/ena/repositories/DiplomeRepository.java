package com.ena.repositories;

import com.ena.entities.Diplome;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface DiplomeRepository extends JpaRepository<Diplome, Long> {
}
