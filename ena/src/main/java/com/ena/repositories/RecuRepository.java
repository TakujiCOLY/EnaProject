package com.ena.repositories;

import com.ena.entities.Recu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface RecuRepository extends JpaRepository<Recu, Long> {
    @Query("SELECT CASE WHEN COUNT(r) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM Recu r " +
            "WHERE r.numero = ?1")
    Boolean nomExist(String numero);
}
