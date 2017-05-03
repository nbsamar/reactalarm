import React, { Component } from 'react';
import 'react-date-picker/index.css';
import { DateField, Calendar } from 'react-date-picker';

export default () => {
  <h1> Alarm </h1>
  return <DateField
    forceValidDate
    defaultValue={"2016-05-30 09:23 AM"}
    dateFormat="YYYY-MM-DD hh:mm a"/>
}