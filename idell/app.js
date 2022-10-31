var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    console.log("My controller.....");
    $scope.users = [
        {name: "shang", email: "shaangchi@gmial.com", fullname: "haha"},
        {name: "Hieu", email: "hie@gmial.com", fullname: "hieu tran"},
        {name: "anh hai", email: "hehe@gmial.com", fullname: "anh hai"}

    ];
    $scope.addUser = function () {
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        $scope.message = "New User Added successfully";

    };
   $scope.selectUser = function(user){
        console.log(user);
        $scope.clickedUser = user ;

    };
    $scope.editUser =function (){
        $scope.message="User Edited successfully";
};
    $scope.deleteUser =function (){
        $scope.users.splice($scope.users.indexOf($scope.clickedUser),1);
        $scope.message= "User Deleted successfully";

    };
    $scope.clearMessage =function (){
        $scope.message="";
    };
});
