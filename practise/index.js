var getNewArr = (arr) => {
    // var x = arr[0].split("").contains('a');
	var filter = arr.filter(t=>t.length > 5).filter(t=>t.split("").includes('a'));
    return filter;
}

console.log(getNewArr(['a', 'bbbbbbbb', 'afdsere43rdfsaff']));
