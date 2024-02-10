import { parseISO,formatDistanceToNow } from "date-fns";  // these are for formatting and parsing dates

import React from 'react'

const TimeAgo = ({timestamp}) => {
    let timeAgo = ''
    if(timestamp){
     const date = parseISO(timestamp)  // this line converts the string timestamp from string to Date object
     const timePeriod = formatDistanceToNow(date); // this line calculates time period between current date and this date 
     timeAgo = `${timePeriod} ago`
    }




  return (
    <span title="{timestamp}">
        &nbsp; <i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo