module.exports=(function(){
	var cart=[];

function additem(item)//private
{
	cart.push(item);
}
function getallitem()
{
	return cart;
}
return{
	add:additem,
	getitm:getallitem
}
})();//selfenvoking