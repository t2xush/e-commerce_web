package com.xag.service;

import com.xag.model.Home;
import com.xag.model.HomeCategory;

import java.util.List;

public interface HomeService {
    public Home createHomePageData(List<HomeCategory> allCategories);
}
