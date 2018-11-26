"use strict";

angular
.module("app")
.service("CartService", function($http) {
 const service = this;

 service.postData = (addItem) => {
  return $http({
   method: "POST",
   url: "/items",
   data: addItem
  });
 };

 service.updateData = (item) => {
  return $http({
   method: "PUT", 
   url: `/items/${item.id}`, 
   data: item
  });
 };

 service.deleteData = (id) => {
  return $http ({
   method:"DELETE",
   url:`/items/${id}`
  });
 };

 service.getData = () => {
  return $http ({
   method: "GET",
   url: "/items"
  });
 };
});