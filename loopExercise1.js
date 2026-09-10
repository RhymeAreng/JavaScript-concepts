/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

let cell = "#";
let counter = 0 ;

for (counter = 0 ; counter <= 7 ; counter++)
    {   
        let number = 0;
        let cell_count = "";
        while (number < counter)
        { 
            cell_count = cell_count + cell;
            number++;
        }
        console.log(cell_count);
    }