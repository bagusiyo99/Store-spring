package com.store.storespring.services;

import com.store.storespring.dto.ProductDto;
import com.store.storespring.entities.Product;

import java.util.List;
import java.util.UUID;

public interface ProductService {
    public Product addProduct(ProductDto product);
    public List<Product> getAllProducts();

    ProductDto getProductBySlug(String slug);

    ProductDto getProductById(UUID id);

    Product updateProduct(ProductDto productDto, UUID id);

    Product fetchProductById(UUID uuid) throws Exception;
}
