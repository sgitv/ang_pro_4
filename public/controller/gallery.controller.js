angular.module('galPhoto')
.controller('GalleryCtrl',['$scope','$http','Lightbox',function($scope,$http,Lightbox){
$scope.images = [];
var imgArray = [];
	$http({
				method: 'GET',
				url: '  https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9c1240bb52636ed202e29fa14dfbc907&tags=cars&extras=url_s&format=json&nojsoncallback=1'
			 }).then(function successCallback(response)	{
			 	
						$scope.images=response.data.photos.photo;
						console.log($scope.images);	
						for(var i=0,len = response.data.photos.photo.length;i<len;i++)
						{
							 
								imgArray.push(response.data.photos.photo[i].url_s.replace('_m','_c'));
							
						}						
				}, 
				function errorCallback(response) {
					console.log("response is not getting");
			});
			 $scope.openLightboxModal = function(index){
			 	Lightbox.openModal(imgArray,index)
			 }
}])