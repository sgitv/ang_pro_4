angular.module('galPhoto')

.factory('instagram',function($resource){
	return {
		fetchPopular:function(callback){
			$http({
				method: 'GET',
				url: '  https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ce51230982122a6153416e7012e31235&tags='+$scope.tag+'&extras=url_s&format=json&nojsoncallback=1'
			 }).then(function successCallback(response)	{
					console.log("good");
					console.log("status=",response);
					$scope.urli=response;					
				}, 
				function errorCallback(response) {
					console.log("response is not getting");
			});


		}
	}
})