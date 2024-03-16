describe('EventZet Login test', () => 
{
    var Login=require('./login.js');
    var EventCreate=require('./event_creation.js');
   //var EventDetails=require('./Eventcreate_details.js')
    
   
      console.log("inside describe flow selection 1"); 

         it('It should navigate to the demo page',async ()=>{
            console.log("inside flowit 2");
           
           await Login.login().
          then(() => EventCreate.eventcreation());
           console.log("process Complete");
         });
});