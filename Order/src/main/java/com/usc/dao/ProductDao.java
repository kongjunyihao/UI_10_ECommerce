package com.usc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.usc.beans.Product;

@Repository
public interface ProductDao extends JpaRepository<Product,Integer> {
	Product findByProductname(String productname);
}
