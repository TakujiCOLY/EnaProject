package com.ena.repositories;

import com.ena.entities.Urgence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface UrgenceRepository extends JpaRepository<Urgence, Long> {
}
