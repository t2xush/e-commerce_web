package com.xag.service.impl;

import com.xag.model.Cart;
import com.xag.model.Coupon;
import com.xag.model.User;
import com.xag.repository.CartRepository;
import com.xag.repository.CouponRepository;
import com.xag.service.CouponService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CouponServiceImpl implements CouponService {
    private final CouponRepository couponRepository;
    private final CartRepository cartRepository;

    @Override
    public Cart applyCoupon(String code, double orderValue, User user) throws Exception {
        Coupon coupon=couponRepository.findByCode(code);
        Cart cart=cartRepository.findByUserId(user.getId());
        if (coupon==null){
            throw new Exception("coupon not valid");
        }
        if (user.getUsedCoupons().contains(coupon)){
            throw  new Exception("coupon already used");
        }
        if (orderValue<coupon.getMinimumOrderValue()){
            throw new Exception(" valid for minimum order value"+coupon.getMinimumOrderValue());
        }


        return null;
    }

    @Override
    public Cart removeCoupon(String code, User user) {
        return null;
    }

    @Override
    public Coupon findCouponById(Long id) {
        return null;
    }

    @Override
    public Coupon createCoupon(Coupon coupon) {
        return null;
    }

    @Override
    public List<Coupon> findAllCoupons() {
        return null;
    }

    @Override
    public void deleteCoupon(Long id) {

    }
}
