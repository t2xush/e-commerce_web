package com.xag.repository;

import com.xag.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Long>,
        JpaSpecificationExecutor<Product> {
    List<Product> findBySellerId(Long id);

    @Query("SELECT p From Product p WHERE (:query IS NULL OR LOWER(p.title)"+
    "LIKE LOWER(concat('%', :query, '%')))" +
            "OR (:query IS NULL OR LOWER(p.category.name)"+
            "LIKE LOWER(concat('%', :query, '%')))")
    List<Product> searchProduct(@Param("query") String query);


}
