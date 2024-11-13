package com.xag.exception;

import com.fasterxml.jackson.databind.util.LookupCache;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class ErrorDetails {
    private String error;
    private String details;
    private LocalDateTime timestamp;
}
