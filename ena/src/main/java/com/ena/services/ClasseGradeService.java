package com.ena.services;

import com.ena.entities.ClasseGrade;
import com.ena.repositories.ClasseGradeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClasseGradeService {
    private final ClasseGradeRepository repository;

    public ClasseGradeService(ClasseGradeRepository classeGradeRepository) {
        this.repository = classeGradeRepository;
    }

    public ClasseGrade add(ClasseGrade grade) {
        return this.repository.save(grade);
    }

    public ClasseGrade update(ClasseGrade grade) {
        return this.repository.save(grade);
    }

    public void delete(int id) {
        this.repository.deleteById(id);
    }

    public List<ClasseGrade> findAll() {
        return this.repository.findAll();
    }

}
