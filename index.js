
class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year){
    return  year - (this.startDate.getYear()+1900 )
  }
}

let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let final = 0 ;
    if (this.beginningLocation.horizontal === this.endingLocation.horizontal){
      final = this.endingLocation.vertical - this.beginningLocation.vertical ;
    } else if (this.beginningLocation.vertical === this.endingLocation.vertical){
      final = (eastWest.indexOf(this.endingLocation.horizontal)+1)-(eastWest.indexOf(this.beginningLocation.horizontal)+1);
    }else {
      final = (this.endingLocation.vertical - this.beginningLocation.vertical) + ((eastWest.indexOf(this.endingLocation.horizontal)+1)-(eastWest.indexOf(this.beginningLocation.horizontal)+1))

    }
    return final;
  }

  estimatedTime(peak = false){
    let time = 0 ;
    if (peak === true) {
      time = this.blocksTravelled() / 2
    }else {
      time = this.blocksTravelled() / 3;
    }
    return time;
  }
}
