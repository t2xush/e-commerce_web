package com.xag.model;

import com.xag.domain.PaymentStatus;
import lombok.Data;

@Data
public class PaymentDetails {

    private String paymentId;
    private String stripePaymentLinkId;

    private String stripePaymentLinkReferenceId;

    private String stripePaymentLinkStatus;

    private String stripePaymentIdZWSP;

    private PaymentStatus status;
}
