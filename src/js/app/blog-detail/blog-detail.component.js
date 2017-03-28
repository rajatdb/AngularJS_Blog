'use strict';

angular.module('blogDetail').
  component('blogDetail', {
      templateUrl: '/templates/blog-detail.html',
      controller:  function(Post, $http, $location, $routeParams, $scope){
            $scope.commentsExist = false;
            // console.log(Post.query())
            // console.log(Post.get())

            Post.query(function(data){
              $scope.notFound = true
              $scope.comments = []
              angular.forEach(data, function(post){
                  if(post.id == $routeParams.id){
                    $scope.notFound = false
                    $scope.post = post
                    if(post.comments) {
                        $scope.comments = post.comments
                    }
                    resetReply()
                  }
                })
            })

            $scope.deleteComment = function(comment){
                $scope.$apply(
                    $scope.comments.splice(comment, 1)
                )
                // someResource.$delete
            }
            $scope.addReply = function(){
                console.log($scope.reply)
                $scope.comments.push($scope.reply)
                //$scope.post.comments.push("abc")
                resetReply()
            }
            function resetReply(){
                $scope.reply = {
                   "id": $scope.comments.length + 1,
                   "text": "",
                }
            }

            // $http.get("/json/posts.json").then(successCallback, errorCallback);
            //
            // function successCallback(response, status, config, statusText){
            //       $scope.notFound = true
            //       console.log(response.data)
            //       var blogItems = response.data
            //       $scope.post = response.data
            //       console.log("blogItems")
            //        angular.forEach(blogItems, function(post){
            //           if(post.id == $routeParams.id){
            //             $scope.notFound = false
            //             $scope.post = post
            //           }
            //         })
            //   }
            // function  errorCallback(response, status, config, statusText) {
            //       console.log(response)
            // }


            if ($scope.notFound) {
              console.log("Not Found")
                // change loaction
              $location.path("/")
            }

        // var blogItems = [
        //   {title: "Some Title", id: 1, description: "This is a book", publishDate: "2016-09-01"},
        //   {title: "Title", id: 2, description: "This is a book", publishDate: "2014-09-01"},
        //   {title: "Tea", id: 3, description: "This is a book", publishDate: "2013-09-01"},
        //   {title: "Light", id: 4, description: "This is a book", publishDate: "2015-09-02"},
        // ]
        //   //console.log($routeParams)
        //   $scope.title = "Blog " + $routeParams.id
        //
        //   angular.forEach(blogItems, function(post){
        //     if(post.id == $routeParams.id){
        //       $scope.notFound = false
        //       $scope.post = post
        //     }
        //   })


    }
});

//    console.log("hello")
//  $scope.title = 'Hi there!'
//    $scope.clicks = 0
//    $scope.someClickTest = function(){
//      console.log("clicked")
//      $scope.clicks += 1
//      $scope.title = 'Clicked ' + $scope.clicks + ' times'
//    }
//  });

  //component.module('blogList');
