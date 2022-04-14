package com.ena.repositories;

import com.ena.entities.CertificatAdministratif;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CertificatAdministratifRepository extends JpaRepository<CertificatAdministratif, Long> {
}
