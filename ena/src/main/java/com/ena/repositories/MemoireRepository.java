package com.ena.repositories;

import com.ena.entities.Memoire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface MemoireRepository extends JpaRepository<Memoire, Long> {
}
