
  // var standard_input=process.stdin;
  //  standard_input.setEncoding('utf-8');

module.exports.book=function(id,name)
{
	this.id=id;
	this.name=name;
}
module.exports.resbook=(function(){
	var books=[];

	function addbook(bok)
	{
       books.push(bok);
	}
	display=function()
	{
      return books;
	}
	function findbook(id){
        for(i=0;i<books.length;i++)
        {
        	if(books[i].id==id)
        		return books[i];
        }
	}
	function remove(id)
	{
  
    // console.log("Enter the id");
    // standard_input.on('data',funtion(data)
    
		for( i=0;i<books.length;i++)
		{
			if(books[i].id==id)
			{
			books.splice(i,1);
	        }
		}
		
		process.exit();
	
   }
	return{
		add:addbook,
		dis:display,
		find:findbook,
		remove:remove
	}
})();