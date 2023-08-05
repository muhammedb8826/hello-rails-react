import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage } from '../store/features/greeting/greetingSlice';

function Greetings() {
  const message = useSelector((state) => state.greeting.message);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchMessage());
  }, []);

  return (
    <div class="tv-container">
      <h1 id="greeting">{message.greeting}</h1>
    </div>
  );
}

export default Greetings;
