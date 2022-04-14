package com.ena.exception;

public class DossierNotFoundException extends RuntimeException {
    public DossierNotFoundException(String message) {
        super(message);
    }
}
