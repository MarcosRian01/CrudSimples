package com.projetocrud.projetocrud.dtos;

import java.math.BigDecimal;
import java.util.UUID;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ProductRecordDTO(
		@NotBlank
		String name, 
		@NotNull
		BigDecimal value) {
	
}