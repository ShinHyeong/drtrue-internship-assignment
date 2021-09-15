import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ErrorMsg() {
  const [msgs, setMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMsgs = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 msgs 를 초기화하고
      setError(null);
      setMsg(null);
      // loading 상태를 true로 초기화
      setLoading(true);
      const response = await axios.get(
        'https://dapi.kakao.com/v2/search/image?query=안녕'
      );
      setMsg(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMsgs();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!msgs) return null;
  return (
    <>
      <ul>
        {msgs.map(msg => (
          <li key={msg.errorType}>
            {msg.errorType} - {msg.message} 
          </li>
        ))}
      </ul>
      <button onClick={fetchMsgs}>다시 불러오기</button>
    </>
  );
}

export default ErrorMsg;