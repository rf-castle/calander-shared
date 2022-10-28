import React, {useState} from 'react'
import StatusButtons, {Status} from '../../components/statusButtons';
import PublicityButton, {Publicity} from '../../components/publicityButton';

const testPage = () => {
  const [status, setStatus] = useState<Status>('ok');
  const [publicity, setPublicity] = useState<Publicity>('all');
  console.log(`status: ${status} publicity: ${publicity}`)
  return (
      <div>
        <StatusButtons status={status} setStatus={setStatus}/>
        <PublicityButton status={publicity} setStatus={setPublicity}/>
      </div>
  )
}

export default testPage