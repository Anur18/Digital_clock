 setInterval(updatetime,1000);
        
    //this is the main fuction used to import date and time from date object    
        function updatetime()
         {  
            var today_time= new Date();
            var hours=today_time.getHours();//used to get housrs
            var min=today_time.getMinutes();//used to get minutes
            var sec=today_time.getSeconds();//used to get seconds
            min=check(min);
            sec=check(sec);
            hours=check(hours);
            timebar.innerHTML=hours+" : "+ min +" : "+sec +" : "+ str(hours);
           
            
            
         }
         //function used to represent hours
        function str(hours){
            if (hours<12){//as  we know if time is smaller than 12 it is AM
                strg="AM"
            }
            else{
                strg="PM"
            }
     
        return strg;
        }
        // function to place additonal place for 0 like (01,02....09)  
        function check(t){
        if(t<10){
            return "0"+ t;
        }
        else{
            return t;

        }
     

    }