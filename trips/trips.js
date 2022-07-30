"use strict";

//import Module Pattern
import * as Trips from './lib_trips.js';


$(document).ready( () => {
   // const trips = new Trips();

    $("#add_trip").click( () => {
        const trip = new Trips.Trip( 
          $("#destination").val(), $("#miles").val(), $("#gallons").val() );

        if (trip.isValid) {
            Trips.push(trip); 
            $("#trip_list").val(Trips.toString());

            $("#destination").val("");
            $("#miles").val("");
            $("#gallons").val("");

            $("#destination").focus();
        } 
        else {
            alert("Please complete all fields.\nMiles and gallons " 
                + "must be numeric and greater than zero.");
            $("#destination").select();
        }
    });
    
    $("#destination").focus();
});