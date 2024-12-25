package com.store.storespring.services;

import com.store.storespring.dto.ProductDto;
import com.store.storespring.entities.Product;

import java.util.List;

public interface ProductService {
    public Product addProduct(ProductDto product);
    public List<Product> getAllProducts();
}
