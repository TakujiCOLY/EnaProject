package com.ena.repositories;

import com.ena.entities.Engagement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface EngagementRepository extends JpaRepository<Engagement, Long> {
}
