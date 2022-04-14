package com.ena.repositories;

import com.ena.entities.ClasseGrade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ClasseGradeRepository extends JpaRepository<ClasseGrade, Integer> {
    @Query("SELECT CASE WHEN COUNT(c) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM ClasseGrade c " +
            "WHERE c.nom = ?1")
    Boolean nomExist(String nom);
}
