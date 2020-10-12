package com.test.common;

import javax.persistence.*;

@Entity
@Table(name = "sample_info")
public class Object {
    @Id
    @Column(name = "system_id")
    private int systemId;

    @Column(name = "store_name")
    private String storeName;

    @Column(name = "store_location")
    private String storeLocation;

    public Object(){}

    public Object(int systemId, String storeName, String storeLocation){
        super();
        this.systemId=systemId;
        this.storeName=storeName;
        this.storeLocation=storeLocation;
    }

    public int getSystemId() {
        return systemId;
    }

    public void setSystemId(int systemId) {
        this.systemId = systemId;
    }

    public String getStoreName() {
        return storeName;
    }

    public void setStoreName(String storeName) {
        this.storeName = storeName;
    }

    public String getStoreLocation() {
        return storeLocation;
    }

    public void setStoreLocation(String storeLocation) {
        this.storeLocation = storeLocation;
    }
}
