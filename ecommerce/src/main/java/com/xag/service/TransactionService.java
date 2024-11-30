package com.xag.service;

import com.xag.model.Order;
import com.xag.model.Seller;
import com.xag.model.Transaction;

import java.util.List;

public interface TransactionService {
    Transaction createTransaction(Order order);
    List<Transaction> getTransactionBySellerId(Seller seller);
    List<Transaction> getAllTransactions();
}
