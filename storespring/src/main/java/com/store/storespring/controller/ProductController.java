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

//    @GetMapping
//    public ResponseEntity<List<ProductDto>> getAllProducts(@RequestParam
//    (required = false) UUID categoryId,
//    @RequestParam(required = false) UUID typeId) {
//        List<ProductDto> productList = productService.getAllProducts(categoryId,typeId);
//        return new ResponseEntity<>(productList, HttpStatus.OK);
//    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable UUID id){
        ProductDto productDto = productService.getProductById(id);
        return new ResponseEntity<>(productDto, HttpStatus.OK);
    }

    //   create Product
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody ProductDto productDto){
        Product product = productService.addProduct(productDto);
        return new ResponseEntity<>(product,HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@RequestBody ProductDto productDto,@PathVariable UUID id){
        Product product = productService.updateProduct(productDto,id);
        return new ResponseEntity<>(product,HttpStatus.OK);
    }

}
