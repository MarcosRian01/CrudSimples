package com.projetocrud.projetocrud.controllers;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.projetocrud.projetocrud.dtos.ProductRecordDTO;
import com.projetocrud.projetocrud.models.ProductModel;
import com.projetocrud.projetocrud.repositories.ProductRepository;
import com.projetocrud.projetocrud.services.ProductService;

import jakarta.validation.Valid;

@RestController
public class ProductController {

	@Autowired
	ProductRepository productRepository;
	
	
	private final ProductService productService;
	
	
	public ProductController(ProductService productService) {
        this.productService = productService;
    }
	
	
	@PostMapping("/products")
	public ResponseEntity<ProductModel> saveProduct(@RequestBody @Valid ProductRecordDTO productRecordDTO) {
        ProductModel savedProduct = productService.saveProduct(productRecordDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
    }
	
	
	@GetMapping("/products")
	public List<ProductModel> getAllProducts() {
        return productService.getAllProducts();
    }
	
	
	
	@GetMapping("/products/{id}")
	public ResponseEntity<Object> getOneProduct(@PathVariable(value="id") UUID id) {
        return productService.getOneProduct(id);
    }
	
	
	@PutMapping("/products/{id}")
    public ResponseEntity<Object> updateProduct(@PathVariable(value="id") UUID id, @RequestBody @Valid ProductRecordDTO productRecordDTO) {
        return productService.updateProduct(id, productRecordDTO);
    }
	
	@DeleteMapping("/products/{id}")
	public ResponseEntity<Object> deleteProduct(@PathVariable(value="id") UUID id) {
        return productService.deleteProduct(id);
    }
	
}