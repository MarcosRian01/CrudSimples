package com.projetocrud.projetocrud.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.projetocrud.projetocrud.dtos.ProductRecordDTO;
import com.projetocrud.projetocrud.models.ProductModel;
import com.projetocrud.projetocrud.repositories.ProductRepository;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    
    // Service GET
    public List<ProductModel> getAllProducts() {
        return productRepository.findAll();
    }
    
    
    // Service POST
    public ProductModel saveProduct(ProductRecordDTO productRecordDTO) {
        var productModel = new ProductModel();
        BeanUtils.copyProperties(productRecordDTO, productModel);
        return productRepository.save(productModel);
    }
    
    
    // Service GET ID
    public ResponseEntity<Object> getOneProduct(UUID id) {
        Optional<ProductModel> productOptional = productRepository.findById(id);
        if (productOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product Not Found.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(productOptional.get());
    }
    
    
    // Service PUT
    public ResponseEntity<Object> updateProduct(UUID id, ProductRecordDTO productRecordDTO) {
        Optional<ProductModel> productOptional = productRepository.findById(id);
        if (productOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product Not Found.");
        }
        ProductModel productModel = productOptional.get();
        BeanUtils.copyProperties(productRecordDTO, productModel);
        productRepository.save(productModel);
        return ResponseEntity.status(HttpStatus.OK).body("Product updated successfully");
    }
    
    
    // Service DELETE
    public ResponseEntity<Object> deleteProduct(UUID id) {
        Optional<ProductModel> productOptional = productRepository.findById(id);
        if (productOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product Not Found.");
        }
        productRepository.delete(productOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("Product deleted successfully");
    }
    
}

