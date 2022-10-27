import React, {useState} from 'react'
import StatusButton, {Status} from '../../components/button/statusButton';
import PublicityButton, {Publicity} from '../../components/button/publicityButton';

const testPage = () => {
  const [status, setStatus] = useState<Status>('ok');
  const [publicity, setPublicity] = useState<Publicity>('all');
  console.log(`status: ${status} publicity: ${publicity}`)
  return (
      <div>
        <StatusButton status={status} setStatus={setStatus}/>
        <PublicityButton status={publicity} setStatus={setPublicity}/>
      </div>
  )
}

export default testPage