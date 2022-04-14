package com.ena.controllers;

import com.ena.entities.ClasseGrade;
import com.ena.services.ClasseGradeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/classeGrades")
public class ClasseGradeController {
    public final ClasseGradeService service;

    public ClasseGradeController(ClasseGradeService service) {
        this.service = service;
    }

    @PostMapping(value = "/add", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ClasseGrade> add(@RequestBody ClasseGrade classeGrade) {
        ClasseGrade classeGrade1 = service.add(classeGrade);
        return new ResponseEntity<>(classeGrade1, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<ClasseGrade> update(@RequestBody ClasseGrade classeGrade) {
        ClasseGrade classeGrade1 = service.update(classeGrade);
        return new ResponseEntity<>(classeGrade1, HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/findAll")
    public ResponseEntity<List<ClasseGrade>> findAll() {
        List<ClasseGrade> classeGrades = service.findAll();
        return new ResponseEntity<>(classeGrades, HttpStatus.OK);
    }
}
