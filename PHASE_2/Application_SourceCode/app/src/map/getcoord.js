import{Coords} from './mapdata'
import{USCoords} from './USA'

export function getcoord(state,city) {
    // Result is a list of event_date, url and headline
    const value = [];

    if(city == 'NONE'){

       // console.log(Coords);
        for (var i  in USCoords){
            //console.log(Coords[i]);
            var ii = USCoords[i];
          //  console.log(ii.properties.city,city,ii.properties.state , state);
            if (ii.properties.state == state){
                
                for(var x in ii.coordinates){
                    var xx = ii.coordinates[x];
                   // console.log(xx);
                    var temp = {lng:xx[0],lat : xx[1]}
                  //  console.log(temp);
                    value.push(temp);
                }
            }
        }
    }else{

       // console.log(Coords);
        for (var i  in Coords){
            //console.log(Coords[i]);
            var ii = Coords[i];
          //  console.log(ii.properties.city,city,ii.properties.state , state);
            if (ii.properties.state == state && ii.properties.city == city){
                
                for(var x in ii.coordinates){
                    var xx = ii.coordinates[x];
                   // console.log(xx);
                    var temp = {lng:xx[0],lat : xx[1]}
                  //  console.log(temp);
                    value.push(temp);
                }
            }
        }

    }

    // console.log(value);
    return value;
}
