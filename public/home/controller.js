"use strict";

angular
   .module("app")

   .controller("CartController", function (CartService) {
      const $ctrl = this;

      function edits(response) {
         $ctrl.items = response.data;
      }

      $ctrl.updateData = (item) => {
         CartService.updateData(item).then(edits);
      };

      CartService.getData().then(edits);

      $ctrl.removeItem = (id) => {
         CartService.removeItem(id).then(edits);
      };

      $ctrl.postData = (addItem) => {
         CartService.postData(addItem).then(edits);
      };
   });