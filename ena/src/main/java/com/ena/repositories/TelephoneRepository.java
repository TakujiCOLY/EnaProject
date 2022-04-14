package com.ena.repositories;

import com.ena.entities.Telephone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface TelephoneRepository extends JpaRepository<Telephone, Long> {
}
