package com.ena.repositories;

import com.ena.entities.Arrete;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ArreteRepository extends JpaRepository<Arrete, Long> {
}
