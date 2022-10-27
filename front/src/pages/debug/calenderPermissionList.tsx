import React, { useState } from "react"
import CalenderPermissionList from '../../components/calenderPermissionList';
import { Publicity } from "../../components/publicityButton";
import { Status } from "../../components/statusButtons";

const testPage = () => {
  const [status, setStatus] = useState<Status>('ok');
  const [publicity, setPublicity] = useState<Publicity>('all');
  console.log(`status: ${status} publicity: ${publicity}`);
  return (
      <CalenderPermissionList/>
  )
}

export default testPage