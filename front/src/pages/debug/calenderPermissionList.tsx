import React, { useState } from "react"
import CalenderPermissionList from '../../components/list/calenderPermissionList';
import { Publicity } from "../../components/button/publicityButton";
import { Status } from "../../components/button/statusButton";

const testPage = () => {
  const [status, setStatus] = useState<Status>('ok');
  const [publicity, setPublicity] = useState<Publicity>('all');
  console.log(`status: ${status} publicity: ${publicity}`);
  return (
      <CalenderPermissionList />
  )
}

export default testPage