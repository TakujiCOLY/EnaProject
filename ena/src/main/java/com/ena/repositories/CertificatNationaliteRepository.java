package com.ena.repositories;

import com.ena.entities.CertificatNationalite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CertificatNationaliteRepository extends JpaRepository<CertificatNationalite, Long> {
}
