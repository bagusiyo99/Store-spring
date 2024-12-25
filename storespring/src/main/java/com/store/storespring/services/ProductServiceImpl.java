package com.store.storespring.services;

import com.store.storespring.dto.ProductDto;
import com.store.storespring.dto.ProductResourceDto;
import com.store.storespring.dto.ProductVariantDto;
import com.store.storespring.entities.*;
//import com.store.storespring.mapper.ProductMapper;
import com.store.storespring.repositories.ProductRepository;
import com.store.storespring.specification.ProductSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;


@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryService categoryService;

//    @Autowired
//    private ProductMapper productMapper;

    @Override
    public Product addProduct(ProductDto product) {
        return null;
    }

    @Override
    public List<Product> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return products;
    }



    @Override
    public ProductDto getProductBySlug(String slug) {
        return null;
    }

    @Override
    public ProductDto getProductById(UUID id) {
        return null;
    }

    @Override
    public Product updateProduct(ProductDto productDto, UUID id) {
        return null;
    }

    @Override
    public Product fetchProductById(UUID uuid) throws Exception {
        return null;
    }

    private Product mapToProductEntity (ProductDto productDto){
        Product product = new Product();
        product.setName(productDto.getName());
        product.setDescription(productDto.getDescription());
        product.setBrand(productDto.getBrand());
        product.setNewArrival(productDto.isNewArrival());
        product.setPrice(productDto.getPrice());
        product.setRating(productDto.getRating());
        Category category = categoryService.getCategory(productDto.getCategoryId());
        if (null != category) {
            product.setCategory(category);
            UUID categoryTypeId = productDto.getCategoryTypeId();

            CategoryType categoryType = category.getCategoryTypes().stream().filter(categoryType1 -> categoryType1.getId().equals(categoryTypeId)).findFirst().orElse(null);
            product.setCategoryType(categoryType);
        }

        if (null != productDto.getVariants()) {
            product.setProductVariants(mapToProductVariant(productDto.getVariants(),product));
        }

        if (null != productDto.getProductResources()) {
            product.setResources(mapToProductResources(productDto.getProductResources(),product));
        }


        return productRepository.save(product);
    }

    private List<Resources> mapToProductResources(List<ProductResourceDto> productResources, Product product) {

        return  productResources.stream().map(productResourceDto -> {
            Resources resources = new Resources();
            resources.setName(productResourceDto.getName());
            resources.setType(productResourceDto.getType());
            resources.setUrl(productResourceDto.getUrl());
            resources.setIsPrimary(productResourceDto.getIsPrimary());
            resources.setProduct(product);
            return resources;
        }).collect(Collectors.toList());
    }

    private List<ProductVariant> mapToProductVariant(List<ProductVariantDto> productVariantDtos , Product product) {
        return productVariantDtos.stream().map(productVariantDto -> {
            ProductVariant productVariant = new ProductVariant();
            productVariant.setColor(productVariantDto.getColor());
            productVariant.setSize(productVariantDto.getSize());
            productVariant.setStockQuantity(productVariantDto.getStockQuantity());
            productVariant.setProduct(product);
            return productVariant;
        }).collect(Collectors.toList());
    }

}
