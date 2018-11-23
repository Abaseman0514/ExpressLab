"use strict";

angular
.module("app")
.controller("CartContoller", function (CartService) {
 const $ctrl = this;
 function edits(response) {
  $ctrl.items = response.data;
 }

 $ctrl.updateData = (item) => {
  CartService.updateData(item).then(edits);
 };

 CartService.getData().then(edits);

 $ctrl.deleteData = (id) => {
  CartService.deleteData(id).then(edits);
 };

 $ctrl.postData = (addItem) => {
  CartService.postData(addItem).then(edits);
  };
 });
