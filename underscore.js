

var _ = {
  average: function(arr){
  	var sum = 0;
  	for (var i = 0; i < arr.length; i++){
      sum += arr[i];
  	}
  	return sum/arr.length;
  },
  contains: function(arr, present){
    for (var i = 0; i < arr.length; i++){
    	if (arr[i] === present)
    		return true;
    }	
    return false;
  },
  first: function(arr){
  	for (var i = 0; i < arr.length; i++){
  		if (arr[i] === 0 || arr[i] === false)
  			return arr[i];
  		else if (arr[i])
  			return arr[i];
  	}
  	return "This array does not contain any values!";
  },
  last: function(arr){
  	for (var i = arr.length-1; i >= 0; i--){
  		if (arr[i] === 0 || arr[i] === false)
  			return arr[i];
  		else if (arr[i])
  			return arr[i];
  	}
  	return "This array does not contain any values!";
  },
  max: function(arr){
  	var max;
  	for (var i = 0; i < arr.length; i++){
  		if(arr[i] === 0 || arr[i]){
  			max = arr[i];
  			break;
  		}	
  	}	
  	for (var j = 0; j < arr.length; j++){
      if (arr[j]>max)
      	max = arr[j];
  	}
  	return max;	
  },
  min: function(arr){
  	var min;
  	for (var i = 0; i < arr.length; i++){
  		if(arr[i] === 0 || arr[i]){
  			min = arr[i];
  			break;
  		}	
  	}	
  	for (var j = 0; j < arr.length; j++){
      if (arr[j]<min)
      	min = arr[j];
  	}
  	return min;	
  },
  shuffle: function(array) {
    var copy = [], n = array.length, i;
    // While there remain elements to shuffle…
    while (n) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);
      // If not already shuffled, move it to the new array.
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
    return copy;
  },
  sample: function(array, num) {
  	if(!num)
      num = 1;
    var samp = [], i;
    // While num > 0,
    while (num) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);
      // If not already shuffled, move it to the new array.
      if (i in array) {
        samp.push(array[i]);
        delete array[i];
        num--;
      }
    }
    return samp;
  },
  difference: function(array1, array2){
  	var diff = [], found = false;
  	for(var i = 0; i < array2.length; i++){
  		for(var j = 0; j < array1.length; j++){
          if (array2[i]===array1[j])
          	found = true;
        } 
        if (found === false)
          diff.push(array2[i]); 
        found = false;
  	}
  	for(var k = 0; k < array1.length; k++){
  		for(var l = 0; l < array2.length; l++){
          if (array1[k]===array2[l])
          	found = true;
        } 
        if (found === false)
          diff.push(array1[k]); 
        found = false;
  	}
  	return diff;
  },
  indexOf: function(array, num){
  	for(var i = 0; i < array.length; i++){
  		if(array[i] === num)
  			return i;
  	}
  	return -1;
  },
  pluck: function(object, property){
  	var objValues = [];
  	for(var i = 0; i < object.length; i++){
  		objValues.push(object[i][property]);
  	}
  	return objValues;
  }
};
