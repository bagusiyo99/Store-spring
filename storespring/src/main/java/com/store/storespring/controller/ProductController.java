package com.store.storespring.controller;

import com.store.storespring.dto.ProductDto;
import com.store.storespring.entities.Product;
import com.store.storespring.services.ProductService;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/products")
@CrossOrigin
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService){
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> productList = productService.getAllProducts();
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }



    //   create Product
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody ProductDto productDto){
        Product product = productService.addProduct(productDto);

//        return new ResponseEntity<>(product,HttpStatus.CREATED);
        return null;
    }


}
