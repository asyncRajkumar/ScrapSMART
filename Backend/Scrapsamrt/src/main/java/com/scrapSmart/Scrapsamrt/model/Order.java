package com.scrapSmart.Scrapsamrt.model;

import lombok.Builder;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document(collection = "orders")
public class Order {
    @Id
    private String id;
    private LocalDate bookedTime = LocalDate.now();
    private LocalDate deliveryDate;
    private String deliverTime;
    private Address address;
    private String estimateWeight;
    private String remark;
    private String status;
    @DBRef
    private AuthModel user;

    @Override
    public String toString() {
        return "Order{" +
                "id='" + id + '\'' +
                ", bookedTime=" + bookedTime +
                ", deliveryDate=" + deliveryDate +
                ", deliverTime='" + deliverTime + '\'' +
                ", address=" + address +
                ", estimateWeight='" + estimateWeight + '\'' +
                ", remark='" + remark + '\'' +
                ", status='" + status + '\'' +
                ", totalAmount='" + totalAmount + '\'' +
                ", user=" + user +
                '}';
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public LocalDate getBookedTime() {
        return bookedTime;
    }

    public void setBookedTime(LocalDate bookedTime) {
        this.bookedTime = bookedTime;
    }

    public LocalDate getDeliveryDate() {
        return deliveryDate;
    }

    public void setDeliveryDate(LocalDate deliveryDate) {
        this.deliveryDate = deliveryDate;
    }

    public String getDeliverTime() {
        return deliverTime;
    }

    public void setDeliverTime(String deliverTime) {
        this.deliverTime = deliverTime;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public String getEstimateWeight() {
        return estimateWeight;
    }

    public void setEstimateWeight(String estimateWeight) {
        this.estimateWeight = estimateWeight;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(String totalAmount) {
        this.totalAmount = totalAmount;
    }

    public AuthModel getUser() {
        return user;
    }

    public void setUser(AuthModel user) {
        this.user = user;
    }

    public Order() {
    }

    @Builder.Default
    private String totalAmount= "NA";

    public Order(String id, LocalDate bookedTime, LocalDate deliveryDate, String deliverTime, Address address, String estimateWeight, String remark, String status, String totalAmount, AuthModel user) {
        this.id = id;
        this.bookedTime = bookedTime;
        this.deliveryDate = deliveryDate;
        this.deliverTime = deliverTime;
        this.address = address;
        this.estimateWeight = estimateWeight;
        this.remark = remark;
        this.status = status;
        this.totalAmount = totalAmount;
        this.user = user;
    }



}
