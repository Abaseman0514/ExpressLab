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

 service.updateData = (updateItem, id) => {
  return $http({
   method: "PUT", 
   url: `/items/${items.id}`, 
   data: updateItem
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