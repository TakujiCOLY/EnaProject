package com.ena.repositories;

import com.ena.entities.BulletinSalaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface BulletinSalaireRepository extends JpaRepository<BulletinSalaire, Long> {
}
